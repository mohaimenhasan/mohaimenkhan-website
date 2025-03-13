import Link from 'next/link'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">About Me</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/projects" className="hover:text-blue-400">Projects</Link></li>
            <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
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
          <h2 className="text-3xl font-bold mb-4">Hello, I'm Mohaimen Khan</h2>
          <p className="mb-4">
            I am a passionate Software Engineer with a focus on innovative technologies and developer tools.
            Currently, I work at Microsoft in the Cloud & AI division, where I contribute to the evolution of
            developer productivity through AI-powered solutions.
          </p>
          <p className="mb-4">
            With experience at major companies like Microsoft, RBC, TELUS, and BlueCat Networks, I have honed my skills in
            full-stack development, machine learning, and cloud computing. My work includes developing patents in generative
            AI and innovative projects that transform how developers interact with code.
          </p>
          <p>
            This website showcases my professional journey, projects, and insights. Feel free to explore and connect.
          </p>
        </motion.div>
      </main>
      <footer className="p-4 text-center text-gray-500">
        © {new Date().getFullYear()} Mohaimen Khan.
      </footer>
    </div>
  )
}
