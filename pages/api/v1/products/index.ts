import { ApiError, apiWrapper } from "~/lib/errors";
import { options } from "~/lib/options";
import { productBody } from "~/lib/schema";
import { db } from "~/prisma";

const handler = apiWrapper(async (req, res) => {
  if (!options(req, res, ["GET", "POST"])) {
    return;
  }

  switch (req.method) {
    case "GET":
      return res.json({ products: await db.product.findMany() });
    case "POST":
      return res.json({
        product: await db.product.create({
          data: productBody.parse(req.body),
        }),
      });
    default:
      throw new ApiError(405, "Method not allowed");
  }
});

export default handler;
