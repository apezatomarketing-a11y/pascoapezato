# Cardápio Digital - Painel Administrativo

## 📋 Visão Geral

Sistema completo de gerenciamento de cardápio digital com painel administrativo. Permite adicionar, editar e remover produtos em tempo real, com autenticação segura e banco de dados integrado.

## 🚀 Funcionalidades Implementadas

### ✅ Banco de Dados
- Tabela `products` com campos: id, name, category, price, image_url, rating, reviews, description, badge, is_active
- Categorias: De Colher, Cascas Recheadas, Mini Ovos, Personalizado
- Migrations SQL aplicadas automaticamente

### ✅ Backend (tRPC)
- **Procedures Públicas:**
  - `products.list` - Listar todos os produtos ativos
  - `products.getById` - Obter detalhes de um produto específico

- **Procedures Protegidas (Admin):**
  - `products.create` - Criar novo produto
  - `products.update` - Editar produto existente
  - `products.delete` - Deletar produto

### ✅ Frontend
- **Página `/admin`** - Painel administrativo com:
  - Autenticação via Manus OAuth
  - Verificação de role admin
  - Tabela de produtos com ações (editar/deletar)
  - Formulário para adicionar/editar produtos
  - Confirmação antes de deletar

- **Página `/produtos`** - Catálogo público com:
  - Carregamento dinâmico de produtos do banco
  - Filtro por categoria
  - Busca por nome
  - Exibição de rating e avaliações
  - Botões de ação (adicionar ao carrinho, favoritar)

- **Página `/`** - Home com links para admin e catálogo

## 🔧 Configuração

### 1. Variáveis de Ambiente

O projeto usa Manus OAuth automaticamente. Nenhuma configuração adicional de Supabase é necessária.

### 2. Banco de Dados

A tabela `products` já foi criada automaticamente. Para adicionar dados iniciais, use o painel admin.

### 3. Autenticação

- **Login Admin:** Use suas credenciais Manus OAuth
- **Verificação de Role:** Apenas usuários com `role = 'admin'` podem acessar `/admin`
- **Para promover um usuário a admin:** Atualize a coluna `role` na tabela `users` via banco de dados

## 📱 Como Usar

### Para Administradores

1. **Acessar o Painel:**
   - Navegue para `/admin`
   - Faça login com sua conta Manus OAuth
   - Você será redirecionado se não for admin

2. **Adicionar Produto:**
   - Clique em "Adicionar Produto"
   - Preencha os campos obrigatórios (nome, categoria, preço)
   - Clique em "Criar Produto"

3. **Editar Produto:**
   - Clique no botão "Editar" na tabela
   - Modifique os dados desejados
   - Clique em "Atualizar Produto"

4. **Deletar Produto:**
   - Clique no botão "Deletar"
   - Confirme a exclusão
   - Produto será removido do banco

### Para Clientes

1. **Ver Cardápio:**
   - Navegue para `/produtos`
   - Use filtros de categoria ou busca por nome
   - Visualize detalhes, preço e avaliações

2. **Adicionar ao Carrinho:**
   - Clique em "Adicionar ao Carrinho"
   - Produto será adicionado (integração com carrinho)

## 📊 Estrutura de Dados

### Tabela `products`

```sql
CREATE TABLE `products` (
  `id` int AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `category` enum('colher','casca','mini','personalizado') NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `image_url` text,
  `rating` decimal(3,1) DEFAULT '0',
  `reviews` int DEFAULT 0,
  `description` text,
  `badge` varchar(100),
  `is_active` enum('true','false') DEFAULT 'true',
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)
```

## 🔐 Segurança

- ✅ Autenticação via Manus OAuth
- ✅ Verificação de role admin em procedures
- ✅ Proteção de rotas administrativas
- ✅ Validação de entrada com Zod
- ✅ Tratamento de erros seguro

## 🚀 Deploy

### Netlify

1. **Conectar repositório:**
   - Push do código para GitHub
   - Conectar repositório no Netlify
   - Configurar build command: `pnpm build`
   - Configurar publish directory: `dist`

2. **Variáveis de Ambiente:**
   - Adicionar `DATABASE_URL` com string de conexão MySQL
   - Adicionar `JWT_SECRET` para sessões
   - Adicionar credenciais Manus OAuth

3. **Deploy:**
   - Netlify fará deploy automaticamente a cada push

### Supabase Storage (Opcional)

Para upload de imagens:
1. Criar bucket público no Supabase
2. Configurar credenciais no arquivo `storage.ts`
3. Usar procedure `products.uploadImage`

## 📝 Próximos Passos Recomendados

1. **Integração de Upload de Imagem:**
   - Implementar upload para Supabase Storage
   - Adicionar preview de imagem no formulário

2. **Melhorias de UX:**
   - Adicionar paginação na tabela de produtos
   - Implementar ordenação por coluna
   - Adicionar filtros avançados

3. **Funcionalidades Adicionais:**
   - Sistema de categorias dinâmicas
   - Controle de estoque
   - Relatórios de vendas
   - Integração com sistema de pedidos

## 🐛 Troubleshooting

### Erro: "Acesso Restrito"
- Verifique se você está logado
- Confirme que sua conta tem role `admin` no banco

### Erro: "Erro ao buscar produtos"
- Verifique conexão com banco de dados
- Confirme que tabela `products` foi criada

### Erro: "Erro ao criar produto"
- Verifique se todos os campos obrigatórios foram preenchidos
- Confirme que você é admin

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique os logs do servidor
2. Valide as variáveis de ambiente
3. Teste as queries diretamente no banco

## 📄 Licença

MIT

---

**Desenvolvido com ❤️ para Páscoa Pezato**
