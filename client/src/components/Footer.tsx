import { scrollToTop } from '@/lib/utils';
import { Link } from 'wouter';
import { useModal } from './ModalProvider';
import WhatsappIcon from './WhatsappIcon';
import { Mail, MapPin, Phone, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { openModal } = useModal();

  return (
    <footer className="bg-gradient-to-b from-amber-50 to-orange-50 border-t-2 border-amber-200 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group cursor-pointer" onClick={scrollToTop}>
              <span className="text-2xl font-bold text-amber-900 transition-colors duration-300 group-hover:text-orange-600">🥚 ChocoArt</span>
            </Link>
            <p className="text-amber-800/70 leading-relaxed">
              Ovos de páscoa artesanais com sabores irresistíveis. Cada ovo é uma obra-prima de chocolate que traz alegria e sabor para sua Páscoa.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/chocoartpascoa/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-200 hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/5512991895547" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-200 hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer">
                <WhatsappIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-amber-900">Links Rápidos</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-amber-800/70 hover:text-orange-600 transition-colors cursor-pointer" onClick={scrollToTop}>
                  Início
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="text-amber-800/70 hover:text-orange-600 transition-colors cursor-pointer" onClick={scrollToTop}>
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-amber-800/70 hover:text-orange-600 transition-colors cursor-pointer" onClick={scrollToTop}>
                  Contato
                </Link>
              </li>
              <li>
                <a href="https://www.apezatomarketing.com.br" target="_blank" rel="noopener noreferrer" className="text-amber-800/70 hover:text-orange-600 transition-colors cursor-pointer">
                  Apezato Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-amber-900">Categorias</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="/produtos?category=colher" className="text-amber-800/70 hover:text-orange-600 transition-colors cursor-pointer">Ovo de Colher</a>
              </li>
              <li>
                <a href="/produtos?category=casca" className="text-amber-800/70 hover:text-orange-600 transition-colors cursor-pointer">Casca Recheada</a>
              </li>
              <li>
                <a href="/produtos?category=mini" className="text-amber-800/70 hover:text-orange-600 transition-colors cursor-pointer">Mini Ovos</a>
              </li>
              <li>
                <a href="/produtos" className="text-amber-800/70 hover:text-orange-600 transition-colors cursor-pointer">Ver Todos</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-amber-900">Contato</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-600 shrink-0 mt-1" />
                <span className="text-amber-800/70">Praia Grande - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <WhatsappIcon className="w-5 h-5 text-orange-600 shrink-0" />
                <a href="https://wa.me/5512991895547" target="_blank" rel="noopener noreferrer" className="text-amber-800/70 hover:text-orange-600 transition-colors">
                  (12) 99189-5547
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-600 shrink-0" />
                <a href="mailto:contato@chocoartpascoa.com.br" className="text-amber-800/70 hover:text-orange-600 transition-colors">
                  contato@chocoartpascoa.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-amber-200 pt-8 flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-6 text-sm justify-center flex-wrap">
            <button onClick={() => openModal('privacy')} className="text-amber-800/70 hover:text-orange-600 transition-colors cursor-pointer font-semibold">
              Política de Privacidade
            </button>
            <span className="text-amber-200">|</span>
            <button onClick={() => openModal('terms')} className="text-amber-800/70 hover:text-orange-600 transition-colors cursor-pointer font-semibold">
              Termos de Uso
            </button>
            <span className="text-amber-200">|</span>
            <button onClick={() => openModal('cookies')} className="text-amber-800/70 hover:text-orange-600 transition-colors cursor-pointer font-semibold">
              Política de Cookies
            </button>
          </div>
          <p className="text-sm text-amber-800/70 text-center">
            &copy; {currentYear} ChocoArt Páscoa. Todos os direitos reservados.
          </p>
          <a href="https://www.apezatomarketing.com.br" target="_blank" rel="noopener noreferrer" className="text-xs text-amber-800/50 hover:text-orange-600 transition-colors">
            Desenvolvido por Apezato Marketing
          </a>
        </div>
      </div>
    </footer>
  );
}
