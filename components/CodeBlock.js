import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CopyButton = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 px-2 py-1 text-xs bg-gray-700 rounded hover:bg-gray-600 transition-colors text-white"
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
};

const CodeBlock = ({ code, language = 'javascript', fileName, highlight = [] }) => {
  const [typedCode, setTypedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    if (code.length === 0) return;
    
    let i = 0;
    const typingInterval = setInterval(() => {
      setTypedCode(code.substring(0, i));
      i++;
      
      if (i > code.length) {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 10); // typing speed
    
    return () => clearInterval(typingInterval);
  }, [code]);

  return (
    <motion.div 
      className="my-6 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {fileName && (
        <div className="flex items-center bg-gray-800 border-b border-gray-700 px-4 py-2 text-gray-300 font-mono text-sm rounded-t-md">
          <div className="flex space-x-2 mr-4">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          {fileName}
        </div>
      )}
      
      <div className={`relative ${fileName ? 'rounded-b-md' : 'rounded-md'} overflow-hidden`}>
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          wrapLines={true}
          showLineNumbers
          lineProps={lineNumber => {
            const style = { display: 'block' };
            if (highlight.includes(lineNumber)) {
              style.backgroundColor = 'rgba(62, 68, 82, 0.5)';
            }
            return { style };
          }}
          customStyle={{
            margin: 0,
            borderRadius: fileName ? '0 0 0.375rem 0.375rem' : '0.375rem',
            fontSize: '0.95rem',
          }}
        >
          {typedCode}
        </SyntaxHighlighter>
        
        {!isTyping && <CopyButton content={code} />}
        
        {isTyping && (
          <div className="absolute bottom-2 right-2 text-gray-500 text-xs font-mono animate-pulse">
            Typing...
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CodeBlock;