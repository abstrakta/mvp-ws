import { PrismaClient } from '@prisma/client';
import seedAssetPortfolio from "./seedAssetPortfolio";
import seedDao from "./seedDao";
import seedCommunity from "./seedCommunity";


async function main(prisma: PrismaClient) {
  console.log("Seeding abstrakta TEST dB");

  console.log("... seeding community");
  await seedCommunity(prisma);

  console.log("... seeding daos");
  await seedDao(prisma);

  console.log("... seeding asset portfolios");
  await seedAssetPortfolio(prisma);

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
