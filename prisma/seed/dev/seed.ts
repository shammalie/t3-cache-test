import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  await prisma.sensor.deleteMany({});
  await prisma.sensor.createMany({
    skipDuplicates: true,
    data: Array.from(Array(16000)).map(() => ({
      name: faker.string.alpha(5),
      lat: faker.location.latitude(),
      lon: faker.location.longitude(),
      description: faker.lorem.paragraphs({ min: 1, max: 5 }),
    })),
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
