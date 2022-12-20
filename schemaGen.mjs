// @ts-check

import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { writeFile } from "node:fs/promises";

import { zodToJsonSchema } from "zod-to-json-schema";
import {
  errorSchema,
  productBodySchema,
  productSchema,
  storeSchema,
  updateProductBodySchema,
} from "./schema.mjs";

const StoreSchema = zodToJsonSchema(storeSchema);
const ProductSchema = zodToJsonSchema(productSchema);
const ProductBodySchema = zodToJsonSchema(productBodySchema);
const UpdateProductBodySchema = zodToJsonSchema(updateProductBodySchema);
const FullProductSchema = zodToJsonSchema(productSchema.extend({ store: storeSchema }), {
  strictUnions: true,
});

const ErrorSchema = zodToJsonSchema(errorSchema);

await Promise.all([
  writeFile(
    join(dirname(fileURLToPath(import.meta.url)), "./public/schema/product.json"),
    JSON.stringify(ProductSchema, null, 2)
  ),

  writeFile(
    join(dirname(fileURLToPath(import.meta.url)), "./public/schema/productBody.json"),
    JSON.stringify(ProductBodySchema, null, 2)
  ),

  writeFile(
    join(dirname(fileURLToPath(import.meta.url)), "./public/schema/updateProductBody.json"),
    JSON.stringify(UpdateProductBodySchema, null, 2)
  ),

  writeFile(
    join(dirname(fileURLToPath(import.meta.url)), "./public/schema/store.json"),
    JSON.stringify(StoreSchema, null, 2)
  ),

  writeFile(
    join(dirname(fileURLToPath(import.meta.url)), "./public/schema/fullProduct.json"),
    JSON.stringify(FullProductSchema, null, 2)
  ),

  writeFile(
    join(dirname(fileURLToPath(import.meta.url)), "./public/schema/utils/idParams.json"),
    JSON.stringify(
      {
        name: "productId",
        in: "path",
        description: "ID of product to return",
        required: true,
        schema: {
          type: "integer",
          format: "int64",
        },
      },
      null,
      2
    )
  ),

  writeFile(
    join(dirname(fileURLToPath(import.meta.url)), "./public/schema/utils/error.json"),
    JSON.stringify(ErrorSchema, null, 2)
  ),
]);
