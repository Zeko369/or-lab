// @ts-check

import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();
const randomImage = () => `https://picsum.photos/seed/${faker.random.word()}/800/800`;
const randomImages = (count) => Array.from(new Array(count), randomImage);

const main = async () => {
  await prisma.$connect();
  const addresses = await prisma.$transaction(
    Array.from({ length: 2 }, () =>
      prisma.location.create({
        data: {
          address: faker.address.streetAddress(),
          addressCountry: faker.address.countryCode("alpha-2"),
          latitude: Number(faker.address.latitude()),
          longitude: Number(faker.address.longitude()),
        },
      })
    )
  );

  for (let i = 0; i < 10; i++) {
    const opensAt = faker.datatype.number({ min: 0, max: 24 * 60 * 60 - 2 });
    const closesAt = faker.datatype.number({ min: opensAt + 1, max: 24 * 60 * 60 - 1 });

    await prisma.store.create({
      data: {
        name: faker.company.name(),
        description: faker.lorem.paragraph(),
        image: randomImage(),
        owner: { create: { firstName: faker.name.firstName(), lastName: faker.name.lastName() } },
        location: { connect: { id: addresses[i % 2].id } },
        phoneNumber: faker.phone.number(),
        rating: faker.datatype.float({ min: 0, max: 5, precision: 3 }),
        products: {
          create: Array.from(new Array(faker.datatype.number({ min: 4, max: 10 })), () => ({
            name: faker.commerce.productName(),
            description: faker.lorem.paragraph(),
            shortDescription: faker.lorem.sentence(),
            images: randomImages(5),
            price: faker.datatype.float({ min: 0, max: 100, precision: 2 }),
            stock: faker.datatype.number({ min: 0, max: 100 }),
            rating: faker.datatype.float({ min: 0, max: 5, precision: 3 }),
            brand: faker.company.name(),
            discount:
              Math.random() > 0.7 ? faker.datatype.float({ min: 0, max: 100, precision: 2 }) : 0,
          })),
        },
        closesAt,
        opensAt,
      },
    });
  }
};

main().finally(() => {
  prisma.$disconnect();
});
