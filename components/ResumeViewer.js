import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { motion } from 'framer-motion';
import { FaDownload, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Set the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumeViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setIsLoading(false);
  };

  const changePage = (offset) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  return (
    <motion.div 
      className="my-8 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gray-800 p-4 rounded-lg shadow-xl max-w-full">
        {isLoading && (
          <div className="flex justify-center items-center h-[600px] w-[400px] sm:w-[600px] bg-gray-900">
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-code-blue mx-auto mb-4"></div>
              <p className="font-mono">Loading resume...</p>
            </div>
          </div>
        )}
        
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div className="h-[600px]"></div>}
          error={
            <div className="flex justify-center items-center h-[600px] w-[400px] sm:w-[600px] bg-gray-900 text-white text-center">
              <div>
                <p className="font-mono mb-2">Failed to load PDF</p>
                <p className="text-sm">Please try downloading instead</p>
              </div>
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            width={600}
            className="mx-auto"
          />
        </Document>
        
        {numPages && (
          <div className="flex items-center justify-between mt-4 text-white">
            <button
              onClick={previousPage}
              disabled={pageNumber <= 1}
              className={`p-2 rounded ${pageNumber <= 1 ? 'text-gray-500' : 'hover:bg-gray-700'}`}
            >
              <FaChevronLeft />
            </button>
            
            <p className="font-mono text-sm">
              Page {pageNumber} of {numPages}
            </p>
            
            <button
              onClick={nextPage}
              disabled={pageNumber >= numPages}
              className={`p-2 rounded ${pageNumber >= numPages ? 'text-gray-500' : 'hover:bg-gray-700'}`}
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
      
      <motion.a 
        href={pdfUrl} 
        download="Mohaimen_Khan_Resume.pdf"
        className="mt-4 px-4 py-2 bg-code-blue text-white rounded flex items-center space-x-2 hover:bg-blue-600 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaDownload />
        <span>Download Resume</span>
      </motion.a>
    </motion.div>
  );
};

export default ResumeViewer;