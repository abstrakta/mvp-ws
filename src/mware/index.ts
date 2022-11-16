import { Application } from 'express';
import logger from "./logger";

/**
 * Binds application routes to request handlers.
 * @param app - Express handler.
 */
export default async (app: Application) => {
    app.use(logger);
}
