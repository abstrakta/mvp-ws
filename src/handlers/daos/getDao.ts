import { Request, Response } from 'express';
import * as constants from "../../utils/constants";

import { PrismaClient } from '@prisma/client';


/**
 * Emits heartbeat message to client.
 * @param {string} req - Incoming HTTP request.
 * @param {string} res - Outgoing HTTP response.
 * @return {Object} URL to verifier's iframe & tx reference.
 */
export default async (req: Request, res: Response) => {
    const prisma = new PrismaClient();
    const entity = await prisma.dao.findFirst({
        where: {
            id: parseInt(req.params.idOfDao)
        }
    })

    res.json(entity);
}
