import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // Start blinking cursor
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      return () => clearInterval(cursorInterval);
    }
  }, [currentIndex, text]);

  return (
    <div className="font-mono text-lg md:text-xl">
      <span className="text-code-green">&gt; </span>
      <span className="text-code-yellow">{displayText}</span>
      {showCursor && <span className="text-white animate-cursor-blink">_</span>}
    </div>
  );
};

const Header = ({ currentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: '/', text: 'Home', id: 'home' },
    { href: '/about', text: 'About', id: 'about' },
    { href: '/projects', text: 'Projects', id: 'projects' },
    { href: '/blog', text: 'Blog', id: 'blog' },
    { href: '/contact', text: 'Contact', id: 'contact' },
  ];

  const socials = [
    { href: 'https://github.com/mohaimenhasan', icon: <FaGithub size={20} />, label: 'GitHub' },
    { href: 'https://linkedin.com/in/mohaimenkhan', icon: <FaLinkedin size={20} />, label: 'LinkedIn' },
    { href: 'https://x.com/whoismohaimen', icon: <FaTwitter size={20} />, label: 'Twitter' },
  ];

  return (
    <header className="py-4 px-6 bg-terminal-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-white font-mono flex items-center">
            <span className="text-code-blue">&lt;</span>
            <span className="mx-1">MK</span>
            <span className="text-code-blue">/&gt;</span>
          </Link>
          
          <div className="ml-6 hidden md:block">
            <TypingEffect text="Mohaimen Khan // Senior Software Engineer" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.id}>
                <Link 
                  href={link.href} 
                  className={`hover:text-code-blue transition-colors py-2 ${
                    currentPage === link.id ? 'text-code-blue border-b-2 border-code-blue' : 'text-gray-300'
                  }`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-4 pl-6 border-l border-gray-700">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 focus:outline-none" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-terminal-black border-t border-gray-800 mt-4"
        >
          <ul className="py-2">
            {links.map((link) => (
              <li key={link.id}>
                <Link 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 px-6 hover:bg-gray-800 transition-colors ${
                    currentPage === link.id ? 'text-code-blue border-l-4 border-code-blue pl-5' : 'text-gray-300'
                  }`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center py-4 space-x-6 border-t border-gray-800">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;