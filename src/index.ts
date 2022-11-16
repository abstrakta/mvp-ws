import express from "express";
import { Express } from "express";
import setMiddleware      from "./mware";
import setRoutes          from "./routes";
import * as constants from "./utils/constants";
import * as logger from "./utils/logging";


// Instantiate & configure application.
const app: Express = express();
setMiddleware(app);
setRoutes(app);

// Start application.
app.listen(constants.APP_PORT, () => {
  logger.logAPI(`Listening on port ${constants.APP_PORT}`);
});
