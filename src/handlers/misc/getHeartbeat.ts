import { Request, Response } from 'express';
import * as constants from "../../utils/constants";


/**
 * Emits heartbeat message to client.
 * @param {string} req - Incoming HTTP request.
 * @param {string} res - Outgoing HTTP response.
 * @return {Object} URL to verifier's iframe & tx reference.
 */
export default async (req: Request, res: Response) => {
    res.send(`ABSTRAKTA web service v${constants.VERSION} is operational @ ${new Date().toISOString()}`);
}
