import { PrismaClient } from '@prisma/client';
import { PublicationStatus } from '@prisma/client';


/**
 * Returns a domain entity: asset detail.
 * @param idOfAsset - Domain entity identifier.
 * @return {Object} Domain entity DTO.
 */
 export const createAssetDetail = async (idOfBundle: number, description: string, title: string, publicationStatus: PublicationStatus): Promise<number> => {
    const prisma = new PrismaClient();
    const { id: entityID } = await prisma.assetDetails.create({
        data: {
            idOfBundle: idOfBundle,
            description: description,
            publicationStatus: publicationStatus,
            title: title,
        }
    });

    return entityID;
};

/**
 * Deletes a domain entity: asset detail.
 * @param idOfEntity - Domain entity identifier.
 * @return {Object} Domain entity DTO.
 */
 export const deleteAssetDetail = async (idOfEntity: number) => {
    const prisma = new PrismaClient();
    await prisma.assetDetails.delete({
        where: {
            id: idOfEntity
        },
    });
};

/**
 * Returns a domain entity: asset bundle.
 * @param idOfPortfolio - Domain entity identifier.
 * @return {Object} Domain entity DTO.
 */
export const getAssetBundle = async (idOfBundle: number) => {
    const prisma = new PrismaClient();

    return await prisma.assetBundle.findFirst({
        where: {
            id: idOfBundle
        },
        include: {
            assets: true
        }
    });
};

/**
 * Returns a domain entity: asset bundle (matched by owner id).
 * @param idOfPortfolio - Domain entity identifier.
 * @return {Object} Domain entity DTO.
 */
export const getAssetBundleByUser = async (idOfOwner: number, idOfAssetBundle: number) => {
    const prisma = new PrismaClient();

    console.log(idOfOwner, idOfAssetBundle);

    return await prisma.assetPortfolio.findFirst({
        where: {
            idOfOwner: idOfOwner
        },
        include: {
            bundles: true
        }
    });
};

/**
 * Returns a domain entity: asset detail.
 * @param idOfAsset - Domain entity identifier.
 * @return {Object} Domain entity DTO.
 */
 export const getAssetDetail = async (idOfAsset: number) => {
    const prisma = new PrismaClient();

    return await prisma.assetDetails.findFirst({
        where: {
            id: idOfAsset
        }
    });
};

/**
 * Returns a domain entity: asset portfolio.
 * @param idOfPortfolio - Domain entity identifier.
 * @return {Object} Domain entity DTO.
 */
 export const getAssetPortfolio = async (idOfPortfolio: number) => {
    const prisma = new PrismaClient();

    return await prisma.assetPortfolio.findFirst({
        where: {
            id: idOfPortfolio
        },
        include: {
            bundles: true
        }
    });
};

/**
 * Returns a domain entity: asset bundle (matched by owner id).
 * @param idOfPortfolio - Domain entity identifier.
 * @return {Object} Domain entity DTO.
 */
 export const getAssetPortfolioByOwner = async (idOfOwner: number) => {
    const prisma = new PrismaClient();

    return await prisma.assetPortfolio.findFirst({
        where: {
            idOfOwner: idOfOwner
        },
        include: {
            bundles: true
        }
    });
};
