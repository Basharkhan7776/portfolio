import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience of Bashar khan',
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Experience />
      <Footer />
      <BottomNav />
    </div>
  );
} 