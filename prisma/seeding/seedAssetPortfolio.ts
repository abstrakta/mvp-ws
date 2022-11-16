import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import * as random from "../../src/utils/random";


/**
 * Seeds TEST database with a set of test research assets.
 * @param prisma - A prisma client bound to a dB
 */
export default async (prisma: PrismaClient, countToCreate: number = 100) => {
    for (let i = 0; i < countToCreate; i++) {
        const user = await prisma.user.findUnique({
            where: {
                id: i + 1
            }
        });

        const portfolio = await createAssetPortfolio(prisma, user!.id);
        for (let i = 0; i < 10; i++) {
            const bundle = await createAssetBundle(prisma, portfolio.id);
            for (let i = 0; i < 5; i++) {
                await createAsset(prisma, bundle.id);
            }
        }
    }
};


const createAsset = async (prisma: PrismaClient, bundleId: number) => {
    await prisma.assetDetails.create({
        data: {
            bundleId: bundleId,
            dateUpdated: new Date().toISOString(),
            description: faker.lorem.paragraph(1),
            title: faker.lorem.words(3)
        }
    });
};

const createAssetBundle = async (prisma: PrismaClient, portfolioId: number) => {
    return await prisma.assetBundle.create({
        data: {
            dateUpdated: new Date().toISOString(),
            portfolioId: portfolioId,
        }
    });
};

const createAssetPortfolio = async (prisma: PrismaClient, ownerId: number) => {
    return await prisma.assetPortfolio.create({
        data: {
            dateUpdated: new Date().toISOString(),
            ownerId: ownerId,
        }
    });
};
