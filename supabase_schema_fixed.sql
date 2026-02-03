-- Schema Corrigido para Supabase (PostgreSQL)
-- Projeto: Pascoapezato Admin

-- 1. Limpeza (Opcional - use se quiser resetar as tabelas)
-- DROP TABLE IF EXISTS products;
-- DROP TABLE IF EXISTS users;

-- 2. Habilitar extensões
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 3. Tabela de Usuários
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    "openId" VARCHAR(64) NOT NULL UNIQUE,
    name TEXT,
    email VARCHAR(320),
    "loginMethod" VARCHAR(64),
    role VARCHAR(20) NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin')),
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "lastSignedIn" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- 4. Tabela de Produtos (Garantindo a criação de todas as colunas)
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL CHECK (category IN ('colher', 'casca', 'mini', 'personalizado')),
    price DECIMAL(10, 2) NOT NULL,
    image_url TEXT,
    rating DECIMAL(3, 1) DEFAULT 0,
    reviews INTEGER DEFAULT 0,
    description TEXT,
    badge VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- 5. Funções e Triggers
CREATE OR REPLACE FUNCTION update_timestamp_column()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_TABLE_NAME = 'users') THEN
        NEW."updatedAt" = CURRENT_TIMESTAMP;
    ELSE
        NEW.updated_at = CURRENT_TIMESTAMP;
    END IF;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Remover triggers se já existirem para evitar erros
DROP TRIGGER IF EXISTS update_users_updated_at ON users;
DROP TRIGGER IF EXISTS update_products_updated_at ON products;

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE PROCEDURE update_timestamp_column();
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products FOR EACH ROW EXECUTE PROCEDURE update_timestamp_column();

-- 6. Inserção de Dados Iniciais (Apenas se a tabela estiver vazia)
INSERT INTO products (name, category, price, image_url, description, badge) 
SELECT 'Ovo de Colher Brigadeiro', 'colher', 85.00, '/images/ovo-brigadeiro.png', 'Delicioso ovo recheado com brigadeiro gourmet.', 'Mais Vendido'
WHERE NOT EXISTS (SELECT 1 FROM products WHERE name = 'Ovo de Colher Brigadeiro');

INSERT INTO products (name, category, price, image_url, description, badge)
SELECT 'Ovo Casca Trufada', 'casca', 75.00, '/images/card-casca.png', 'Casca de chocolate ao leite com recheio trufado.', 'Premium'
WHERE NOT EXISTS (SELECT 1 FROM products WHERE name = 'Ovo Casca Trufada');

INSERT INTO products (name, category, price, image_url, description, badge)
SELECT 'Mini Ovos Sortidos', 'mini', 45.00, '/images/mini-ovos.png', 'Caixa com 6 mini ovos de sabores variados.', 'Lançamento'
WHERE NOT EXISTS (SELECT 1 FROM products WHERE name = 'Mini Ovos Sortidos');
