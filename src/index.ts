import { PrismaClient } from '@prisma/client';
import express from 'express';

const app = express();
const PORT = 3000;
const prisma = new PrismaClient();

app.get('/', async (req, res) => {
  const users = await prisma.user.findMany();
  console.log(users);

  res.send('Hello Abstrakta 32 !');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});
