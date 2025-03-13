import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const AwardCard = ({ 
  title, 
  description, 
  url, 
  year
}) => {
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
          {url && (
            <motion.a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
              whileHover={{ scale: 1.2 }}
            >
              <FaExternalLinkAlt size={16} />
            </motion.a>
          )}
        </div>
        
        <p className="text-gray-300 mb-4">{description}</p>
        
        {year && (
          <div className="mt-auto">
            <span className="px-2 py-1 text-xs font-mono rounded bg-gray-700 text-code-green">
              {year}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AwardCard;