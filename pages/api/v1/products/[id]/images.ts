import { ApiError, apiWrapper } from "../../../../../lib/api/errors";
import { options } from "../../../../../lib/api/options";
import { getId } from "../../../../../lib/api/schema";
import { db } from "../../../../../prisma";

/**
 * @swagger
 * /api/v1/products/{productId}/images:
 *   get:
 *     description: Gets all images for a product
 *     parameters:
 *       - in: path
 *         name: productId
 *         description: Numeric ID of the product to get
 *         schema:
 *           type: integer
 *           required: true
 *     responses:
 *       200:
 *         description: hello world
 *       400:
 *        description: Invalid product id (not a number)
 *       404:
 *         description: Product not found
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

  res.json({ images: product.images });
});

export default handler;
