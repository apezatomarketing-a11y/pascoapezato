# Cardápio Digital - Admin Panel TODO

## Banco de Dados
- [x] Criar schema de produtos na tabela `products`
- [x] Criar tabela de categorias (usando enum)
- [x] Executar migrations SQL

## Backend (tRPC Procedures)
- [x] Criar procedures para listar produtos (public)
- [x] Criar procedure para criar produto (admin)
- [x] Criar procedure para editar produto (admin)
- [x] Criar procedure para deletar produto (admin)
- [ ] Criar procedure para upload de imagem (opcional)

## Autenticação Admin
- [x] Usar Manus OAuth para admin (já configurado)
- [x] Criar middleware de verificação de role admin
- [x] Implementar proteção de procedures admin

## Frontend - Página Admin
- [x] Criar página /admin com login
- [x] Implementar autenticação com Manus OAuth
- [x] Criar lista de produtos com ações (editar/deletar)
- [x] Criar formulário de adicionar produto
- [x] Criar formulário de editar produto
- [ ] Implementar upload de imagem (opcional)

## Frontend - Página Pública
- [ ] Atualizar /produtos para carregar do banco via tRPC
- [ ] Remover array estático de produtos
- [ ] Manter funcionalidades de filtro e busca
- [ ] Integrar componentes do projeto original

## Testes
- [ ] Testar CRUD de produtos
- [ ] Testar autenticação admin
- [ ] Testar carregamento de produtos na página pública
- [ ] Validar permissões de acesso

## Deploy
- [ ] Preparar arquivo .zip final
- [ ] Documentar passos de configuração
- [ ] Gerar instruções de uso
