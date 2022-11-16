import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';


/**
 * Seeds TEST database with a set of test research assets.
 * @param prisma - A prisma client bound to a dB
 */
export default async (prisma: PrismaClient) => {
    for (let i = 1; i < 101; i++) {
		// Set portfolio owner ID.
		const idOfOwner = i;
		console.log(`ID of portfolio owner: ${idOfOwner}`);

        // Set portfolio.
        const { id: idOfPortfolio } = await createAssetPortfolio(prisma, idOfOwner);
		console.log(`ID of portfolio: ${idOfPortfolio}`);

        // Set portfolio assets.
        for (let i = 0; i < 10; i++) {
            // ... set bundle.
            const { id: idOfBundle } = await createAssetBundle(prisma, idOfPortfolio);
            console.log(`ID of bundle: ${idOfBundle}`);
            
            // ... set assets.
            for (let i = 0; i < 5; i++) {
                await createAsset(prisma, idOfBundle);
            }
        }
    }
};

const createAsset = async (prisma: PrismaClient, idOfBundle: number) => {
    await prisma.assetDetails.create({
        data: {
            dateUpdated: new Date().toISOString(),
            description: faker.lorem.paragraph(1),
            idOfBundle: idOfBundle,
            title: faker.lorem.words(3)
        }
    });
};

const createAssetBundle = async (prisma: PrismaClient, idOfPortfolio: number) => {
    return await prisma.assetBundle.create({
        data: {
            dateUpdated: new Date().toISOString(),
            idOfPortfolio: idOfPortfolio,
        }
    });
};

const createAssetPortfolio = async (prisma: PrismaClient, idOfOwner: number) => {
    return await prisma.assetPortfolio.create({
        data: {
            dateUpdated: new Date().toISOString(),
            idOfOwner: idOfOwner,
        }
    });
};
