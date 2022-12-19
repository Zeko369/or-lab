import { ApiError, apiWrapper } from "~/lib/errors";
import { options } from "~/lib/options";
import { getId, productBody } from "~/lib/schema";
import { db } from "~/prisma";

const ALLOWED_HEADERS = ["OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE"];

/**
 * @swagger
 * /api/v1/products/{productId}:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: hello world
 *   put:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: hello world
 *   patch:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: hello world
 *   delete:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: hello world
 */
const handler = apiWrapper(async (req, res) => {
  if (!options(req, res, ALLOWED_HEADERS)) {
    return;
  }

  const id = getId(req);

  switch (req.method) {
    case "GET":
      return res.json({ products: await db.product.findUniqueOrThrow({ where: { id } }) });
    case "PUT":
      const createBody = productBody.parse(req.body);
      return res.json({
        product: await db.product.update({ where: { id }, data: createBody }),
      });
    case "PATCH":
      const updateBody = productBody.partial().parse(req.body);
      return res.json({
        product: await db.product.update({ where: { id }, data: updateBody }),
      });
    case "DELETE":
      await db.product.delete({ where: { id } });
      return res.json({ ok: true });
    default:
      throw new ApiError(405, "Method not allowed");
  }
});

export default handler;
