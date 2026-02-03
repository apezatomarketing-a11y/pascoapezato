CREATE TABLE `products` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`category` enum('colher','casca','mini','personalizado') NOT NULL,
	`price` decimal(10,2) NOT NULL,
	`image_url` text,
	`rating` decimal(3,1) DEFAULT '0',
	`reviews` int DEFAULT 0,
	`description` text,
	`badge` varchar(100),
	`is_active` enum('true','false') NOT NULL DEFAULT 'true',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `products_id` PRIMARY KEY(`id`)
);
