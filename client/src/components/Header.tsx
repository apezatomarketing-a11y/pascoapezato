import { useThemeStore } from '@/lib/store';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { scrollToTop } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';

export default function Header() {
  const { theme, toggleTheme } = useThemeStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo - PáscoArt com Imagem do Ovo */}
        <Link href="/">
          <a className="flex items-center gap-3 group" onClick={scrollToTop}>
            <div className="flex items-center gap-3 group">
              <img 
                src="/images/branding/logo_egg.png" 
                alt="PáscoArt Logo" 
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" 
              />
              <img 
                src="/images/branding/logo_text.png" 
                alt="PáscoArt" 
                className="h-8 w-auto hidden sm:block" 
              />
              <span className="text-2xl font-bold text-foreground sm:hidden">PáscoArt</span>
            </div>
          </a>
        </Link>

        {/* Desktop Navigation - Simplified */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link href={item.path}>
                <a
                  className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary ${
                    location === item.path ? 'text-primary' : 'text-foreground/80'
                  }`}
                  onClick={() => scrollToTop()}
                >
                  {item.name}
                </a>
              </Link>
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${location === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted transition-colors text-foreground/80 hover:text-primary"
            aria-label="Alternar tema"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ y: -20, opacity: 0, rotate: -90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 20, opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </motion.div>
            </AnimatePresence>
          </button>
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-background border-l border-border z-50 lg:hidden flex flex-col shadow-2xl"
            >
              <div className="p-6 flex items-center justify-between border-b border-border/50">
                <span className="font-heading font-bold text-xl">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.path}>
                    <a
                      className="text-2xl font-bold text-foreground/90 hover:text-primary transition-colors"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        scrollToTop();
                      }}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
