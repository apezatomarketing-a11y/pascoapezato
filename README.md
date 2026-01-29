# 🥚 ChocoArt Páscoa - Site de Venda de Ovos de Chocolate

Um site moderno e responsivo para venda de ovos de páscoa artesanais, desenvolvido com React, TypeScript, Tailwind CSS e integração com Supabase.

## 🎨 Características

- ✨ **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- 🎭 **Animações Fluidas**: Transições suaves com Framer Motion
- 🛒 **Catálogo de Produtos**: Listagem completa com filtros e busca
- 💬 **Integração WhatsApp**: Botão flutuante com animação ping
- 🗺️ **Mapa Interativo**: Localização em Praia Grande - SP
- 📱 **Menu Lateral**: Navegação intuitiva (Susi Nutri style)
- 🎁 **Promoções**: Seção destacada com ofertas especiais
- 📧 **Formulário de Contato**: Integrado com backend
- 🔐 **Segurança**: Headers de segurança configurados
- ⚡ **Performance**: Otimizado para velocidade e SEO

## 🚀 Tecnologias Utilizadas

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + Framer Motion
- **Backend**: Supabase (PostgreSQL)
- **Deploy**: Netlify
- **Package Manager**: pnpm
- **Build Tool**: Vite

## 📦 Instalação Local

### Pré-requisitos
- Node.js 22+
- pnpm 10+

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/pascoapezato.git
cd pascoapezato
```

2. **Instale as dependências**
```bash
pnpm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
# Edite .env.local com suas credenciais
```

4. **Inicie o servidor de desenvolvimento**
```bash
pnpm dev
```

5. **Acesse em seu navegador**
```
http://localhost:5173
```

## 🔧 Configuração do Supabase

### 1. Criar Projeto
- Acesse [supabase.com](https://supabase.com)
- Crie um novo projeto
- Copie a URL e chave anônima

### 2. Executar Script SQL
```sql
-- Copie o conteúdo de supabase-schema-pascoa.sql
-- E execute no SQL Editor do Supabase
```

### 3. Configurar Buckets
- Crie um bucket chamado `products`
- Faça upload das imagens dos produtos

## 🌐 Deploy no Netlify

Veja o arquivo `NETLIFY_DEPLOYMENT.md` para instruções completas.

### Resumo Rápido
1. Conecte seu repositório GitHub ao Netlify
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

## 📁 Estrutura do Projeto

```
pascoapezato/
├── client/
│   ├── src/
│   │   ├── components/       # Componentes React
│   │   ├── pages/            # Páginas do site
│   │   ├── lib/              # Utilitários e funções
│   │   ├── styles/           # Estilos globais
│   │   └── App.tsx           # Componente raiz
│   └── index.html
├── public/
│   ├── assets/
│   │   └── images/           # Imagens dos produtos
│   └── logo.png
├── supabase-schema-pascoa.sql # Script do banco de dados
├── netlify.toml              # Configuração Netlify
├── .env.example              # Variáveis de exemplo
└── README.md
```

## 📄 Páginas Disponíveis

| Página | URL | Descrição |
|--------|-----|-----------|
| Início | `/` | Hero section com promoções |
| Produtos | `/produtos` | Catálogo completo de ovos |
| Contato | `/contato` | Formulário e informações |

## 🎯 Funcionalidades Principais

### Home
- Hero section animado com ovo destacado
- Seção de produtos em destaque
- Promoção especial de Páscoa
- Estatísticas e depoimentos

### Produtos
- Grid responsivo de produtos
- Filtros por categoria
- Busca por nome
- Ratings e avaliações
- Botão de compra via WhatsApp

### Contato
- Formulário de contato
- Informações de localização
- Mapa interativo
- Canais de comunicação

## 🔐 Variáveis de Ambiente

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anonima
VITE_GOOGLE_MAPS_API_KEY=sua-chave-google-maps
VITE_WHATSAPP_NUMBER=5512991895547
VITE_APP_TITLE=ChocoArt Páscoa
VITE_APP_LOGO=/logo.png
VITE_APP_URL=https://seu-dominio.com
```

## 📊 Banco de Dados

### Tabelas Principais
- `categories` - Categorias de produtos
- `products` - Produtos (ovos de páscoa)
- `customizationOptions` - Opções de customização
- `carts` - Carrinhos de compras
- `cartItems` - Itens do carrinho
- `orders` - Pedidos
- `orderItems` - Itens dos pedidos
- `contacts` - Mensagens de contato

## 🎨 Paleta de Cores

- **Primária**: Amber (#B45309)
- **Secundária**: Orange (#EA580C)
- **Terciária**: Red (#DC2626)
- **Background**: Amber-50 (#FFFBEB)

## 📱 Responsividade

- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Large (1280px+)

## 🚀 Performance

- Lighthouse Score: 90+
- Core Web Vitals: Otimizado
- Bundle Size: ~150KB (gzipped)
- Time to Interactive: <2s

## 🐛 Troubleshooting

### Imagens não carregam
- Verifique se estão no bucket correto
- Confirme permissões públicas
- Use URLs completas do Supabase

### WhatsApp não abre
- Verifique o número de telefone
- Confirme formato internacional
- Teste em outro navegador

### Formulário não envia
- Verifique conexão com Supabase
- Confirme variáveis de ambiente
- Veja console do navegador para erros

## 📞 Suporte

- **WhatsApp**: (12) 99189-5547
- **Email**: contato@chocoartpascoa.com.br
- **Agência**: [Apezato Marketing](https://www.apezatomarketing.com.br)

## 📝 Licença

Este projeto é propriedade de ChocoArt Páscoa. Todos os direitos reservados.

## 🤝 Contribuições

Para contribuir, por favor:
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 🎉 Agradecimentos

- Desenvolvido com ❤️ pela [Apezato Marketing](https://www.apezatomarketing.com.br)
- Inspirado em design moderno e responsivo
- Integrado com as melhores ferramentas do mercado

---

**Última atualização**: 29 de Janeiro de 2026
