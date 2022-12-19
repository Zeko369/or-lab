import { ApiError, apiWrapper } from "../../../../../lib/api/errors";
import { options } from "../../../../../lib/api/options";
import { getId } from "../../../../../lib/api/schema";
import { getProduct } from "../../../../../lib/getProduct";

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
  const product = await getProduct(id, true);

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  res.json({ store: product.store });
});

export default handler;
