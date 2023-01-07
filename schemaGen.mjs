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
    join(dirname(fileURLToPath(import.meta.url)), "./public/schema/productResponse.json"),
    JSON.stringify(
      {
        type: "object",
        properties: {
          type: { type: "string" },
          resourceType: { type: "string" },
          resource: ProductSchema,
        },
      },
      null,
      2
    )
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
    join(dirname(fileURLToPath(import.meta.url)), "./public/schema/storeResponse.json"),
    JSON.stringify(
      {
        type: "object",
        properties: {
          "@type": { const: "http://schema.org/Store" },
          id: { type: "integer" },
          name: { type: "string" },
          description: { type: "string" },
          image: { type: "string" },
          locationId: { type: "integer" },
          ownerId: { type: "integer" },
          phoneNumber: { type: "string" },
          opensAt: { type: "integer" },
          closesAt: { type: "integer" },
          rating: { type: "number" },
          createdAt: { type: "string", format: "date-time" },
          updatedAt: { type: "string", format: "date-time" },
          location: {
            type: "object",
            properties: {
              "@type": { const: "http://schema.org/GeoCoordinates" },
              address: { type: "string" },
              addressCountry: { type: "string" },
              latitude: { type: "number" },
              longitude: { type: "number" },
            },
          },
          owner: {
            type: "object",
            properties: {
              "@type": { const: "http://schema.org/Person" },
              "@context": {
                type: "object",
                properties: {
                  "@vocab": { const: "http://schema.org/" },
                  firstName: { const: "givenName" },
                  lastName: { const: "familyName" },
                },
              },
              firstName: { type: "string" },
              lastName: { type: "string" },
            },
          },
        },
      },
      null,
      2
    )
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
