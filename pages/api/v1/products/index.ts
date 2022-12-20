import { db } from "~/prisma";
import { ApiError, apiWrapper } from "~/lib/errors";
import { options } from "~/lib/options";
import { productBodySchema } from "~/schema.mjs";

/**
 * @swagger
 * /api/v1/products:
 *   get:
 *     tags:
 *      - Product
 *     description: Get a list of products
 *     responses:
 *       200:
 *         description: List of products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 products:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 *   post:
 *     tags:
 *      - Product
 *     description: Create a product
 *     requestBody:
 *       content:
 *         application/json:
 *          schema:
 *            $ref: '#/components/schemas/ProductBody'
 *     responses:
 *       201:
 *         description: Created product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Wrong product body
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
const handler = apiWrapper(async (req, res) => {
  if (!options(req, res, ["GET", "POST"])) {
    return;
  }

  switch (req.method) {
    case "GET":
      return res.json({ products: await db.product.findMany() });
    case "POST":
      return res.status(201).json({
        product: await db.product.create({
          data: productBodySchema.parse(req.body),
        }),
      });
    default:
      throw new ApiError(405, "Method not allowed");
  }
});

export default handler;
