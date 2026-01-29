import { useState, useEffect } from 'react';
import { X, Egg } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';

export default function DarkModeNote() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Verificar se já foi fechado anteriormente
    const wasClosed = localStorage.getItem('darkModeNoteClosed');
    if (wasClosed) {
      setIsClosed(true);
      return;
    }

    // Mostrar após 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
    localStorage.setItem('darkModeNoteClosed', 'true');
  };

  if (isClosed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-24 left-6 z-50 max-w-xs"
        >
          <div className="relative bg-card/95 backdrop-blur-sm border border-primary/30 rounded-xl shadow-xl p-5 overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 w-6 h-6 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center transition-colors shadow-sm"
              aria-label="Fechar"
            >
              <X className="w-3 h-3" />
            </button>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Egg className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground mb-1">
                  Monte seu próprio Ovo de Páscoa
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  Crie uma combinação única com seus sabores favoritos!
                </p>
                <Link href="/produtos#personalizar">
                  <button 
                    onClick={handleClose}
                    className="text-xs font-bold text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                  >
                    Personalizar Agora →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
