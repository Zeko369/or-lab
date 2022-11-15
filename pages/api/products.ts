import type { NextApiHandler } from "next";
import SuperJSON from "superjson";
import { getProducts } from "../../lib/getProducts";

const handler: NextApiHandler = async (req, res) => {
  const search = req.query.search as string | undefined;

  const products = await getProducts({
    ...(search && {
      where: {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { shortDescription: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } },
          { brand: { contains: search, mode: "insensitive" } },
        ],
      },
    }),
  });
  const response = SuperJSON.serialize(products);

  res.status(200).json(response);
};

export default handler;
