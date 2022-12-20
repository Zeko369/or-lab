import type { NextApiHandler } from "next";
import SuperJSON from "superjson";
import { writeToString } from "@fast-csv/format";
import { db } from "~/prisma";

const CSV_CONFIG = [
  { key: "id", getter: "id" },
  { key: "name", getter: "name" },
  { key: "brand", getter: "brand" },
  { key: "short_description", getter: "shortDescription" },
  { key: "description", getter: "description" },
  { key: "images", getter: "images" },
  { key: "price", getter: "price" },
  { key: "discount", getter: "discount" },
  { key: "rating", getter: "rating" },
  { key: "stock", getter: "stock" },
  { key: "created_at", getter: "createdAt" },
  { key: "updated_at", getter: "updatedAt" },
] as const;

const handler: NextApiHandler = async (req, res) => {
  const search = req.query.search as string | undefined;
  const searchField = req.query.searchField as string | undefined;

  const products = await db.product.findMany({
    ...(search && {
      where: {
        ...(searchField
          ? { [searchField]: { contains: search } }
          : {
              OR: [
                { name: { contains: search, mode: "insensitive" } },
                { shortDescription: { contains: search, mode: "insensitive" } },
                { description: { contains: search, mode: "insensitive" } },
                { brand: { contains: search, mode: "insensitive" } },
              ],
            }),
      },
    }),
  });

  switch (req.query.format) {
    case "csv":
      res.setHeader("Content-Type", "text/csv");
      res.statusCode = 200;

      res.write(
        await writeToString([
          CSV_CONFIG.map((config) => config.key),
          ...products.map((product) => CSV_CONFIG.map((c) => product[c.getter])),
        ])
      );

      return res.end();
    case "json":
      return res.json(products);
    default:
      return res.json(SuperJSON.serialize(products));
  }
};

export default handler;
