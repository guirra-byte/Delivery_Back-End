import { response, Router } from 'express';

import { createClientController } from '../Modules/Models/Client/Services/UseCase/CreateClient';

import { verifyClientAlreadyExists } from '../Modules/Middlewares/VerifyClientAlreadyExists';

const clientRoutes = Router();

clientRoutes.post('/', verifyClientAlreadyExists, (request, response) => {

  return createClientController
    .handle(request, response);
});

export { clientRoutes }