import { PrismaClient } from '@prisma/client';
import seedAssetPortfolio from "./seedAssetPortfolio";
import seedDao from "./seedDao";
import seedUser from "./seedUser";


async function main(prisma: PrismaClient) {
  console.log("Seeding abstrakta TEST dB");

  console.log("... seeding 100 users");
  await seedUser(prisma, 100);

  console.log("... seeding 100 daos");
  await seedDao(prisma, 100);

  console.log("... seeding 100 asset portfolios");
  await seedAssetPortfolio(prisma, 100);

}

const prisma = new PrismaClient();
main(prisma)
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });
