import { PrismaClient } from '@prisma/client';


/**
 * Returns a domain entity: dao.
 * @param idOfAsset - Domain entity identifier.
 * @return {Object} Domain entity DTO.
 */
 export const getDaoDetail = async (idOfDao: number) => {
    const prisma = new PrismaClient();

    return await prisma.dao.findFirst({
        where: {
            id: idOfDao
        },
        include: {
            members: true
        }
    });
};
