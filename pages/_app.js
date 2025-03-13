import '../styles/globals.css';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Fix for window is not defined error with the PDF viewer
    if (typeof window !== 'undefined') {
      // Client-side only code
      try {
        const pdfjs = require('react-pdf');
        pdfjs.pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.pdfjs.version}/pdf.worker.js`;
      } catch (error) {
        console.error('Error setting up PDF.js worker:', error);
      }
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;