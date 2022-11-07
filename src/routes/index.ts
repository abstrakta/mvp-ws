import { Application } from 'express';
import * as handlers from '../handlers/index';

/**
 * Binds application routes to request handlers.
 * @param app - Express handler.
 */
export default async (app: Application) => {
    app.get('/', handlers.getHeartbeat);
    app.get('/heartbeat', handlers.getHeartbeat);
}
