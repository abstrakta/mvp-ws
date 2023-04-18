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
    app.get('/users/:idOfUser', handlers.users.getUserDetails);
    app.get('/users/:idOfUser/portfolio', handlers.users.getUserAssetPortfolio);

    app.get('/users/:idOfUser/portfolio/:idOfAssetBundle', handlers.users.getUserAssetBundle);

    // Research assets.
    app.get('/assets/:idOfEntity', handlers.assets.getAssetDetails);
    app.get('/asset-bundles/:idOfEntity', handlers.assets.getAssetBundle);
    app.get('/asset-portfolios/:idOfEntity', handlers.assets.getAssetPortfolio);

    // Daos.
    app.get('/daos/:idOfEntity', handlers.daos.getDaoDetails);
}
