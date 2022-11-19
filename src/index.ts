// Set environment.
import * as dotenv from "dotenv";
dotenv.config();


import express from "express";
import { Express } from "express";
import setMiddleware      from "./mware";
import setRoutes          from "./routes";
import * as utils from "./utils";

// Instantiate & configure application.
const app: Express = express();
setMiddleware(app);
setRoutes(app);

// Start application.
app.listen(utils.constants.APP_PORT, () => {
  utils.logger.logAPI(`Listening on port ${utils.constants.APP_PORT}`);
});
