import Resume from "@/components/Resume";
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore projects by Bashar Khan',
};


export default function ResumePage() {
  return <div className="min-h-screen">
    <Navbar />
    <Resume />
    <Footer />
    <BottomNav />
  </div>
} 