import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "../_core/trpc";
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../db";
import { TRPCError } from "@trpc/server";


const productSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  category: z.enum(["colher", "casca", "mini", "personalizado"]),
  price: z.coerce.number().positive("Preço deve ser positivo"),
  description: z.string().optional(),
  badge: z.string().optional(),
  rating: z.coerce.number().optional().default(0),
  reviews: z.coerce.number().optional().default(0),
  imageUrl: z.string().optional(),
});

export const productsRouter = router({
  list: publicProcedure.query(async () => {
    try {
      const products = await getAllProducts();
      return products.map((p: any) => ({
        id: p.id,
        name: p.name,
        category: p.category,
        price: typeof p.price === "string" ? parseFloat(p.price) : p.price,
        imageUrl: p.imageUrl,
        rating: p.rating ? (typeof p.rating === "string" ? parseFloat(p.rating) : p.rating) : 0,
        reviews: p.reviews || 0,
        description: p.description,
        badge: p.badge,
      }));
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Erro ao buscar produtos",
      });
    }
  }),

  getById: publicProcedure.input(z.number()).query(async ({ input }) => {
    try {
      const product = await getProductById(input);
      if (!product) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Produto não encontrado",
        });
      }
      return {
        id: product.id,
        name: product.name,
        category: product.category,
        price: typeof product.price === "string" ? parseFloat(product.price) : product.price,
        imageUrl: product.imageUrl,
        rating: product.rating ? (typeof product.rating === "string" ? parseFloat(product.rating) : product.rating) : 0,
        reviews: product.reviews || 0,
        description: product.description,
        badge: product.badge,
      };
    } catch (error) {
      if (error instanceof TRPCError) throw error;
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Erro ao buscar produto",
      });
    }
  }),

  create: protectedProcedure
    .input(productSchema.extend({ imageUrl: z.string().optional() }))
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Apenas administradores podem criar produtos",
        });
      }

      try {
        await createProduct({
          name: input.name,
          category: input.category,
          price: input.price.toString(),
          description: input.description || null,
          badge: input.badge || null,
          rating: input.rating?.toString() || "0",
          reviews: input.reviews || 0,
          imageUrl: input.imageUrl || null,
          isActive: "true",
        });

        return {
          success: true,
          message: "Produto criado com sucesso",
        };
      } catch (error) {
        console.error("Error creating product:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Erro ao criar produto",
        });
      }
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string().optional(),
        category: z.enum(["colher", "casca", "mini", "personalizado"]).optional(),
        price: z.coerce.number().optional(),
        description: z.string().optional(),
        badge: z.string().optional(),
        rating: z.coerce.number().optional(),
        reviews: z.coerce.number().optional(),
        imageUrl: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Apenas administradores podem editar produtos",
        });
      }

      try {
        const updateData: any = {};
        if (input.name) updateData.name = input.name;
        if (input.category) updateData.category = input.category;
        if (input.price) updateData.price = input.price.toString();
        if (input.description !== undefined) updateData.description = input.description;
        if (input.badge !== undefined) updateData.badge = input.badge;
        if (input.rating !== undefined) updateData.rating = input.rating.toString();
        if (input.reviews !== undefined) updateData.reviews = input.reviews;
        if (input.imageUrl !== undefined) updateData.imageUrl = input.imageUrl;

        await updateProduct(input.id, updateData);

        return {
          success: true,
          message: "Produto atualizado com sucesso",
        };
      } catch (error) {
        console.error("Error updating product:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Erro ao atualizar produto",
        });
      }
    }),

  delete: protectedProcedure.input(z.number()).mutation(async ({ input, ctx }) => {
    if (ctx.user?.role !== "admin") {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "Apenas administradores podem deletar produtos",
      });
    }

    try {
      await deleteProduct(input);
      return {
        success: true,
        message: "Produto deletado com sucesso",
      };
    } catch (error) {
      console.error("Error deleting product:", error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Erro ao deletar produto",
      });
    }
  }),
});
