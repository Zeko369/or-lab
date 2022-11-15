import { Prisma } from "@prisma/client";
import { db } from "../prisma";

export const getProducts = async (args: Prisma.ProductFindManyArgs) => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return db.product.findMany(args);
};

export type GetProducts = Awaited<ReturnType<typeof getProducts>>;
