import { NextFunction, Request, Response } from 'express';
import * as logger from "../utils/logging";


/**
 * Middleware: emits to stdout a logging message.
 * @param req - Incoming HTTP request.
 * @param res - Outgoing HTTP response.
 * @param next - Middleware pipeline incrementor.
 */
export default async (req: Request, res: Response, next: NextFunction) => {
	if (Object.keys(req.params).length > 0) {
		logger.logAPI(`HTTP request: ${req.path} :: ${Object.keys(req.params)}`);
	} else {
		logger.logAPI(`HTTP request: ${req.path}`);
	}

	next();
}
