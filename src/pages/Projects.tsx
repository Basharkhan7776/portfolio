
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

const ProjectsPage = () => {
  useEffect(() => {
    // Update document title
    document.title = "Projects";

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore projects by Bashar Khan');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Projects />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default ProjectsPage;
