import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';

const ProjectCard = ({ 
  title, 
  description, 
  tags = [], 
  githubUrl, 
  liveUrl, 
  codeSnippet
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 h-full flex flex-col"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6 flex-1">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="flex space-x-3">
            {githubUrl && (
              <motion.a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.2 }}
              >
                <FaGithub size={18} />
              </motion.a>
            )}
            {liveUrl && (
              <motion.a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.2 }}
              >
                <FaExternalLinkAlt size={16} />
              </motion.a>
            )}
          </div>
        </div>
        
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-mono rounded bg-gray-700 text-code-blue"
            >
              {tag}
            </span>
          ))}
        </div>

        {codeSnippet && (
          <motion.button
            className="text-sm text-code-yellow hover:text-code-blue font-mono flex items-center"
            onClick={() => setShowDetails(!showDetails)}
            whileHover={{ x: 5 }}
          >
            <span className="mr-1">{showDetails ? '-' : '+'}</span>
            <span>{showDetails ? 'Hide details' : 'View details'}</span>
          </motion.button>
        )}
      </div>
      
      {codeSnippet && showDetails && (
        <motion.div 
          className="border-t border-gray-700 p-4 bg-gray-900 overflow-x-auto"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <pre className="font-mono text-sm text-gray-300 whitespace-pre-wrap">
            <code>{codeSnippet}</code>
          </pre>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectCard;