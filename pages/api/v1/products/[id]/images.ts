import { ApiError, apiWrapper } from "~/lib/errors";
import { options } from "~/lib/options";
import { getId } from "~/lib/schema";
import { db } from "~/prisma";

/**
 * @swagger
 * /api/v1/products/{productId}/images:
 *   get:
 *     tags:
 *      - Product
 *     description: List of images of a product
 *     parameters:
 *       - $ref: '#/components/schemas/IdParams'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 type:
 *                   type: string
 *                 resourceType:
 *                   type: string
 *                 resources:
 *                   type: array
 *                   items:
 *                     type: string
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
  if (!options(req, res)) {
    return;
  }

  const id = getId(req);
  const product = await db.product.findUnique({ where: { id } });

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  res.json({
    type: "array",
    resourceType: "ImageUrl",
    resources: product.images,
  });
});

export default handler;
