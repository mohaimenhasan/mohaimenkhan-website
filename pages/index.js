import Layout from '../components/Layout';
import ParticleBackground from '../components/ParticleBackground';
import CodeBlock from '../components/CodeBlock';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaBriefcase, FaLaptopCode, FaUserAlt } from 'react-icons/fa';

const codeSnippet = `// Welcome to my portfolio
import { Mohaimen } from 'portfolio';

const skills = [
  'JavaScript', 'React', 'Next.js',
  'TypeScript', 'Node.js', 'Python',
  'Cloud', 'AI', 'Machine Learning'
];

function Introduction() {
  return (
    <Mohaimen 
      role="Senior Software Engineer @ Microsoft"
      focus="Cloud & AI"
      passion="Building innovative tools for developers"
    />
  );
}`;

export default function Home() {
  return (
    <Layout>
      <div className="relative min-h-screen">
        <ParticleBackground />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div 
              className="lg:w-1/2 mb-10 lg:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-4">
                <span className="block">Hi, I'm</span> 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-code-blue to-code-purple">
                  Mohaimen Khan
                </span>
              </h1>
              
              <div className="text-xl md:text-2xl text-gray-300 mb-6 font-mono">
                <span className="text-code-green">&gt;</span> Senior Software Engineer
                <span className="text-white animate-cursor-blink ml-1">_</span>
              </div>
              
              <p className="text-gray-300 text-lg mb-8">
                Building innovative solutions for complex problems at Microsoft's Cloud & AI division.
                I'm passionate about developer tools, AI technologies, and creating impactful software.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <motion.a 
                  href="/about" 
                  className="px-6 py-3 rounded bg-code-blue text-white font-medium flex items-center gap-2 hover:bg-blue-700 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaUserAlt /> About Me
                </motion.a>
                
                <motion.a 
                  href="/projects" 
                  className="px-6 py-3 rounded bg-gray-800 text-white font-medium flex items-center gap-2 hover:bg-gray-700 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLaptopCode /> Projects
                </motion.a>
                
                <motion.a 
                  href="/contact" 
                  className="px-6 py-3 rounded bg-gray-800 text-white font-medium flex items-center gap-2 hover:bg-gray-700 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaBriefcase /> Contact
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 max-w-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <CodeBlock 
                code={codeSnippet} 
                language="javascript"
                fileName="mohaimen.js"
              />
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-code-green mr-2">#</span> Featured Projects & Skills
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-code-blue transition-colors">
                <h3 className="text-code-yellow font-mono mb-2">Microsoft</h3>
                <p className="text-gray-300 mb-4">Leading development on AI-powered experiences for developer productivity tools.</p>
                <Link href="/projects" className="text-code-blue hover:underline flex items-center">
                  <span className="mr-2">Learn more</span>
                  <FaArrowRight size={12} />
                </Link>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-code-blue transition-colors">
                <h3 className="text-code-yellow font-mono mb-2">Full-Stack Development</h3>
                <p className="text-gray-300 mb-4">Experience with React, Node.js, TypeScript, Next.js and modern cloud architectures.</p>
                <Link href="/about" className="text-code-blue hover:underline flex items-center">
                  <span className="mr-2">View skills</span>
                  <FaArrowRight size={12} />
                </Link>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-code-blue transition-colors">
                <h3 className="text-code-yellow font-mono mb-2">Machine Learning</h3>
                <p className="text-gray-300 mb-4">Building AI solutions that enhance developer workflows and productivity.</p>
                <Link href="/projects" className="text-code-blue hover:underline flex items-center">
                  <span className="mr-2">See projects</span>
                  <FaArrowRight size={12} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}