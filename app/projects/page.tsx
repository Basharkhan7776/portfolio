import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore projects by Bashar Khan',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Projects />
      <Footer />
      <BottomNav />
    </div>
  );
} 