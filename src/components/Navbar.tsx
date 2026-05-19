import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  // Scroll effect + active section detector
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(item.href);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-xl bg-background/70 border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[300px] h-[300px] bg-blue-400/10 blur-[120px] -top-20 -left-20" />
        <div className="absolute w-[300px] h-[300px] bg-cyan-400/10 blur-[120px] -bottom-20 -right-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="relative font-display text-xl md:text-2xl font-bold text-gradient cursor-pointer"
            whileHover={{ scale: 1.08 }}
          >
            Varel's Portfolio

            {/* Glow effect */}
            <span className="absolute -inset-2 bg-blue-400/20 blur-xl opacity-0 hover:opacity-100 transition duration-500 rounded-full"></span>
          </motion.a>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-8 relative">

            {navItems.map((item) => (
              <div key={item.href} className="relative">
                <motion.a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`relative font-medium transition ${
                    active === item.href
                      ? 'text-blue-400'
                      : 'text-muted-foreground hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.a>

                {/* ACTIVE UNDERLINE */}
                {active === item.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-2 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"
                  />
                )}
              </div>
            ))}

            {/* THEME */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <Sun className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Moon className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>

          {/* MOBILE */}
          <div className="flex items-center gap-2 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun /> : <Moon />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden backdrop-blur-xl bg-background/80 border-t border-white/10"
          >
            <div className="flex flex-col items-center py-6 gap-6">

              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-lg font-medium text-muted-foreground hover:text-blue-400 transition"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.label}
                </motion.a>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}