import express  from 'express';
import cors from 'cors';

import { connect, environment } from './config';

import routes from './routes';

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use('/api', routes);

(async () => {
  await connect();

  app.listen(environment.PORT, () => {
    console.log(`Server started on port ${environment.PORT}!`);
  });
})();