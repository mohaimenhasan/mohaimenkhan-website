import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <FaGithub size={24} />,
    url: 'https://github.com/mohaimenhasan',
    color: 'hover:text-white'
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin size={24} />,
    url: 'https://linkedin.com/in/mohaimenhasan',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Twitter',
    icon: <FaTwitter size={24} />,
    url: 'https://twitter.com/mohaimenhasan',
    color: 'hover:text-blue-500'
  },
  {
    name: 'Email',
    icon: <FaEnvelope size={24} />,
    url: 'mailto:mohaimenhasan@gmail.com',
    color: 'hover:text-red-400'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (in a real app, you'd send to your backend)
    try {
      // Add a slight delay to simulate network request
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout title="Contact | Mohaimen Khan" description="Get in touch with Mohaimen Khan, Senior Software Engineer at Microsoft.">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-6 text-center">
            <span className="text-code-green">{"<"}</span>
            Get in Touch
            <span className="text-code-green">{"/>"}</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 text-center">
            Interested in working together? Have a question? Feel free to reach out!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-8">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                  <span className="text-code-yellow mr-2">&gt;</span> Connect With Me
                </h2>
                
                <div className="space-y-6">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center text-gray-300 ${link.color} transition-colors`}
                      whileHover={{ x: 5 }}
                    >
                      <span className="bg-gray-700 rounded-full p-2 mr-4">
                        {link.icon}
                      </span>
                      <span className="font-medium">{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="text-code-green mr-2">#</span> Location
                </h2>
                <p className="text-gray-300 font-mono">
                  <span className="text-code-purple">const</span> <span className="text-code-blue">location</span> = <span className="text-code-orange">"Toronto, Canada"</span>;
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700"
            >
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="text-code-green mr-2">#</span> Send Me a Message
              </h2>
              
              {submitted ? (
                <motion.div 
                  className="text-center py-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-code-green text-5xl mb-4">
                    <FaPaperPlane />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300 mb-4">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="text-code-blue hover:underline font-mono"
                  >
                    &lt; Send another message /&gt;
                  </button>
                </motion.div>
              ) : (
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2 font-mono">
                      <span className="text-code-purple">const</span> <span className="text-code-blue">name</span>
                    </label>
                    <input 
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-white focus:border-code-blue focus:outline-none focus:ring-1 focus:ring-code-blue"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 font-mono">
                      <span className="text-code-purple">const</span> <span className="text-code-blue">email</span>
                    </label>
                    <input 
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-white focus:border-code-blue focus:outline-none focus:ring-1 focus:ring-code-blue"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2 font-mono">
                      <span className="text-code-purple">const</span> <span className="text-code-blue">message</span>
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-white focus:border-code-blue focus:outline-none focus:ring-1 focus:ring-code-blue"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <motion.button 
                    type="submit"
                    className="w-full py-3 px-6 bg-code-blue text-white rounded font-medium hover:bg-blue-700 transition flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}