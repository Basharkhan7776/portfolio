
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Bashar Khan - Software Developer";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Portfolio website, a software developer specializing in building digital experiences.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Index;
