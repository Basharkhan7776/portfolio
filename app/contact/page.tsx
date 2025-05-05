import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Bashar Khan',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Contact />
      <Footer />
      <BottomNav />
    </div>
  );
} 