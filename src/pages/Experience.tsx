
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

const ExperiencePage = () => {
  useEffect(() => {
    // Update document title
    document.title = "Experience";

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional experience of Bashar khan');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Experience />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default ExperiencePage;
