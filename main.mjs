import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.$connect();
};

main().finally(() => {
  prisma.$disconnect();
});
