import { Application } from 'express';
import * as handlers from '../handlers';

/**
 * Binds application routes to request handlers.
 * @param app - Express handler.
 */
export default async (app: Application) => {
    // Miscellaneous.
    app.get('/', handlers.misc.getHeartbeat);
    app.get('/heartbeat', handlers.misc.getHeartbeat);

    // Users.
    app.get('/users/:userId', handlers.users.getUser);

    // Research assets.
    app.get('/assets/bundle/:portfolioId', handlers.assets.getAssetBundle);
    app.get('/assets/details/:assetId', handlers.assets.getAssetDetails);
    app.get('/assets/portfolio/:ownerId', handlers.assets.getAssetPortfolio);

    // Daos.
    app.get('/daos/details/:idOfDao', handlers.daos.getDao);
}
