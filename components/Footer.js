import { FaHeart, FaCode, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-terminal-black text-gray-400 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
              <span className="text-code-green font-mono">&gt;</span>
              <code className="text-code-yellow font-mono">console.log(</code>
              <span className="text-code-orange font-mono">'Built with'</span>
              <code className="text-code-yellow font-mono">);</code>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <FaCode className="text-code-blue" />
              <span>Next.js</span>
              <span>+</span>
              <FaHeart className="text-code-red" />
              <span>by Mohaimen Khan</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-3">
              <motion.a 
                href="https://github.com/mohaimenhasan" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="hover:text-white"
              >
                <FaGithub size={22} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/mohaimenhasan" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="hover:text-white"
              >
                <FaLinkedin size={22} />
              </motion.a>
              <motion.a 
                href="https://twitter.com/mohaimenhasan" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="hover:text-white"
              >
                <FaTwitter size={22} />
              </motion.a>
            </div>
            <div className="font-mono text-sm">
              <span className="text-code-purple">const</span>{" "}
              <span className="text-code-blue">year</span>{" "}
              <span className="text-white">=</span>{" "}
              <span className="text-code-orange">{new Date().getFullYear()}</span>;
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;