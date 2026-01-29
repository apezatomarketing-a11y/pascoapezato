import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import WhatsappIcon from './WhatsappIcon';

export default function FloatingWhatsapp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-40 group">
          {/* Ping Animation Background */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
          />
          
          <motion.a
            href="https://wa.me/5512991895547?text=Olá! Gostaria de conversar sobre os ovos de páscoa"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-2xl hover:shadow-2xl transition-all duration-300 group"
            aria-label="Abrir WhatsApp"
          >
            <WhatsappIcon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
