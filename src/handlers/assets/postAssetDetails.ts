import { Request, Response } from 'express';
import * as dbe from '../../dbe';


/**
 * Emits heartbeat message to client.
 * @param {string} req - Incoming HTTP request.
 * @param {string} res - Outgoing HTTP response.
 * @return {Object} URL to verifier's iframe & tx reference.
 */
export default async (req: Request, res: Response) => {
	console.log(123);
	
}
