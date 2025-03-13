import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Mohaimen Khan</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center flex-1">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center p-8"
        >
          <h2 className="text-4xl font-bold mb-4">Welcome to My Personal Website</h2>
          <p className="mb-8">
            I’m Mohaimen Khan, a Software Engineer passionate about building innovative solutions with code.
          </p>
          <Link href="/about">
            <a className="px-6 py-3 bg-blue-500 rounded hover:bg-blue-600 transition">
              Learn More About Me
            </a>
          </Link>
        </motion.div>
      </main>
      <footer className="p-4 text-center text-gray-500">
        © {new Date().getFullYear()} Mohaimen Khan. All rights reserved.
      </footer>
    </div>
  )
}
