import { Request, Response } from 'express';
import { db } from '../../services';


/**
 * Emits heartbeat message to client.
 * @param {string} req - Incoming HTTP request.
 * @param {string} res - Outgoing HTTP response.
 * @return {Object} URL to verifier's iframe & tx reference.
 */
export default async (req: Request, res: Response) => {
    const idOfOwner = parseInt(req.params.idOfUser);
    const entity = await db.assets.getAssetPortfolioByOwner(idOfOwner);

    res.json(entity);
}
