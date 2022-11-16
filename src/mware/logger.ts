import { Request, Response } from 'express';


/**
 * Emits heartbeat message to client.
 * @param {string} req - Incoming HTTP request.
 * @param {string} res - Outgoing HTTP response.
 * @return {Object} URL to verifier's iframe & tx reference.
 */
export default async (req: Request, res: Response, next: any) => {
	console.log('LOGGED');

	next();
}

