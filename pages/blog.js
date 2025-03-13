import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { FaRegCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import Parser from 'rss-parser';

export async function getStaticProps() {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL('https://mohaimenkhan.substack.com/feed');
    // Limit to the latest 5 posts
    const posts = feed.items.slice(0, 5).map(item => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      contentSnippet: item.contentSnippet?.substring(0, 200) + "..." || ""
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
    <Layout title="Blog | Mohaimen Khan" description="Read Mohaimen Khan's latest blog posts on software engineering, AI, and technology.">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-6">
            <span className="text-code-green">{"<"}</span>
            Blog
            <span className="text-code-green">{"/>"}</span>
          </h1>
          <p className="text-xl text-gray-300">
            Thoughts on software engineering, AI, and technology.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {posts.length > 0 ? (
            <div className="space-y-10">
              {posts.map((post, index) => (
                <motion.article 
                  key={index}
                  className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-code-blue transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-3 font-mono">
                      <FaRegCalendarAlt className="mr-2 text-code-green" />
                      <time dateTime={new Date(post.pubDate).toISOString()}>
                        {new Date(post.pubDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-3 hover:text-code-blue transition-colors">
                      <a href={post.link} target="_blank" rel="noopener noreferrer">
                        {post.title}
                      </a>
                    </h2>
                    
                    <p className="text-gray-300 mb-4">{post.contentSnippet}</p>
                    
                    <a 
                      href={post.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-code-blue hover:underline font-medium"
                    >
                      Read full post <FaExternalLinkAlt className="ml-2" size={12} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-800 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-2">No posts available</h3>
              <p className="text-gray-300">
                Unable to fetch blog posts at the moment. Please check back later.
              </p>
            </div>
          )}
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="https://mohaimenkhan.substack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-code-blue text-white rounded font-medium hover:bg-blue-700 transition"
            >
              View all posts on Substack <FaExternalLinkAlt className="ml-2" size={12} />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-24 bg-gray-800 rounded-lg p-8 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-code-yellow mr-2">&gt;</span> Subscribe to my newsletter
          </h2>
          <p className="text-gray-300 mb-6">
            Get my latest posts delivered straight to your inbox. I write about software engineering,
            AI advancements, and career development in tech.
          </p>
          <a 
            href="https://mohaimenkhan.substack.com/subscribe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-700 text-white rounded font-medium hover:bg-gray-600 transition"
          >
            Subscribe on Substack
          </a>
        </motion.div>
      </div>
    </Layout>
  );
}