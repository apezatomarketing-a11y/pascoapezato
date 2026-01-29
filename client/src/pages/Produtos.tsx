import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star, Search } from 'lucide-react';
import { useState } from 'react';

export default function Produtos() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);

  const categories = [
    { id: 'all', name: 'Todos os Produtos' },
    { id: 'colher', name: 'Ovo de Colher' },
    { id: 'casca', name: 'Casca Recheada' },
    { id: 'mini', name: 'Mini Ovos' },
  ];

  const produtos = [
    {
      id: 'maracuja',
      name: 'Ovo Maracujá Premium',
      category: 'colher',
      price: 45.00,
      image: '/assets/images/ovo-maracuja.png',
      rating: 4.9,
      reviews: 128,
      description: 'Recheio de maracujá fresco em casca de chocolate branco',
      badge: '⭐ Mais Vendido',
    },
    {
      id: 'prestigio',
      name: 'Ovo Prestígio Deluxe',
      category: 'colher',
      price: 48.00,
      image: '/assets/images/ovo-prestígio.png',
      rating: 4.8,
      reviews: 95,
      description: 'Coco e chocolate amargo em perfeita harmonia',
      badge: '🏆 Premium',
    },
    {
      id: 'ninho',
      name: 'Ovo Ninho & Nutella',
      category: 'colher',
      price: 52.00,
      image: '/assets/images/ovo-ninho-nutella.png',
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
      image: '/assets/images/ovo-brigadeiro.png',
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
      image: '/assets/images/ovo-morango.png',
      rating: 4.6,
      reviews: 71,
      description: 'Ovo de colher com recheio de morango fresco',
      badge: '🌸 Novo',
    },
    {
      id: 'branco',
      name: 'Ovo Chocolate Branco',
      category: 'colher',
      price: 40.00,
      image: '/assets/images/ovo-chocolate-branco.png',
      rating: 4.5,
      reviews: 64,
      description: 'Ovo de colher de chocolate branco puro',
      badge: '💎 Clássico',
    },
    {
      id: 'amargo',
      name: 'Ovo Chocolate Amargo',
      category: 'colher',
      price: 42.00,
      image: '/assets/images/ovo-chocolate-amargo.png',
      rating: 4.8,
      reviews: 103,
      description: 'Ovo de colher de chocolate amargo intenso',
      badge: '⚫ Intenso',
    },
    {
      id: 'casca-branca',
      name: 'Casca Recheada Branca',
      category: 'casca',
      price: 35.00,
      image: '/assets/images/casca-chocolate-branco.png',
      rating: 4.7,
      reviews: 89,
      description: 'Casca de chocolate branco com recheio à escolha',
      badge: '✨ Popular',
    },
    {
      id: 'casca-amarga',
      name: 'Casca Recheada Amarga',
      category: 'casca',
      price: 37.00,
      image: '/assets/images/casca-chocolate-amargo.png',
      rating: 4.6,
      reviews: 76,
      description: 'Casca de chocolate amargo com recheio à escolha',
      badge: '🎯 Recomendado',
    },
    {
      id: 'mini-cesta',
      name: 'Cesta de Mini Ovos',
      category: 'mini',
      price: 89.00,
      image: '/assets/images/mini-ovos-cesta.png',
      rating: 5.0,
      reviews: 142,
      description: 'Cesta com seleção de mini ovos variados',
      badge: '🎁 Presente Perfeito',
    },
  ];

  const filteredProdutos = produtos.filter(p => {
    const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-amber-50 to-orange-50 border-b border-amber-200">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Nossos Produtos
            </h1>
            <p className="text-lg text-amber-800/70 max-w-2xl mx-auto">
              Explore nossa seleção completa de ovos de páscoa artesanais com sabores irresistíveis
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-amber-100 sticky top-0 z-40">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-600" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-amber-200 focus:border-amber-600 focus:outline-none transition-colors bg-amber-50"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                      : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
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
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProdutos.map((produto, index) => (
              <motion.div
                key={produto.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-3xl overflow-hidden border-2 border-amber-200 hover:border-orange-400 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100">
                  <motion.img
                    src={produto.image}
                    alt={produto.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-orange-400 text-amber-900 px-4 py-2 rounded-full text-sm font-bold">
                    {produto.badge}
                  </div>

                  {/* Favorite Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleFavorite(produto.id)}
                    className="absolute top-4 left-4 p-3 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all"
                  >
                    <Heart
                      className={`w-6 h-6 transition-colors ${
                        favorites.includes(produto.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-amber-600'
                      }`}
                    />
                  </motion.button>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {produto.name}
                  </h3>
                  
                  <p className="text-amber-800/70 text-sm mb-4">
                    {produto.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(produto.rating)
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-amber-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-amber-900">
                      {produto.rating} ({produto.reviews})
                    </span>
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-amber-200">
                    <span className="text-2xl font-bold text-gradient bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                      R$ {produto.price.toFixed(2)}
                    </span>
                    <motion.a
                      href={`https://wa.me/5512991895547?text=Olá! Gostaria de comprar ${produto.name} por R$ ${produto.price.toFixed(2)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full hover:shadow-lg transition-all group-hover:from-amber-600 group-hover:to-orange-600"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProdutos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-amber-900/70">Nenhum produto encontrado</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Não encontrou o que procurava?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco via WhatsApp e conheça nossas opções de customização
          </p>
          <a href="https://wa.me/5512991895547?text=Olá! Gostaria de conhecer opções de customização" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full bg-white text-orange-600 hover:bg-orange-50 shadow-lg h-14 px-8 text-lg font-bold">
              Fale Conosco
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
