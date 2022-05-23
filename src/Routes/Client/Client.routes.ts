import { response, Router } from 'express';

import { createClientController } from '../../Modules/Models/Client/Services/UseCase/CreateClient';
import { findAllClientDeliveriesController } from '../../Modules/Models/Client/Services/UseCase/FindAllClientDeliveries';

import { verifyClientAlreadyExists } from '../../Modules/Middlewares/VerifyClientAlreadyExists';
import { verifyClientAuthToken } from '../../Modules/Middlewares/Token/Auth/VerifyClientAuthToken';

const clientRoutes = Router();

clientRoutes.post('/', verifyClientAlreadyExists, (request, response) => {

  return createClientController
    .handle(request, response);
});

clientRoutes.get('/myDeliveries', verifyClientAuthToken, (request, response) => {

  return findAllClientDeliveriesController
    .handle(request, response);
})

export { clientRoutes }