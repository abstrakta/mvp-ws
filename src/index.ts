import { PrismaClient } from '@prisma/client';
import express from 'express';

import * as handlers from './handlers/index';
import routeFactory from './routes';

const app = express();
const PORT = 3000;
const prisma = new PrismaClient();

routeFactory(app)

// app.get('/', handlers.getHeartbeat);
// app.get('/heartbeat', handlers.getHeartbeat);


// app.get('/', async (req, res) => {
//   const users = await prisma.user.findMany();
//   console.log(users);

//   res.send("ABSTRAKTA web service v0.1.0 is operational")
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});
