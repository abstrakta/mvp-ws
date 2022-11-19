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
    app.get('/users/:idOfEntity', handlers.users.getUserDetails);
    app.get('/users/:idOfEntity/portfolio', handlers.users.getUserAssetPortfolio);

    // Research assets.
    app.get('/assets/:idOfEntity', handlers.assets.getAssetDetails);
    app.get('/asset-bundles/:idOfEntity', handlers.assets.getAssetBundle);
    app.get('/asset-portfolios/:idOfEntity', handlers.assets.getAssetPortfolio);

    // Daos.
    app.get('/daos/:idOfEntity', handlers.daos.getDaoDetails);
}
