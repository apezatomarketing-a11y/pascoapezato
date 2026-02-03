-- Schema para Supabase (PostgreSQL)
-- Projeto: Pascoapezato Admin

-- Habilitar extensões necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabela de Usuários (Compatível com Manus OAuth)
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

-- Tabela de Produtos
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

-- Trigger para atualizar o campo updatedAt/updated_at automaticamente
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

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE PROCEDURE update_timestamp_column();
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products FOR EACH ROW EXECUTE PROCEDURE update_timestamp_column();

-- Inserir produtos iniciais
INSERT INTO products (name, category, price, image_url, description, badge) VALUES
('Ovo de Colher Brigadeiro', 'colher', 85.00, '/images/ovo-brigadeiro.png', 'Delicioso ovo recheado com brigadeiro gourmet.', 'Mais Vendido'),
('Ovo Casca Trufada', 'casca', 75.00, '/images/card-casca.png', 'Casca de chocolate ao leite com recheio trufado.', 'Premium'),
('Mini Ovos Sortidos', 'mini', 45.00, '/images/mini-ovos.png', 'Caixa com 6 mini ovos de sabores variados.', 'Lançamento');
