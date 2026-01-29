import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Heart, Star, Search, Plus, Sparkles, ChevronRight, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCartStore } from '@/lib/store';
import { toast } from 'sonner';

export default function Produtos() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { addItem } = useCartStore();

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'colher', name: 'De Colher' },
    { id: 'casca', name: 'Cascas Recheadas' },
    { id: 'mini', name: 'Mini Ovos' },
  ];

  const produtos = [
    {
      id: 'maracuja',
      name: 'Ovo Maracujá Premium',
      category: 'colher',
      price: 45.00,
      image: '/images/ovo-maracuja.png',
      rating: 4.9,
      reviews: 128,
      description: 'Recheio de maracujá fresco em casca de chocolate branco',
      badge: '⭐ Mais Vendido',
    },
    {
      id: 'ninho',
      name: 'Ovo Ninho & Nutella',
      category: 'colher',
      price: 52.00,
      image: '/images/ovo-ninho-nutella.png',
      rating: 5.0,
      reviews: 156,
      description: 'Leite Ninho com Nutella - irresistível',
      badge: '❤️ Favorito',
    },
    {
      id: 'brigadeiro',
      name: 'Ovo Brigadeiro Gourmet',
      category: 'colher',
      price: 50.00,
      image: '/images/ovo-brigadeiro.png',
      rating: 4.7,
      reviews: 82,
      description: 'Ovo de colher com recheio de brigadeiro artesanal',
      badge: '🔥 Hot',
    },
    {
      id: 'morango',
      name: 'Ovo Morango Elegante',
      category: 'colher',
      price: 46.00,
      image: '/images/ovo-morango.png',
      rating: 4.6,
      reviews: 71,
      description: 'Ovo de colher com recheio de morango fresco',
      badge: '🌸 Novo',
    },
    {
      id: 'mini-pistache',
      name: 'Mini Ovo Pistache Real',
      category: 'mini',
      price: 15.00,
      image: '/images/mini-ovos.png',
      rating: 4.9,
      reviews: 45,
      description: 'Creme de pistache puro em mini casca amarga',
      badge: '✨ Lançamento',
    },
    {
      id: 'mini-avelã',
      name: 'Mini Ovo Avelã Crocante',
      category: 'mini',
      price: 12.00,
      image: '/images/mini-ovos.png',
      rating: 4.8,
      reviews: 38,
      description: 'Gianduia artesanal com pedaços de avelã',
      badge: '🌰 Intenso',
    },
    {
      id: 'mini-limao',
      name: 'Mini Ovo Mousse de Limão',
      category: 'mini',
      price: 10.00,
      image: '/images/mini-ovos.png',
      rating: 4.7,
      reviews: 29,
      description: 'Refrescante mousse de limão siciliano',
      badge: '🍋 Refrescante',
    },
    {
      id: 'casca-branca',
      name: 'Casca Recheada Branca',
      category: 'casca',
      price: 35.00,
      image: '/images/casca-branca.png',
      rating: 4.7,
      reviews: 89,
      description: 'Casca de chocolate branco com recheio cremoso',
      badge: '✨ Popular',
    },
    {
      id: 'casca-amarga',
      name: 'Casca Recheada Amarga',
      category: 'casca',
      price: 37.00,
      image: '/images/casca-amarga.png',
      rating: 4.6,
      reviews: 76,
      description: 'Casca de chocolate amargo 70% cacau',
      badge: '🎯 Recomendado',
    },
  ];

  const filteredProdutos = produtos.filter(p => {
    const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleAddToCart = (produto: any) => {
    addItem({
      id: produto.id,
      name: produto.name,
      price: produto.price,
      quantity: 1,
      image: produto.image
    });
    toast.success(`${produto.name} adicionado ao carrinho!`);
  };

  // Personalizador State
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<any>({
    base: '',
    estilo: '',
    recheio: '',
    brinde: '',
    tamanho: '350g'
  });

  const prices: any = {
    base: { 'Amarga': 10, 'Ao Leite': 10, 'Branca': 12, 'Crocante': 15 },
    estilo: { 'De Colher': 20, 'Tradicional': 15 },
    recheio: { 'Brigadeiro': 15, 'Ninho': 15, 'Nutella': 20, 'Pistache': 25 },
    brinde: { 'Bombons Sortidos': 10, 'Surpresa': 15, 'Nenhum': 0 },
    tamanho: { '250g': 0, '350g': 10, '500g': 20 }
  };

  const calculateCustomPrice = () => {
    let total = 0;
    if (selections.base) total += prices.base[selections.base];
    if (selections.estilo) total += prices.estilo[selections.estilo];
    if (selections.recheio) total += prices.recheio[selections.recheio];
    if (selections.brinde) total += prices.brinde[selections.brinde];
    if (selections.tamanho) total += prices.tamanho[selections.tamanho];
    return total;
  };

  const handleAddCustomToCart = () => {
    if (!selections.base || !selections.estilo || !selections.recheio) {
      toast.error('Por favor, complete as escolhas principais!');
      return;
    }
    
    const price = calculateCustomPrice();
    const details = `${selections.base}, ${selections.estilo}, ${selections.recheio}, ${selections.brinde}, ${selections.tamanho}`;
    
    addItem({
      id: `custom-${Date.now()}`,
      name: 'Ovo Personalizado PáscoArt',
      price: price,
      quantity: 1,
      details: details,
      image: '/images/ovo-ninho-nutella.png'
    });
    
    toast.success('Ovo personalizado adicionado ao carrinho!');
    setStep(0);
    setSelections({ base: '', estilo: '', recheio: '', brinde: '', tamanho: '350g' });
  };

  return (
    <Layout>
      {/* Monte seu Ovo Section */}
      <section id="personalizar" className="py-20 bg-primary/5 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto bg-card rounded-[40px] border border-border shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-primary p-10 text-primary-foreground flex flex-col justify-center">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6"
              >
                <Sparkles className="w-10 h-10" />
              </motion.div>
              <h2 className="text-4xl font-black mb-4 leading-tight">Monte seu Próprio Ovo</h2>
              <p className="opacity-80">Personalize cada detalhe e crie o presente perfeito.</p>
              
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 0 ? 'bg-white text-primary' : 'border-white/30'}`}>1</div>
                  <span className={`font-bold ${step >= 0 ? 'opacity-100' : 'opacity-40'}`}>Base</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'bg-white text-primary' : 'border-white/30'}`}>2</div>
                  <span className={`font-bold ${step >= 1 ? 'opacity-100' : 'opacity-40'}`}>Estilo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'bg-white text-primary' : 'border-white/30'}`}>3</div>
                  <span className={`font-bold ${step >= 2 ? 'opacity-100' : 'opacity-40'}`}>Recheio</span>
                </div>
              </div>
            </div>

            <div className="flex-1 p-10 md:p-16">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                    <h3 className="text-2xl font-bold">Escolha a Casca (Base)</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.keys(prices.base).map(opt => (
                        <button 
                          key={opt}
                          onClick={() => { setSelections({...selections, base: opt}); setStep(1); }}
                          className={`p-6 rounded-2xl border-2 transition-all text-left group ${selections.base === opt ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
                        >
                          <span className="block font-bold text-lg">{opt}</span>
                          <span className="text-sm text-muted-foreground">+ R$ {prices.base[opt].toFixed(2)}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                    <h3 className="text-2xl font-bold">Estilo do Ovo</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.keys(prices.estilo).map(opt => (
                        <button 
                          key={opt}
                          onClick={() => { setSelections({...selections, estilo: opt}); setStep(2); }}
                          className={`p-6 rounded-2xl border-2 transition-all text-left ${selections.estilo === opt ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
                        >
                          <span className="block font-bold text-lg">{opt}</span>
                          <span className="text-sm text-muted-foreground">+ R$ {prices.estilo[opt].toFixed(2)}</span>
                        </button>
                      ))}
                    </div>
                    <Button variant="ghost" onClick={() => setStep(0)}>Voltar</Button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                    <h3 className="text-2xl font-bold">Recheio Gourmet</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.keys(prices.recheio).map(opt => (
                        <button 
                          key={opt}
                          onClick={() => { setSelections({...selections, recheio: opt}); setStep(3); }}
                          className={`p-6 rounded-2xl border-2 transition-all text-left ${selections.recheio === opt ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
                        >
                          <span className="block font-bold text-lg">{opt}</span>
                          <span className="text-sm text-muted-foreground">+ R$ {prices.recheio[opt].toFixed(2)}</span>
                        </button>
                      ))}
                    </div>
                    <Button variant="ghost" onClick={() => setStep(1)}>Voltar</Button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                    <h3 className="text-2xl font-bold">Quase lá! Resumo</h3>
                    <div className="bg-muted p-6 rounded-2xl space-y-3">
                      <div className="flex justify-between"><span>Base:</span> <span className="font-bold">{selections.base}</span></div>
                      <div className="flex justify-between"><span>Estilo:</span> <span className="font-bold">{selections.estilo}</span></div>
                      <div className="flex justify-between"><span>Recheio:</span> <span className="font-bold">{selections.recheio}</span></div>
                      <div className="border-t border-border pt-3 mt-3 flex justify-between text-xl">
                        <span className="font-bold">Preço Total</span>
                        <span className="font-black text-primary">R$ {calculateCustomPrice().toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" className="flex-1 rounded-xl h-14" onClick={() => setStep(0)}>Reiniciar</Button>
                      <Button className="flex-[2] rounded-xl h-14 font-bold" onClick={handleAddCustomToCart}>Adicionar ao Carrinho</Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-background border-b border-border sticky top-20 z-40 backdrop-blur-md bg-background/80">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 relative w-full">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="O que você deseja hoje?..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-full border-2 border-border focus:border-primary focus:outline-none transition-all bg-muted/30 font-medium"
              />
            </div>

            <div className="flex gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-3 rounded-full whitespace-nowrap font-bold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProdutos.map((produto, index) => (
              <motion.div
                key={produto.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-card rounded-[32px] overflow-hidden border border-border hover:border-primary/50 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="relative h-72 overflow-hidden bg-muted/50">
                  <motion.img
                    src={produto.image}
                    alt={produto.name}
                    className="w-full h-full object-contain p-8"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                  />
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-md text-primary-foreground px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                    {produto.badge}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors">
                    {produto.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-1">
                    {produto.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-muted-foreground uppercase">Preço</span>
                      <span className="text-2xl font-black text-foreground">
                        R$ {produto.price.toFixed(2)}
                      </span>
                    </div>
                    <Button 
                      onClick={() => handleAddToCart(produto)}
                      className="rounded-2xl h-14 w-14 p-0 shadow-lg shadow-primary/20 hover:scale-110 transition-transform"
                    >
                      <Plus className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
