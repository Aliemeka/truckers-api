import express from 'express';
import router from './api/router';

import { port } from './config';
import log from './config/logger';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

router(app);

app.listen(port, () => {
  log.info(`App Listening on port ${port}`);
});
