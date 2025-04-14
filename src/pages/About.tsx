
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

const AboutPage = () => {
  useEffect(() => {
    // Update document title
    document.title = "About";

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'About Bashar Khan');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <About />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default AboutPage;
