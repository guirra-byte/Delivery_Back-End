import { Router } from 'express';

import { createClientAuthTokenController } from '../../Modules/Models/Client/Services/UseCase/Token/Auth';

const clientAuthTokenRoutes = Router();

clientAuthTokenRoutes.post('/client/sessions', (request, response) => {

  return createClientAuthTokenController
    .handle(request, response)
});

export { clientAuthTokenRoutes }