import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';


/**
 * Emits heartbeat message to client.
 * @param {string} req - Incoming HTTP request.
 * @param {string} res - Outgoing HTTP response.
 * @return {Object} URL to verifier's iframe & tx reference.
 */
export default async (req: Request, res: Response) => {
    const prisma = new PrismaClient();
    const entity = await prisma.assetDetails.findFirst({
        where: {
            id: parseInt(req.params.assetId)
        }
    });

    res.json(entity);
}
