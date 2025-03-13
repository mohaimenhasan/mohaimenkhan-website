import Link from 'next/link'
import { motion } from 'framer-motion'
import Parser from 'rss-parser'

export async function getStaticProps() {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL('https://mohaimenkhan.substack.com/feed');
    // Limit to the latest 5 posts
    const posts = feed.items.slice(0, 5).map(item => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      contentSnippet: item.contentSnippet || ""
    }));

    return {
      props: { posts }
    };
  } catch (error) {
    console.error('Failed to fetch RSS feed:', error);
    return {
      props: { posts: [] }
    };
  }
}

export default function Blog({ posts }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Blog</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link href="/projects" className="hover:text-blue-400">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main className="p-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">Latest Posts</h2>
          <ul className="space-y-4">
            {posts.map((post, index) => (
              <li key={index} className="border border-gray-700 p-4 rounded hover:bg-gray-800 transition">
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold">
                  {post.title}
                </a>
                <p className="text-gray-400 text-sm">{new Date(post.pubDate).toLocaleDateString()}</p>
                <p className="mt-2">{post.contentSnippet}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <a href="https://mohaimenkhan.substack.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Read more on Substack →
            </a>
          </div>
        </motion.div>
      </main>
      <footer className="p-4 text-center text-gray-500">
        © {new Date().getFullYear()} Mohaimen Khan.
      </footer>
    </div>
  )
}
