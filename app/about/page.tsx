import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Bashar Khan',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <About />
      <Footer />
      <BottomNav />
    </div>
  );
} 