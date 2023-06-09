import { Router } from 'express';

import {
    UserController,
} from './controllers';

const routes = Router();

routes.use('/users', UserController);

export default routes;