// @ts-check
import { z } from "zod";

export const storeSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  image: z.string(),
  locationId: z.number().int(),
  ownerId: z.number().int(),
  phoneNumber: z.string(),
  opensAt: z.number().int(),
  closesAt: z.number().int(),
  rating: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const productSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  brand: z.string(),
  shortDescription: z.string(),
  description: z.string(),
  images: z.array(z.string()),
  price: z.number().int(),
  discount: z.number().int(),
  rating: z.number(),
  stock: z.number().int(),
  storeId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const productBodySchema = productSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const updateProductBodySchema = productSchema.partial();

export const idParams = z.object({
  id: z.coerce.number(),
});

export const errorSchema = z.object({
  ok: z.boolean(),
  message: z.string(),
  response: z.unknown(),
});
