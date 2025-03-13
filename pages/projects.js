import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Projects & Experience</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
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
          <h2 className="text-3xl font-bold mb-6">Experience & Key Projects</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">Microsoft</h3>
              <p className="text-gray-400">Senior Software Engineer, Cloud & AI Division</p>
              <p className="mt-2">
                Working on developer productivity and AI-driven solutions, including advancements in generative AI that enhance code context for GitHub Copilot.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">RBC Amplify</h3>
              <p className="text-gray-400">Software Engineering Intern</p>
              <p className="mt-2">
                Developed an AI-powered rental bidding platform allowing tenants to bid on properties before public listing.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">TELUS</h3>
              <p className="text-gray-400">Software Engineering Intern</p>
              <p className="mt-2">
                Utilized machine learning to detect and resolve network bottlenecks, enhancing telecom network performance.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">BlueCat Networks</h3>
              <p className="text-gray-400">Software Engineering Intern</p>
              <p className="mt-2">
                Automated virtual machine deployments, gaining practical experience in cloud computing and DevOps practices.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Personal Projects</h3>
              <p className="mt-2">
                Built various projects including a Spotify music trend predictor, mood analyzer, and more – showcasing full-stack and machine learning skills.
              </p>
            </div>
          </div>
        </motion.div>
      </main>
      <footer className="p-4 text-center text-gray-500">
        © {new Date().getFullYear()} Mohaimen Khan.
      </footer>
    </div>
  )
}
