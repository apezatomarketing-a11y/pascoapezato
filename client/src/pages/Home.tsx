import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Sparkles, Heart, Star, Clock, Zap } from 'lucide-react';
import { Link } from 'wouter';
import AnimatedCounter from '@/components/Counter';

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  return (
    <Layout>
      {/* Hero Section - PáscoArt Experience */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Animated Background - Easter Eggs Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute w-full h-full opacity-5" viewBox="0 0 1200 800">
            <defs>
              <pattern id="eggs" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <ellipse cx="100" cy="100" rx="60" ry="80" fill="#3C2415" opacity="0.6" />
                <ellipse cx="100" cy="100" rx="55" ry="75" fill="none" stroke="#7B3F00" strokeWidth="2" />
              </pattern>
            </defs>
            <rect width="1200" height="800" fill="url(#eggs)" />
          </svg>
          
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.08, 0.15, 0.08]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-1/3 -right-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.08, 0.12, 0.08]
            }}
            transition={{ duration: 25, repeat: Infinity, delay: 2 }}
            className="absolute -bottom-1/3 -left-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px]"
          />
        </div>

        <div className="container relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 animate-pulse" />
                Coleção Exclusiva Páscoa 2026
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6 sm:mb-8">
                A Arte do <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Chocolate</span> em cada Detalhe
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Transformamos o cacau em experiências inesquecíveis. Descubra nossos ovos artesanais feitos com paixão e ingredientes premium.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 mb-12">
                <Link href="/produtos">
                  <Button size="lg" className="w-full sm:w-auto rounded-full h-14 sm:h-16 px-8 sm:px-10 text-lg sm:text-xl font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/50 group transition-all duration-300 hover:scale-105">
                    Explorar Cardápio
                    <ArrowRight className="ml-2 w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
                <Link href="/produtos#personalizar">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full h-14 sm:h-16 px-8 sm:px-10 text-lg sm:text-xl font-bold border-2 hover:bg-primary/5 group transition-all duration-300 hover:scale-105">
                    Monte seu Ovo
                    <ShoppingBag className="ml-2 w-5 sm:w-6 h-5 sm:h-6 group-hover:scale-110 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
              
              {/* Stats Section */}
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12 pt-8 border-t border-border/50">
                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-foreground">
                      <AnimatedCounter end={847} />
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-primary">+</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-tighter mt-1">Clientes Felizes</span>
                </div>
                <div className="hidden sm:block w-px h-12 bg-border" />
                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-foreground">
                      <AnimatedCounter end={3247} />
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-secondary">+</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-tighter mt-1">Ovos Entregues</span>
                </div>
                <div className="hidden sm:block w-px h-12 bg-border" />
                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-foreground">100</span>
                    <span className="text-xl sm:text-2xl font-bold text-accent">%</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-tighter mt-1">Artesanal</span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                <img 
                  src="/images/ovo-ninho-nutella.png" 
                  alt="Ovo de Páscoa Premium" 
                  className="relative z-10 w-full max-w-lg mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]"
                />
              </div>
              
              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-5 z-20 bg-card/90 backdrop-blur-xl p-5 rounded-3xl border border-border shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center">
                    <Star className="w-6 h-6 text-accent fill-accent" />
                  </div>
                  <div>
                    <p className="font-black text-foreground text-sm">Ninho & Nutella</p>
                    <p className="text-xs font-bold text-muted-foreground uppercase">O Favorito da Galera</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -left-5 z-20 bg-card/90 backdrop-blur-xl p-5 rounded-3xl border border-border shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-black text-foreground text-sm">Edição Limitada</p>
                    <p className="text-xs font-bold text-muted-foreground uppercase">Garanta o seu!</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-background relative">
        <div className="container max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-6"
            >
              Nossas Especialidades
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl text-muted-foreground"
            >
              Do clássico ao gourmet, temos o chocolate perfeito para tornar sua Páscoa mágica.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: 'Ovos de Colher', desc: 'Recheios cremosos e abundantes para comer rezando.', img: '/images/card-colher.png' },
              { title: 'Cascas Recheadas', desc: 'A combinação perfeita entre crocância e cremosidade.', img: '/images/card-casca.png' },
              { title: 'Mini Ovos', desc: 'Pequenas doses de felicidade em cada mordida.', img: '/images/card-mini.png' }
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-muted/30 rounded-[40px] p-8 sm:p-10 overflow-hidden hover:bg-primary/5 transition-all duration-500 border border-border/50 hover:border-primary/30"
              >
                <div className="relative z-10 h-full flex flex-col">
                  <h3 className="text-2xl sm:text-3xl font-black mb-4 group-hover:text-primary transition-colors">{cat.title}</h3>
                  <p className="text-muted-foreground text-base sm:text-lg mb-8">{cat.desc}</p>
                  <Link href="/produtos" className="mt-auto font-bold text-primary flex items-center gap-2 group/link hover:gap-3 transition-all">
                    Ver Opções <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="absolute -bottom-10 -right-10 w-48 h-48 object-contain opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 rotate-12"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Experience CTA */}
      <section className="py-20 sm:py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 max-w-7xl text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="max-w-4xl mx-auto px-4"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8">
              Crie seu Ovo de Páscoa Único
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 sm:mb-12 opacity-90 leading-relaxed">
              Escolha a casca, o recheio, os brindes e o tamanho. Nós preparamos tudo com o carinho que sua Páscoa merece.
            </p>
            <Link href="/produtos#personalizar">
              <Button size="lg" variant="secondary" className="rounded-full h-16 sm:h-20 px-10 sm:px-12 text-xl sm:text-2xl font-black shadow-2xl hover:scale-105 transition-transform">
                Começar Personalização
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
