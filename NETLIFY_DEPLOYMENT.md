# Guia de Deploy no Netlify - ChocoArt Páscoa

## Pré-requisitos

1. **GitHub**: Repositório criado e código enviado
2. **Supabase**: Projeto criado e banco de dados configurado
3. **Netlify**: Conta criada em netlify.com

## Passo 1: Preparar o Supabase

### 1.1 Criar Projeto no Supabase
- Acesse [supabase.com](https://supabase.com)
- Crie um novo projeto
- Copie a URL e a chave anônima

### 1.2 Executar Script SQL
- Vá para SQL Editor no Supabase
- Execute o conteúdo de `supabase-schema-pascoa.sql`
- Verifique se todas as tabelas foram criadas

### 1.3 Configurar Buckets (Storage)
- Vá para Storage no Supabase
- Crie um bucket chamado `products`
- Faça upload das imagens em `/public/assets/images/`

## Passo 2: Configurar Netlify

### 2.1 Conectar GitHub
1. Acesse [netlify.com](https://netlify.com)
2. Clique em "New site from Git"
3. Selecione GitHub e autorize
4. Selecione o repositório `pascoapezato`

### 2.2 Configurar Build Settings
- **Base directory**: (deixe em branco)
- **Build command**: `pnpm install && pnpm build`
- **Publish directory**: `dist`

### 2.3 Adicionar Variáveis de Ambiente

Clique em "Site settings" → "Build & deploy" → "Environment"

Adicione as seguintes variáveis:

```
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anonima
VITE_GOOGLE_MAPS_API_KEY=sua-chave-google-maps
VITE_WHATSAPP_NUMBER=5512991895547
VITE_APP_TITLE=ChocoArt Páscoa
VITE_APP_LOGO=/logo.png
VITE_APP_URL=https://seu-dominio-netlify.netlify.app
```

### 2.4 Deploy
- Clique em "Deploy site"
- Aguarde o build completar (geralmente 2-5 minutos)
- Seu site estará disponível em `https://seu-site.netlify.app`

## Passo 3: Configurar Domínio Personalizado (Opcional)

1. Vá para "Site settings" → "Domain management"
2. Clique em "Add custom domain"
3. Digite seu domínio (ex: www.chocoartpascoa.com.br)
4. Configure os DNS records conforme instruções do Netlify

## Variáveis de Ambiente Necessárias

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `VITE_SUPABASE_URL` | URL do projeto Supabase | `https://abc123.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | Chave anônima do Supabase | `eyJhbGc...` |
| `VITE_GOOGLE_MAPS_API_KEY` | Chave da API do Google Maps | `AIzaSyD...` |
| `VITE_WHATSAPP_NUMBER` | Número do WhatsApp | `5512991895547` |
| `VITE_APP_TITLE` | Título do aplicativo | `ChocoArt Páscoa` |
| `VITE_APP_LOGO` | URL do logo | `/logo.png` |
| `VITE_APP_URL` | URL do site | `https://chocoartpascoa.com.br` |

## Estrutura de Buckets do Supabase

```
products/
├── ovo-maracuja.png
├── ovo-prestigio.png
├── ovo-ninho-nutella.png
├── ovo-brigadeiro.png
├── ovo-morango.png
├── ovo-chocolate-branco.png
├── ovo-chocolate-amargo.png
├── casca-chocolate-branco.png
├── casca-chocolate-amargo.png
└── mini-ovos-cesta.png
```

## Troubleshooting

### Build falha com erro de dependências
```bash
# Limpe o cache e reinstale
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Variáveis de ambiente não funcionam
- Verifique se todas as variáveis estão prefixadas com `VITE_`
- Redeploy após adicionar variáveis
- Limpe o cache do navegador (Ctrl+Shift+Del)

### Imagens não carregam
- Verifique se as imagens estão no bucket correto
- Confirme que o bucket é público
- Use URLs completas do Supabase

## Monitoramento

- **Analytics**: Vá para "Analytics" no Netlify para ver estatísticas de tráfego
- **Logs**: Vá para "Deploys" para ver logs de build
- **Performance**: Use Lighthouse para otimizar performance

## Próximos Passos

1. ✅ Testar todas as funcionalidades no site ao vivo
2. ✅ Configurar email de contato (SendGrid)
3. ✅ Implementar analytics (Google Analytics)
4. ✅ Configurar backup automático do banco de dados
5. ✅ Monitorar performance e otimizar

---

**Suporte**: Para dúvidas, entre em contato via WhatsApp: (12) 99189-5547
