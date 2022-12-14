// @ts-check

import ProductSchema from "~/public/schema/product.json";
import ProductResponseSchema from "~/public/schema/storeResponse.json";

import FullProductSchema from "~/public/schema/fullProduct.json";
import ProductBodySchema from "~/public/schema/productBody.json";
import UpdateProductBodySchema from "~/public/schema/updateProductBody.json";

import StoreResponseSchema from "~/public/schema/storeResponse.json";
import StoreSchema from "~/public/schema/store.json";

import ErrorSchema from "~/public/schema/utils/error.json";
import IdParams from "~/public/schema/utils/idParams.json";

export const nextSwaggerConfig = {
  apiFolder: "pages/api",
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Products API",
      version: "1.0",
    },
    components: {
      schemas: {
        Error: ErrorSchema,
        IdParams: IdParams,
        ProductResponse: ProductResponseSchema,
        StoreResponse: ProductResponseSchema,

        Product: ProductSchema,
        FullProduct: FullProductSchema,
        Store: StoreSchema,

        ProductBody: ProductBodySchema,
        UpdateProductBody: UpdateProductBodySchema,
      },
    },
    schemas: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [{ name: "Product", description: "Product API" }],
  },
};
