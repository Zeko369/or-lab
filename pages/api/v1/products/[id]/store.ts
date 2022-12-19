import { ApiError, apiWrapper } from "~/lib/errors";
import { options } from "~/lib/options";
import { getId } from "~/lib/schema";
import { db } from "~/prisma";

/**
 * @swagger
 * /api/v1/products/{productId}/store:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: hello world
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
