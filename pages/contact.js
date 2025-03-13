import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    // You can add extra logic if needed before the form submits
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Contact</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link href="/projects" className="hover:text-blue-400">Projects</Link></li>
            <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
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
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          {submitted ? (
            <p>Thank you for reaching out! I will get back to you soon.</p>
          ) : (
            <form 
              action="https://formspree.io/f/xpzvkwrl" 
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-gray-300">Name</label>
                <input type="text" name="name" id="name" required className="w-full p-2 rounded bg-gray-800 border border-gray-700"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300">Email</label>
                <input type="email" name="email" id="email" required className="w-full p-2 rounded bg-gray-800 border border-gray-700"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300">Message</label>
                <textarea name="message" id="message" required rows="5" className="w-full p-2 rounded bg-gray-800 border border-gray-700"></textarea>
              </div>
              <button type="submit" className="px-6 py-3 bg-blue-500 rounded hover:bg-blue-600 transition">
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </main>
      <footer className="p-4 text-center text-gray-500">
        © {new Date().getFullYear()} Mohaimen Khan.
      </footer>
    </div>
  )
}
