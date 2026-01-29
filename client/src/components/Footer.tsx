import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showCookiesModal, setShowCookiesModal] = useState(false);

  const privacyContent = `A PáscoArt respeita sua privacidade e está comprometida em proteger seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações.

COLETA DE DADOS
Coletamos informações que você nos fornece voluntariamente, como nome, email e endereço para processar pedidos. Também coletamos dados de navegação através de cookies para melhorar sua experiência.

USO DE DADOS
Seus dados são utilizados apenas para:
• Fornecer nossos serviços e processar pedidos
• Melhorar sua experiência no site
• Enviar comunicações sobre seus pedidos
• Análise de uso do site para otimização

PROTEÇÃO DE DADOS
Implementamos medidas de segurança apropriadas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição.

COMPARTILHAMENTO DE DADOS
Não compartilhamos seus dados pessoais com terceiros, exceto quando necessário para processar seu pedido (como transportadoras) ou conforme exigido por lei.

RETENÇÃO DE DADOS
Retemos seus dados apenas pelo tempo necessário para fornecer nossos serviços e cumprir obrigações legais.

DIREITOS DO USUÁRIO
Você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados pessoais. Entre em contato conosco através do email contato@pascoart.com.br.

ALTERAÇÕES NA POLÍTICA
Podemos atualizar esta política periodicamente. Notificaremos você sobre mudanças significativas através do site.

CONTATO
Para dúvidas sobre esta política, entre em contato: contato@pascoart.com.br`;

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-muted/30 border-t border-border/50 pt-16 pb-8">
        <div className="container max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-1">
              <img 
                src="/images/branding/logo_full.png" 
                alt="PáscoArt" 
                className="h-48 w-auto mb-4"
              />
              <p className="text-muted-foreground text-sm leading-relaxed">
                Transformamos o cacau em experiências inesquecíveis. Chocolate artesanal de qualidade premium para sua Páscoa.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-bold text-foreground mb-6 uppercase text-sm tracking-wider">Navegação</h3>
              <ul className="space-y-3">
                <li><Link href="/"><a className="text-muted-foreground hover:text-primary transition-colors">Início</a></Link></li>
                <li><Link href="/produtos"><a className="text-muted-foreground hover:text-primary transition-colors">Produtos</a></Link></li>
                <li><Link href="/contato"><a className="text-muted-foreground hover:text-primary transition-colors">Contato</a></Link></li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h3 className="font-bold text-foreground mb-6 uppercase text-sm tracking-wider">Contato</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li>
                  <a href="https://wa.me/551399999999" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="mailto:contato@pascoart.com.br" className="hover:text-primary transition-colors">
                    contato@pascoart.com.br
                  </a>
                </li>
                <li>Praia Grande, SP</li>
              </ul>
            </div>

            {/* Redes Sociais */}
            <div>
              <h3 className="font-bold text-foreground mb-6 uppercase text-sm tracking-wider">Redes Sociais</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Instagram</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Facebook</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">TikTok</a></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/50 pt-8 mb-8">
            {/* Policies */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 text-xs sm:text-sm">
              <button 
                onClick={() => setShowPrivacyModal(true)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium cursor-pointer"
              >
                Política de Privacidade
              </button>
              <span className="text-border">|</span>
              <button 
                onClick={() => setShowCookiesModal(true)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium cursor-pointer"
              >
                Política de Cookies
              </button>
            </div>

            {/* Copyright and Credit */}
            <div className="text-center space-y-4">
              <p className="text-xs sm:text-sm text-muted-foreground">
                © {currentYear} PáscoArt. Todos os direitos reservados.
              </p>
              
              <div className="flex items-center justify-center">
                <motion.a
                  href="https://www.apezatomarketing.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                >
                  Desenvolvido por Apezato Marketing
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Modal */}
      {showPrivacyModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowPrivacyModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-background rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-border/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-background border-b border-border/50 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Política de Privacidade</h2>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-4 text-sm text-muted-foreground whitespace-pre-wrap">
              {privacyContent}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Cookies Modal */}
      {showCookiesModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowCookiesModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-background rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-border/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-background border-b border-border/50 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Política de Cookies</h2>
              <button
                onClick={() => setShowCookiesModal(false)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-4 text-sm text-muted-foreground">
              <p>
                A PáscoArt utiliza cookies para melhorar sua experiência de navegação em nosso site.
              </p>
              <h3 className="font-bold text-foreground">O que são Cookies?</h3>
              <p>
                Cookies são pequenos arquivos de texto armazenados no seu navegador que nos ajudam a entender suas preferências.
              </p>
              <h3 className="font-bold text-foreground">Tipos de Cookies</h3>
              <p>
                Utilizamos cookies essenciais para o funcionamento do site, cookies de análise para entender como você usa nosso site, e cookies de marketing para personalizar sua experiência.
              </p>
              <h3 className="font-bold text-foreground">Controle de Cookies</h3>
              <p>
                Você pode controlar ou desabilitar cookies através das configurações do seu navegador, mas isso pode afetar a funcionalidade do site.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
