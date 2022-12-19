// @ts-check
import { z } from "zod";

export const storeSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  image: z.string(),
  address: z.string(),
  owner: z.string(),
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
