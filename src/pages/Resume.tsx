
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ResumeComponent from '@/components/Resume';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

const ResumePage = () => {
  useEffect(() => {
    // Update document title
    document.title = "Resume - Bashar Khan";

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Download the resume of Bashar Khan');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <ResumeComponent />
      <Footer />
      <BottomNav />
    </div>
  );
}

export default ResumePage;
