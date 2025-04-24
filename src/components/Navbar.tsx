
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { Toggle } from '@/components/ui/toggle';

const NavLink = ({ to, title, isActive }: { to: string; title: string; isActive: boolean }) => {
  return (
    <Link
      to={to}
      className={`text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'text-foreground hover:text-accent'}`}
    >
      {title}
    </Link>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navVariants = {
    hidden: { opacity: 0.4, y: -90 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 40,
      },
    },
  };
  
  const containerVariants = {
    normal: {
      width: '100%',
      transition: { type: "spring", stiffness: 200, damping: 60 },
    },
    shrunk: {
      width: '700px',
      transition: { type: "spring", stiffness: 200, damping: 60 },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full top-0 left-0 z-50  flex justify-center py-2`}
    >
      <motion.div
        variants={containerVariants}
        initial="normal"
        animate={isScrolled ? "shrunk" : "normal"}
        className={`container-custom bg-background flex items-center justify-between shadow-lg dark:shadow-white/10 rounded-full py-1 px-6`}
      >
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-bold flex items-center gap-2">
            <span className="text-accent font-bold text-2xl">B</span>
            <span className="inline">Pathan<span className="text-accent">.</span></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/about"
            title="About"
            isActive={location.pathname === "/about"}
          />
          <NavLink
            to="/projects"
            title="Projects"
            isActive={location.pathname === "/projects"}
          />
          <NavLink
            to="/experience"
            title="Experience"
            isActive={location.pathname === "/experience"}
          />
          <NavLink
            to="/contact"
            title="Contact"
            isActive={location.pathname === "/contact"}
          />
          <NavLink
            to="/resume"
            title="Resume"
            isActive={location.pathname === "/resume"}
          />
        </nav>

        {/* Theme Toggle - Always visible on all screens */}
        <Toggle
          pressed={theme === 'dark'}
          onPressedChange={toggleTheme}
          aria-label="Toggle theme"
          className="ml-2"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </Toggle>
      </motion.div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background/95 backdrop-blur-lg w-full absolute top-full"
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            <NavLink
              to="/"
              title="Home"
              isActive={location.pathname === "/"}
            />
            <NavLink
              to="/about"
              title="About"
              isActive={location.pathname === "/about"}
            />
            <NavLink
              to="/projects"
              title="Projects"
              isActive={location.pathname === "/projects"}
            />
            <NavLink
              to="/experience"
              title="Experience"
              isActive={location.pathname === "/experience"}
            />
            <NavLink
              to="/contact"
              title="Contact"
              isActive={location.pathname === "/contact"}
            />
            <NavLink
              to="/resume"
              title="Resume"
              isActive={location.pathname === "/resume"}
            />
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
