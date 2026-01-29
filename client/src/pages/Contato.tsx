import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
// import { createLead } from '@/lib/supabase'; // Removido: Supabase não será mais usado no front-end
import { WHATSAPP_NUMBER } from '@/shared/const';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Contato() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company_name: '',
    website: '',
    budget_range: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validação básica
      if (!formData.name || !formData.email || !formData.message) {
        toast.error('Preencha todos os campos obrigatórios.');
        setIsSubmitting(false);
        return;
      }

      // 1. Montar a mensagem para o WhatsApp
      const whatsappMessage = `
Olá, sou *${formData.name}* e gostaria de solicitar um orçamento.

*Detalhes do Contato:*
E-mail: ${formData.email}
WhatsApp: ${formData.phone || 'Não informado'}
Empresa: ${formData.company_name || 'Não informado'}
Site: ${formData.website || 'Não informado'}
Orçamento Estimado: ${formData.budget_range || 'Não informado'}

*Mensagem:*
${formData.message}
      `.trim();

      // 2. Codificar a mensagem e criar o link
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

      // 3. Abrir o link do WhatsApp
      window.open(whatsappLink, '_blank');

      toast.success('Redirecionando para o WhatsApp com sua solicitação!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company_name: '',
        website: '',
        budget_range: '',
        message: '',
      });
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="py-12 bg-gradient-to-br from-amber-50 to-orange-50 border-b border-amber-200">
        <div className="container text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-amber-900 mb-4"
          >
            Entre em Contato
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-amber-800/70 max-w-2xl mx-auto"
          >
            Tem dúvidas? Quer fazer um pedido especial? Estamos aqui para ajudar!
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-card border border-border p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Localização</h3>
                      <p className="text-amber-900">Praia Grande - SP</p>
                      <p className="text-sm text-amber-800/70 mt-1">Entrega em toda a região.</p>
                    </div>
                  </div>
                  
<div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">WhatsApp</h3>
                      <a href="https://wa.me/5512991895547?text=Olá! Gostaria de conversar sobre os ovos de páscoa" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 transition-colors">
                        <p className="text-amber-900 font-semibold">(12) 99189-5547</p>
                      </a>
                      <p className="text-sm text-amber-800/70 mt-1">Seg-Dom: 09h às 18h</p>
                    </div>
                  </div>
                  
<div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">E-mail</h3>
                      <a href="mailto:contato@chocoartpascoa.com.br" className="text-orange-600 hover:text-orange-700 transition-colors">
                        <p className="text-amber-900">contato@chocoartpascoa.com.br</p>
                      </a>
                      <p className="text-sm text-amber-800/70 mt-1">Resposta em até 24 horas.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-[300px] bg-muted rounded-2xl overflow-hidden border border-border relative group">
                
<iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.0!2d-45.9656!3d-23.1896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4c7989508657%3A0x8534012111111111!2sJacare%C3%AD%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1701710000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-border p-8 rounded-2xl shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-2">Envie uma Mensagem</h2>
              <p className="text-muted-foreground mb-8">Preencha o formulário abaixo e entraremos em contato.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Nome Completo *</label>
                    <input 
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">WhatsApp</label>
                    <input 
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="(00 ) 00000-0000"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">E-mail Corporativo *</label>
                  <input 
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company_name" className="text-sm font-medium">Nome da Empresa</label>
                  <input 
                    id="company_name"
                    name="company_name"
                    type="text"
                    value={formData.company_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Sua empresa"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="website" className="text-sm font-medium">Site da Empresa</label>
                  <input 
                      id="website"
                      name="website"
                      type="text" // Alterado para 'text' para aceitar formatos informais
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="suaempresa.com.br ou www.suaempresa.com.br"
                    />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="budget_range" className="text-sm font-medium">Orçamento Mensal Estimado</label>
                  <select 
                    id="budget_range"
                    name="budget_range"
                    value={formData.budget_range}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="ate-5k">Até R$ 5.000</option>
                    <option value="5k-10k">R$ 5.000 a R$ 10.000</option>
                    <option value="10k-30k">R$ 10.000 a R$ 30.000</option>
                    <option value="acima-30k">Acima de R$ 30.000</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Mensagem *</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Conte um pouco sobre seu projeto..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg font-bold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Enviando...</span>
                  ) : (
                    <>
                      Enviar Solicitação
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
