// @ts-check

import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { writeFile } from "node:fs/promises";

import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

const storeSchema = z.object({
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

const StoreSchema = zodToJsonSchema(storeSchema);

const productSchema = z.object({
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

const ProductSchema = zodToJsonSchema(productSchema);

const fullProductSchema = productSchema.extend({
  store: storeSchema,
});

const FullProductSchema = zodToJsonSchema(fullProductSchema, { strictUnions: true });

await Promise.all([
  writeFile(
    join(dirname(fileURLToPath(import.meta.url)), "./public/schema/product.json"),
    JSON.stringify(ProductSchema, null, 2)
  ),

  writeFile(
    join(dirname(fileURLToPath(import.meta.url)), "./public/schema/store.json"),
    JSON.stringify(StoreSchema, null, 2)
  ),

  writeFile(
    join(dirname(fileURLToPath(import.meta.url)), "./public/schema/fullProduct.json"),
    JSON.stringify(FullProductSchema, null, 2)
  ),
]);
