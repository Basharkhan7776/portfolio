
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

const ContactPage = () => {
  useEffect(() => {
    // Update document title
    document.title = "Contact";

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get in touch with Bashar Khan');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Contact />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default ContactPage;
