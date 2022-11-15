// @ts-check

import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { writeFile } from "node:fs/promises";

import { Type } from "@sinclair/typebox";

const StoreSchema = Type.Object({
  id: Type.Integer(),
  name: Type.String(),
  description: Type.String(),
  image: Type.String(),
  address: Type.String(),
  owner: Type.String(),
  phoneNumber: Type.String(),
  opensAt: Type.Integer(),
  closesAt: Type.Integer(),
  rating: Type.Number(),
  createdAt: Type.String({ format: "date-time" }),
  updatedAt: Type.String({ format: "date-time" }),
});

const ProductSchema = Type.Object({
  id: Type.Integer(),
  name: Type.String(),
  brand: Type.String(),
  shortDescription: Type.String(),
  description: Type.String(),
  images: Type.Array(Type.String()),
  price: Type.Integer(),
  discount: Type.Integer(),
  rating: Type.Integer(),
  stock: Type.Integer(),
  store: StoreSchema,
  storeId: Type.Integer(),
  createdAt: Type.String({ format: "date-time" }),
  updatedAt: Type.String({ format: "date-time" }),
});

await writeFile(
  join(dirname(fileURLToPath(import.meta.url)), "./public/productSchema.json"),
  JSON.stringify(ProductSchema, null, 2)
);
