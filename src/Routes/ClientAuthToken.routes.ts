import { Router } from 'express';

import { verifyClientAlreadyExists } from '../Modules/Middlewares/VerifyClientAlreadyExists';

import { createClientAuthTokenController } from '../Modules/Models/Client/Services/UseCase/Token/Auth';

const clientAuthTokenRoutes = Router();

clientAuthTokenRoutes.post('/client/sessions', verifyClientAlreadyExists, (request, response) => {

  return createClientAuthTokenController
    .handle(request, response)
});

export { clientAuthTokenRoutes }