import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';

const Layout = ({ children, title = 'Mohaimen Khan - Senior Software Engineer', description = 'Personal website and portfolio of Mohaimen Khan, Senior Software Engineer at Microsoft.' }) => {
  const router = useRouter();
  const currentPage = router.pathname === '/' 
    ? 'home' 
    : router.pathname.substring(1);

  return (
    <div className="min-h-screen bg-terminal-black flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <Header currentPage={currentPage} />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;