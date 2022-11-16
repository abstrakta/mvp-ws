import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import * as random from "../../src/utils/random";


/**
 * Seeds TEST database with a set of test research DAOs.
 * @param prisma - A prisma client bound to a dB
 */
export default async (prisma: PrismaClient) => {
    // Create N DAOs with a different ceator per DAO.
	for (let i = 1; i < 101; i++) {
		// Set DAO creator ID.
		const idOfCreator = i;
		console.log(`ID of DAO creator: ${idOfCreator}`);

		// Set DAO.
		const { id: idOfDao } = await createDao(prisma, idOfCreator);
		console.log(`ID of DAO: ${idOfDao}`);

		// Set DAO membership.
		for (let j = 0; j < 10; j++) {
			const idOfMember = random.getRandomInteger(1, 100);
			console.log(`ID of DAO member: ${idOfMember}`);
			createDaoMember(prisma, idOfDao, idOfMember)
		}			
    }
};

const createDao = async (prisma: PrismaClient, creatorId: number) => {
    return await prisma.dao.create({
        data: {
            dateUpdated: new Date().toISOString(),
            name: faker.commerce.productName(),
        }
    });
};

const createDaoMember = async (prisma: PrismaClient, daoId: number, memberId: number) => {
    return await prisma.daoMember.create({
        data: {
            dateUpdated: new Date().toISOString(),
            daoId: daoId,
			memberId: memberId,
        }
    });
};
