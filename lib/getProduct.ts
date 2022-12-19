import { db } from "../prisma";

export const getProduct = async <T extends boolean>(id: number, store: T) => {
  return db.product.findUnique({ where: { id }, include: { store } });
};
