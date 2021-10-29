import express from 'express';
import { createConnection } from 'typeorm';
import router from './api/router';

import { port } from './config';
import log from './config/logger';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

(async () => {
  try {
    await createConnection();
    log.info('Database connected');
  } catch (e) {
    log.error('Failed to connect due to:', e);
  }
})();

router(app);

app.listen(port, () => {
  log.info(`App Listening on port ${port}`);
});
