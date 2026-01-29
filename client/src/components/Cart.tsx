import { useCartStore } from '@/lib/store';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingCart, X, Plus, Minus, Send, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { toast } from 'sonner';

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeItem, updateQuantity, clearCart } = useCartStore();
  
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const handleCheckout = () => {
    if (items.length === 0) return;

    const message = `*Novo Pedido - PáscoArt 2026*\n\n` +
      items.map(item => `- ${item.quantity}x ${item.name}${item.details ? ` (${item.details})` : ''}: R$ ${(item.price * item.quantity).toFixed(2)}`).join('\n') +
      `\n\n*Total: R$ ${total.toFixed(2)}*`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5512991895547?text=${encodedMessage}`, '_blank');
    
    toast.success('Pedido enviado para o WhatsApp!');
    clearCart();
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Cart Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-2xl flex items-center justify-center group"
      >
        <ShoppingCart className="w-7 h-7 group-hover:animate-bounce" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-primary">
            {itemCount}
          </span>
        )}
      </motion.button>

      {/* Cart Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-background border-l border-border z-[70] flex flex-col shadow-2xl"
            >
              <div className="p-6 flex items-center justify-between border-b border-border">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-bold">Seu Carrinho</h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center">
                      <ShoppingCart className="w-10 h-10 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground font-medium">Seu carrinho está vazio</p>
                    <Button onClick={() => setIsOpen(false)} variant="outline" className="rounded-full">
                      Continuar Comprando
                    </Button>
                  </div>
                ) : (
                  items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-4 p-4 bg-card rounded-2xl border border-border shadow-sm group hover:border-primary/30 transition-all"
                    >
                      {item.image && (
                        <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                      )}
                      <div className="flex-1 space-y-1">
                        <h3 className="font-bold text-foreground leading-tight">{item.name}</h3>
                        {item.details && <p className="text-xs text-muted-foreground">{item.details}</p>}
                        <p className="text-primary font-bold">R$ {item.price.toFixed(2)}</p>
                        
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center gap-3 bg-muted rounded-full px-2 py-1">
                            <button
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="p-1 hover:text-primary transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:text-primary transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {items.length > 0 && (
                <div className="p-6 border-t border-border bg-muted/30 space-y-4">
                  <div className="flex items-center justify-between text-lg">
                    <span className="font-medium">Total</span>
                    <span className="font-bold text-2xl text-primary">R$ {total.toFixed(2)}</span>
                  </div>
                  <Button
                    onClick={handleCheckout}
                    className="w-full py-6 rounded-full text-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                  >
                    Finalizar Pedido
                    <Send className="w-5 h-5" />
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Você será redirecionado para o WhatsApp
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
