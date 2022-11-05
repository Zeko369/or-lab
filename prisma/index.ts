import { PrismaClient } from "@prisma/client";

let db: PrismaClient;

declare global {
  var __prisma__: PrismaClient;
}

if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();
} else {
  if (!global.__prisma__) {
    global.__prisma__ = new PrismaClient();
  }

  db = global.__prisma__;
  db.$connect();
}

export { db };
