import { Router } from 'express';

import { createDeliveryController } from '../Modules/Models/Delivery/Services/UseCases/CreateDelivery';
import { verifyClientAuthToken } from '../Modules/Middlewares/Token/Auth/VerifyClientAuthToken';

const deliveryRoutes = Router();

deliveryRoutes.post("/delivery", verifyClientAuthToken, (request, response) => {

  return createDeliveryController
    .handle(request, response);
})

export { deliveryRoutes }