import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

export const metadata: Metadata = {
  title: 'Bashar Khan - Software Developer',
  description: 'Portfolio website, a software developer specializing in building digital experiences.',
  icons: {
    icon: './favicon.ico',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Navbar />
      <Hero />
      <Footer />
      <BottomNav />
    </div>
  );
}
