import { db } from "~/prisma";
import { apiWrapper } from "~/lib/errors";
import { options } from "~/lib/options";
import { exportDatabase } from "~/export.mjs";

/**
 * @swagger
 * /api/v1/products/dump:
 *   post:
 *     tags:
 *      - Product
 *     description: Dump products
 *     responses:
 *       200:
 *         description: DB dumped
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                ok:
 *                  type: boolean
 */
const handler = apiWrapper(async (req, res) => {
  if (!options(req, res, ["POST"])) {
    return;
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  await exportDatabase(db);
  res.json({ ok: true });
});

export default handler;
