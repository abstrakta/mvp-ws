import { Request, Response } from 'express';
import * as dbe from '../../dbe';


/**
 * Emits heartbeat message to client.
 * @param {string} req - Incoming HTTP request.
 * @param {string} res - Outgoing HTTP response.
 * @return {Object} URL to verifier's iframe & tx reference.
 */
export default async (req: Request, res: Response) => {
    const idOfEntity = parseInt(req.params.idOfEntity);
    const entity = await dbe.users.getUserDetail(idOfEntity);

    res.json(entity);
}
