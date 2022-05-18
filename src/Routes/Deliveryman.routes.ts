import { Router } from 'express';

import { verifyDeliverymanAlreadyExists } from '../Modules/Middlewares/VerifyDeliverymanAlreadyExists';
import { createDeliverymanController } from '../Modules/Models/Deliveryman/Services/UseCase/CreateDeliveryman';

const deliverymanRoutes = Router();

deliverymanRoutes.post("/deliveryman", verifyDeliverymanAlreadyExists, (request, response) => {

  return createDeliverymanController
    .handle(request, response);
});

export { deliverymanRoutes }