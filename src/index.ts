import express from "express";
import setMiddleware      from "./mware";
import setRoutes          from "./routes";


const app = express();
const PORT = 3000;

setMiddleware(app);
setRoutes(app);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});
