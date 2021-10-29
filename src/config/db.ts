import { createConnection } from 'typeorm';

export const connectDb = async () =>
  await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'truckerdb',
  });
