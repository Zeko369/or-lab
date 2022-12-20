import { Product } from "@prisma/client";
import { ApiError, apiWrapper } from "~/lib/errors";
import { options } from "~/lib/options";
import { getId } from "~/lib/schema";
import { db } from "~/prisma";
import { productBodySchema, updateProductBodySchema } from "~/schema.mjs";

const ALLOWED_HEADERS = ["OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE"];

/**
 * @swagger
 * /api/v1/products/random:
 *   get:
 *     tags:
 *      - Product
 *     description: Get a random product
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductResponse'
 *       404:
 *         description: No products found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
const handler = apiWrapper(async (req, res) => {
  if (!options(req, res, ["GET"])) {
    return;
  }

  res.json({
    type: "object",
    resourceType: "Product",
    resource: (await db.$queryRaw<Product[]>`SELECT * FROM "Product" ORDER BY RANDOM() LIMIT 1`)[0],
  });
});

export default handler;
