import { ApiError, apiWrapper } from "~/lib/errors";
import { options } from "~/lib/options";
import { getId } from "~/lib/schema";
import { db } from "~/prisma";
import { productBodySchema, updateProductBodySchema } from "~/schema.mjs";

const ALLOWED_HEADERS = ["OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE"];

/**
 * @swagger
 * /api/v1/products/{productId}:
 *   get:
 *     tags:
 *      - Product
 *     description: Get a product
 *     parameters:
 *       - $ref: '#/components/schemas/IdParams'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 product:
 *                   $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 store:
 *                   $ref: '#/components/schemas/Error'
 *   patch:
 *     tags:
 *      - Product
 *     description: Patch a product
 *     parameters:
 *       - $ref: '#/components/schemas/IdParams'
 *     requestBody:
 *       content:
 *         application/json:
 *          schema:
 *            $ref: '#/components/schemas/UpdateProductBody'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 product:
 *                   $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 store:
 *                   $ref: '#/components/schemas/Error'
 *   put:
 *     tags:
 *      - Product
 *     description: Update a product
 *     parameters:
 *       - $ref: '#/components/schemas/IdParams'
 *     requestBody:
 *       content:
 *         application/json:
 *          schema:
 *            $ref: '#/components/schemas/ProductBody'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 product:
 *                   $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 store:
 *                   $ref: '#/components/schemas/Error'
 *   delete:
 *     tags:
 *      - Product
 *     description: Deletes a product
 *     parameters:
 *       - $ref: '#/components/schemas/IdParams'
 *     requestBody:
 *       content:
 *         application/json:
 *          schema:
 *            $ref: '#/components/schemas/UpdateProductBody'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *       404:
 *         description: Product not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 store:
 *                   $ref: '#/components/schemas/Error'
 */
const handler = apiWrapper(async (req, res) => {
  if (!options(req, res, ALLOWED_HEADERS)) {
    return;
  }

  const id = getId(req);
  switch (req.method) {
    case "GET":
      return res.json({ product: await db.product.findUniqueOrThrow({ where: { id } }) });
    case "PUT":
      const putBody = productBodySchema.parse(req.body);
      return res.json({
        product: await db.product.update({ where: { id }, data: putBody }),
      });
    case "PATCH":
      const patchBody = updateProductBodySchema.parse(req.body);
      return res.json({
        product: await db.product.update({ where: { id }, data: patchBody }),
      });
    case "DELETE":
      await db.product.delete({ where: { id } });
      return res.json({ ok: true });
    default:
      throw new ApiError(405, "Method not allowed");
  }
});

export default handler;
