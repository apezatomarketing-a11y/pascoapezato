-- ChocoArt Páscoa - Database Schema
-- Tabelas específicas para gerenciamento de produtos, carrinho e pedidos de ovos de páscoa

-- Tabela de categorias de produtos
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  icon VARCHAR(50),
  displayOrder INT DEFAULT 0,
  createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de produtos (ovos de páscoa)
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  categoryId UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  name VARCHAR(150) NOT NULL,
  description TEXT,
  flavor VARCHAR(100),
  filling VARCHAR(100),
  shellType VARCHAR(100),
  price DECIMAL(10, 2) NOT NULL,
  image VARCHAR(500),
  imageUrl VARCHAR(500),
  isAvailable BOOLEAN DEFAULT TRUE,
  displayOrder INT DEFAULT 0,
  createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de opções de customização (cascas, recheios, etc)
CREATE TABLE IF NOT EXISTS customizationOptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type VARCHAR(50) NOT NULL, -- 'shell', 'filling', 'flavor'
  name VARCHAR(100) NOT NULL,
  description TEXT,
  priceModifier DECIMAL(10, 2) DEFAULT 0,
  image VARCHAR(500),
  displayOrder INT DEFAULT 0,
  createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de carrinhos de compras
CREATE TABLE IF NOT EXISTS carts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  userId UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  sessionId VARCHAR(100),
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'abandoned', 'completed')),
  createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de itens do carrinho
CREATE TABLE IF NOT EXISTS cartItems (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cartId UUID NOT NULL REFERENCES carts(id) ON DELETE CASCADE,
  productId UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  quantity INT DEFAULT 1,
  customizationData JSONB, -- Armazena seleções de cascas, recheios, etc
  unitPrice DECIMAL(10, 2) NOT NULL,
  subtotal DECIMAL(10, 2) NOT NULL,
  addedAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de pedidos
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  userId UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  cartId UUID REFERENCES carts(id) ON DELETE SET NULL,
  customerName VARCHAR(150) NOT NULL,
  customerEmail VARCHAR(320),
  customerPhone VARCHAR(20) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'preparing', 'ready', 'completed', 'cancelled')),
  totalPrice DECIMAL(10, 2) NOT NULL,
  notes TEXT,
  whatsappMessage TEXT,
  createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de itens do pedido
CREATE TABLE IF NOT EXISTS orderItems (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  orderId UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  productId UUID REFERENCES products(id) ON DELETE SET NULL,
  productName VARCHAR(150) NOT NULL,
  quantity INT DEFAULT 1,
  customizationData JSONB,
  unitPrice DECIMAL(10, 2) NOT NULL,
  subtotal DECIMAL(10, 2) NOT NULL
);

-- Tabela de promoções
CREATE TABLE IF NOT EXISTS promotions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code VARCHAR(50) UNIQUE,
  description TEXT,
  discountType VARCHAR(20) CHECK (discountType IN ('percentage', 'fixed')),
  discountValue DECIMAL(10, 2) NOT NULL,
  maxUses INT,
  currentUses INT DEFAULT 0,
  validFrom TIMESTAMP WITH TIME ZONE,
  validUntil TIMESTAMP WITH TIME ZONE,
  isActive BOOLEAN DEFAULT TRUE,
  createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de contatos/mensagens
CREATE TABLE IF NOT EXISTS contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(150) NOT NULL,
  email VARCHAR(320),
  phone VARCHAR(20),
  message TEXT NOT NULL,
  subject VARCHAR(200),
  status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'read', 'responded')),
  createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Inserir categorias padrão
INSERT INTO categories (name, description, displayOrder) VALUES
('Ovo de Colher', 'Ovos de páscoa de colher com diversos sabores', 1),
('Casca Recheada', 'Cascas de chocolate recheadas com diferentes opções', 2),
('Mini Ovos', 'Cesta de mini ovos para montar sua própria seleção', 3)
ON CONFLICT (name) DO NOTHING;

-- Inserir opções de customização
INSERT INTO customizationOptions (type, name, description, priceModifier, displayOrder) VALUES
('shell', 'Chocolate Branco', 'Casca de chocolate branco premium', 0, 1),
('shell', 'Chocolate ao Leite', 'Casca de chocolate ao leite cremoso', 0, 2),
('shell', 'Chocolate Amargo', 'Casca de chocolate amargo intenso', 0, 3),
('filling', 'Maracujá', 'Recheio de maracujá fresco', 5.00, 1),
('filling', 'Prestígio', 'Recheio de coco com chocolate amargo', 5.00, 2),
('filling', 'Ninho com Nutella', 'Recheio de leite Ninho com Nutella', 7.00, 3),
('filling', 'Brigadeiro', 'Recheio de brigadeiro gourmet', 5.00, 4),
('filling', 'Morango', 'Recheio de morango fresco', 5.00, 5)
ON CONFLICT DO NOTHING;

-- Criar índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(categoryId);
CREATE INDEX IF NOT EXISTS idx_cartItems_cart ON cartItems(cartId);
CREATE INDEX IF NOT EXISTS idx_cartItems_product ON cartItems(productId);
CREATE INDEX IF NOT EXISTS idx_orderItems_order ON orderItems(orderId);
CREATE INDEX IF NOT EXISTS idx_orders_user ON orders(userId);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_carts_user ON carts(userId);
CREATE INDEX IF NOT EXISTS idx_carts_status ON carts(status);
