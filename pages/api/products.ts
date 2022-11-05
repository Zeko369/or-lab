import type { NextApiHandler } from "next";
import { getProducts } from "../../lib/getProducts";

const handler: NextApiHandler = async (req, res) => {
  const products = await getProducts();
  res.status(200).json(products);
};

export default handler;
