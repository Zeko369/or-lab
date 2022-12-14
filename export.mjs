// @ts-check

import { writeFile } from "node:fs/promises";
import { createWriteStream } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { PrismaClient } from "@prisma/client";
import { format } from "@fast-csv/format";
import { get } from "lodash-es";

const csvOutput = join(dirname(fileURLToPath(import.meta.url)), "./public/products.csv");
const jsonOutput = join(dirname(fileURLToPath(import.meta.url)), "./public/products.json");

const CSV_CONFIG = [
  // PRODUCT
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

  // STORE
  { key: "store_id", getter: "store.id" },
  { key: "store_name", getter: "store.name" },
  { key: "store_description", getter: "store.description" },
  { key: "store_image", getter: "store.image" },
  { key: "store_address", getter: "store.address" },
  { key: "store_owner", getter: "store.owner" },
  { key: "store_phoneNumber", getter: "store.phoneNumber" },
  { key: "store_opens_at", getter: "store.opensAt" },
  { key: "store_closes_at", getter: "store.closesAt" },
  { key: "store_rating", getter: "store.rating" },
  { key: "store_created_at", getter: "store.createdAt" },
  { key: "store_updated_at", getter: "store.updatedAt" },
];

/** @param {PrismaClient} prisma */
export const exportDatabase = async (prisma) => {
  const products = await prisma.product.findMany({ include: { store: true } });

  // CSV
  const stream = format();
  stream.pipe(createWriteStream(csvOutput));
  stream.write(CSV_CONFIG.map((c) => c.key));
  products.forEach((product) => stream.write(CSV_CONFIG.map((c) => get(product, c.getter))));
  stream.end();

  // JSON
  await writeFile(
    jsonOutput,
    JSON.stringify({ timestamp: new Date(), resources: products }, null, 2)
  );
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const prisma = new PrismaClient();

  prisma
    .$connect()
    .then(() => exportDatabase(prisma))
    .finally(() => prisma.$disconnect());
}
