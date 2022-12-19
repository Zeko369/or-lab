// @ts-check

import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { writeFile } from "node:fs/promises";

import { zodToJsonSchema } from "zod-to-json-schema";
import { productSchema, storeSchema } from "./schema.mjs";

const StoreSchema = zodToJsonSchema(storeSchema);
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
