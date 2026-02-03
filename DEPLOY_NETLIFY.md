# Guia de Deploy no Netlify para o Projeto Páscoa Pezato

Este guia detalha os passos para fazer o deploy do seu site de cardápio de Páscoa com painel administrativo no Netlify.

## 1. Pré-requisitos

- Conta no [GitHub](https://github.com) com o repositório do projeto (`pascoapezato`) atualizado.
- Conta no [Netlify](https://www.netlify.com).
- Projeto Supabase criado e o arquivo `supabase_schema.sql` executado no SQL Editor.

## 2. Configuração no Netlify

1.  **Login e Conexão com GitHub:**
    *   Acesse sua conta no Netlify.
    *   Clique em "Add new site" -> "Import an existing project".
    *   Conecte-se com o GitHub e autorize o acesso.

2.  **Seleção do Repositório:**
    *   Escolha o repositório `apezatomarketing-a11y/pascoapezato`.

3.  **Configurações de Build:**
    *   **Base directory:** `pascoapezato-admin`
    *   **Build command:** `pnpm build`
    *   **Publish directory:** `dist`

4.  **Variáveis de Ambiente:**
    *   Vá para "Site settings" -> "Build & deploy" -> "Environment".
    *   Adicione as seguintes variáveis de ambiente:

| Variável | Valor | Descrição |
| :--- | :--- | :--- |
| `VITE_SUPABASE_URL` | `https://ktqsgumieftdspgtxfhn.supabase.co` | URL do seu projeto Supabase. |
| `VITE_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0cXNndW1pZWZ0ZHNwZ3R4ZmhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2ODIyNDEsImV4cCI6MjA4NTI1ODI0MX0.HauT5j8EFnRVlnJYrjA3vuFEKW-77aUFSzf_Ys3BWzA` | Chave pública (anon) do Supabase. |
| `SUPABASE_KEY` | `sb_secret_hXxj0lAFH_TD5pPCoYabJg_Zbas0bdF` | Chave secreta (secret) do Supabase. |
| `GEMINI_API_KEY` | `AIzaSyBg353Ko7lHT-DnThBqU2wr_9YjQ4N7OE8` | Sua chave de API do Google AI Studio. |

5.  **Deploy:**
    *   Clique em "Deploy site". O Netlify irá construir e publicar seu site.

## 3. Pós-Deploy: Promovendo um Usuário a Admin

Para acessar o painel administrativo (`/admin`), você precisa promover um usuário:

1.  **Faça Login:** Acesse seu site e faça login pelo menos uma vez.
2.  **Acesse o Supabase:** Vá para o seu projeto no Supabase.
3.  **Edite a Tabela `users`:**
    *   No menu lateral, vá em "Table Editor" e selecione a tabela `users`.
    *   Encontre o seu usuário e altere o valor da coluna `role` de `user` para `admin`.
4.  **Acesse o Painel:** Agora você pode acessar a rota `/admin` do seu site.

## 4. Resumo das Configurações

| Configuração | Valor |
| :--- | :--- |
| **Repositório** | `apezatomarketing-a11y/pascoapezato` |
| **Diretório Base** | `pascoapezato-admin` |
| **Comando de Build** | `pnpm build` |
| **Diretório de Publicação** | `dist` |

Seu site será atualizado automaticamente a cada `push` para a branch `main` do seu repositório.
