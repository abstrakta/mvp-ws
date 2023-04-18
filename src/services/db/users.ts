import { PrismaClient } from '@prisma/client';


/**
 * Returns a domain entity: user.
 * @param idOfAsset - Domain entity identifier.
 * @return {Object} Domain entity DTO.
 */
export const getUserDetail = async (idOfUser: number) => {
    const prisma = new PrismaClient();

    return await prisma.user.findFirst({
        where: {
            id: idOfUser
        }
    });
};
