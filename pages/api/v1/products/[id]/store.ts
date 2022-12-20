import { ApiError, apiWrapper } from "~/lib/errors";
import { options } from "~/lib/options";
import { getId } from "~/lib/schema";
import { db } from "~/prisma";

/**
 * @swagger
 * /api/v1/products/{productId}/store:
 *   get:
 *     tags:
 *      - Product
 *     description: Store of a product
 *     parameters:
 *       - $ref: '#/components/schemas/IdParams'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 store:
 *                   $ref: '#/components/schemas/Store'
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
  const product = await db.product.findUnique({
    where: { id },
    include: { store: true },
  });

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  res.json({ store: product.store });
});

export default handler;
