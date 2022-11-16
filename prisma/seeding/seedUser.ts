import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';


/**
 * Seeds TEST database with a set of test users.
 * @param prisma - A prisma client bound to a dB
 */
export default async (prisma: PrismaClient, countToCreate: number = 100) => {
    for (let i = 0; i < countToCreate; i++) {
        await createUser(prisma);
    }
};

/**
 * Seeds TEST database with a test user.
 * @param prisma - A prisma client bound to a dB
 */
 const createUser = async (prisma: PrismaClient) => {
    const firstName = faker.name.firstName();
    const middleName = faker.name.middleName();
    const lastName = faker.name.lastName();
    const emailOfUser = faker.internet.email(firstName.toLowerCase(), lastName.toLowerCase());

    await prisma.user.upsert({
        where: {
            email: emailOfUser
        },
        update: {},
        create: {
            dateUpdated: new Date().toISOString(),
            email: emailOfUser,
            name: `${firstName} ${middleName} ${lastName}`
        }
    });
};
