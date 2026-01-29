import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Sparkles, Heart, Star, Clock } from 'lucide-react';
import { Link } from 'wouter';
import AnimatedCounter from '@/components/Counter';

// Componente simples de contador se o original não for compatível
const Counter = ({ end }: { end: number }) => {
  return <span>{end}</span>;
};

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <Layout>
      {/* Hero Section - PáscoArt Experience */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px]"
          />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 animate-pulse" />
                Coleção Exclusiva Páscoa 2026
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-8">
                A Arte do <span className="text-gradient">Chocolate</span> em cada Detalhe
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Transformamos o cacau em experiências inesquecíveis. Descubra nossos ovos artesanais feitos com paixão e ingredientes premium.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <Link href="/produtos">
                  <Button size="lg" className="w-full sm:w-auto rounded-full h-16 px-10 text-xl font-bold shadow-2xl shadow-primary/30 group">
                    Explorar Cardápio
                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
                <Link href="/produtos#personalizar">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full h-16 px-10 text-xl font-bold border-2 hover:bg-primary/5 group">
                    Monte seu Ovo
                    <ShoppingBag className="ml-2 w-6 h-6 group-hover:scale-110 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="mt-16 flex items-center justify-center lg:justify-start gap-10">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-foreground">+500</span>
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-tighter">Pedidos Entregues</span>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-foreground">100%</span>
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-tighter">Artesanal</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 animate-melt">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                <img 
                  src="/assets/images/ovo-ninho-nutella.png" 
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
                    <p className="font-black text-foreground">Ninho & Nutella</p>
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
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-black text-foreground">Edição Limitada</p>
                    <p className="text-xs font-bold text-muted-foreground uppercase">Garanta o seu!</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-32 bg-background relative">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black mb-6"
            >
              Nossas Especialidades
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              Do clássico ao gourmet, temos o chocolate perfeito para tornar sua Páscoa mágica.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Ovos de Colher', desc: 'Recheios cremosos e abundantes para comer rezando.', img: '/assets/images/ovo-brigadeiro.png' },
              { title: 'Cascas Recheadas', desc: 'A combinação perfeita entre crocância e cremosidade.', img: '/assets/images/casca-chocolate-amargo.png' },
              { title: 'Mini Ovos', desc: 'Pequenas doses de felicidade em cada mordida.', img: '/assets/images/mini-ovos-cesta.png' }
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-muted/30 rounded-[40px] p-10 overflow-hidden hover:bg-primary/5 transition-all duration-500"
              >
                <div className="relative z-10 h-full flex flex-col">
                  <h3 className="text-3xl font-black mb-4 group-hover:text-primary transition-colors">{cat.title}</h3>
                  <p className="text-muted-foreground text-lg mb-8">{cat.desc}</p>
                  <Link href="/produtos" className="mt-auto font-bold text-primary flex items-center gap-2 group/link">
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
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              Crie seu Ovo de Páscoa Único
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
              Escolha a casca, o recheio, os brindes e o tamanho. Nós preparamos tudo com o carinho que sua Páscoa merece.
            </p>
            <Link href="/produtos#personalizar">
              <Button size="lg" variant="secondary" className="rounded-full h-20 px-12 text-2xl font-black shadow-2xl hover:scale-105 transition-transform">
                Começar Personalização
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
