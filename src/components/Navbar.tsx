import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/content';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Only show light text on home page when not scrolled
  const isHomePage = location.pathname === '/';
  const useLightText = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`transition-all duration-500 ${
          useLightText
            ? 'bg-slate-900/40 backdrop-blur-md border-b border-white/10'
            : 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 z-50">
              <div className={`text-xl md:text-2xl font-bold transition-colors duration-500 ${
                useLightText ? 'text-white' : 'text-slate-800'
              }`}>
                <span className={useLightText ? 'text-indigo-300' : 'text-indigo-500'}>Site</span>Round
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    useLightText
                      ? location.pathname === link.path
                        ? 'text-white bg-white/20'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                      : location.pathname === link.path
                        ? 'text-indigo-600 bg-indigo-50'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className={`ml-3 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg ${
                  useLightText
                    ? 'bg-white text-slate-800 hover:bg-white/90'
                    : 'bg-indigo-500 text-white hover:bg-indigo-600'
                }`}
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors z-50 ${
                isMobileMenuOpen
                  ? 'text-slate-800'
                  : useLightText
                    ? 'text-white hover:bg-white/10'
                    : 'text-slate-800 hover:bg-slate-100'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Menu Panel */}
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl md:hidden"
              >
                <div className="flex flex-col h-full p-6 pt-24">
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.3 }}
                      >
                        <Link
                          to={link.path}
                          className={`block px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                            location.pathname === link.path
                              ? 'bg-indigo-50 text-indigo-600'
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.32, duration: 0.3 }}
                    className="mt-6"
                  >
                    <Link
                      to="/contact"
                      className="block w-full px-6 py-3 bg-indigo-500 text-white rounded-xl font-medium text-center hover:bg-indigo-600 transition-colors shadow-lg"
                    >
                      Get a Quote
                    </Link>
                  </motion.div>
                  
                  {/* Contact Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-auto pt-8 border-t border-slate-100"
                  >
                    <p className="text-sm text-slate-500 mb-2">Get in touch</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm text-indigo-600 font-medium"
                    >
                      {siteConfig.email}
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
