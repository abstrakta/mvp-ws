import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import * as random from "../../src/utils/random";


/**
 * Seeds TEST database with a set of test research DAOs.
 * @param prisma - A prisma client bound to a dB
 */
export default async (prisma: PrismaClient, countToCreate: number = 100) => {
    for (let i = 0; i < countToCreate; i++) {
		// Simulate DAO creator. In reality this will be a proposer as 
		// DAO creation will pass through a meta governance process.
        const creator = await prisma.user.findUnique({
            where: {
                id: i + 1
            }
        });

        const dao = await createDao(prisma, creator!.id);
		for (let j = 0; i < 10; j++) {
			const member = await prisma.user.findUnique({
				where: {
					id: j + 1
				}
			});
			createDaoMember(prisma, member!.id, dao.id)
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

const createDaoMember = async (prisma: PrismaClient, creatorId: number, daoId: number) => {
    return await prisma.daoMember.create({
        data: {
            dateUpdated: new Date().toISOString(),
            daoId: daoId,
			memberId: 
        }
    });
};
