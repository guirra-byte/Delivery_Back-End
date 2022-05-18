import { Router } from 'express';

import { verifyDeliverymanAlreadyExists } from '../Modules/Middlewares/VerifyDeliverymanAlreadyExists';
import { createDeliverymanAuthTokenController } from '../Modules/Models/Deliveryman/Services/UseCase/Token/Auth';

const deliverymanAuthTokenRoutes = Router();

deliverymanAuthTokenRoutes.post('/deliveryman/session', verifyDeliverymanAlreadyExists, (request, response) => {

  return createDeliverymanAuthTokenController
    .handle(request, response);
});


export { deliverymanAuthTokenRoutes }