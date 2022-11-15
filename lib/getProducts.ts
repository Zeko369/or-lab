import { Prisma } from "@prisma/client";
import { db } from "../prisma";

export const getProducts = async (args: Prisma.ProductFindManyArgs) => {
  return db.product.findMany(args);
};

export type GetProducts = Awaited<ReturnType<typeof getProducts>>;
