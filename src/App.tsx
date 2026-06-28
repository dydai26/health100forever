import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import WhyChooseUs from './components/WhyChooseUs';
import Programs from './components/Programs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

export const App: React.FC = () => {
  const [isAdminRoute, setIsAdminRoute] = useState(() => window.location.pathname === '/admin');

  useEffect(() => {
    // Disable browser automatic scroll restoration on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Force scroll to top on mount
    window.scrollTo(0, 0);

    // Watch for browser history navigation (back/forward keys)
    const handleLocationChange = () => {
      setIsAdminRoute(window.location.pathname === '/admin');
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const handleCloseAdmin = () => {
    window.history.pushState({}, '', '/');
    setIsAdminRoute(false);
  };

  return (
    <>
      {isAdminRoute ? (
        /* Dedicated Full-Page Admin Dashboard */
        <AdminPanel onClose={handleCloseAdmin} />
      ) : (
        /* Public Frontpage website */
        <>
          <Navbar />
          <main>
            <Hero />
            <TrustBar />
            <WhyChooseUs />
            <Programs />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
