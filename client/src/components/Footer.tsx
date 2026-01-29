import { scrollToTop } from '@/lib/utils';
import { Link } from 'wouter';
import { useModal } from './ModalProvider';
import WhatsappIcon from './WhatsappIcon';
import { Mail, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { openModal } = useModal();

  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t-2 border-primary/20 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group cursor-pointer" onClick={scrollToTop}>
              <img 
                src="/images/branding/logo_full.png" 
                alt="PáscoArt Logo" 
                className="h-20 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Ovos de páscoa artesanais com sabores irresistíveis. Cada ovo é uma obra-prima de chocolate que traz alegria e sabor para sua Páscoa.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/pascoart2026/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/5512991895547" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer">
                <WhatsappIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground">Links Rápidos</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" onClick={scrollToTop}>
                  Início
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" onClick={scrollToTop}>
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" onClick={scrollToTop}>
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground">Categorias</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/produtos" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Ovo de Colher</Link>
              </li>
              <li>
                <Link href="/produtos" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Casca Recheada</Link>
              </li>
              <li>
                <Link href="/produtos" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Mini Ovos</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground">Contato</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span className="text-muted-foreground">Praia Grande - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <WhatsappIcon className="w-5 h-5 text-primary shrink-0" />
                <a href="https://wa.me/5512991895547" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  (12) 99189-5547
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:contato@pascoart.com.br" className="text-muted-foreground hover:text-primary transition-colors">
                  contato@pascoart.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-6 text-sm justify-center flex-wrap">
            <button onClick={() => openModal('privacy')} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer font-semibold">
              Política de Privacidade
            </button>
            <span className="text-border">|</span>
            <button onClick={() => openModal('terms')} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer font-semibold">
              Termos de Uso
            </button>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            &copy; {currentYear} PáscoArt. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
