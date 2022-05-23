import { Router } from 'express';
import multer from 'multer';

import { createDeliveryController } from '../Modules/Models/Delivery/Services/UseCases/CreateDelivery';

import { verifyDeliverymanAuthToken } from '../Modules/Middlewares/Token/Auth/VerifyDeliverymanAuthToken';
import { verifyClientAuthToken } from '../Modules/Middlewares/Token/Auth/VerifyClientAuthToken';

import { updateDeliverymanController } from '../Modules/Models/Delivery/Services/UseCases/UpdateDeliveryman';

import { findDeliveryController } from '../Modules/Models/Delivery/Services/UseCases/FindDelivery';

import Upload from '../Config/Upload/Upload';

const deliveryRoutes = Router();

const upload = multer(Upload.upload("./tmp/avatar"));

deliveryRoutes.post("/delivery", verifyClientAuthToken, (request, response) => {

  return createDeliveryController
    .handle(request, response);
});

deliveryRoutes.patch('/delivery/findDeliveryman', verifyDeliverymanAuthToken, (request, response) => {

  return updateDeliverymanController
    .handle(request, response);
});

deliveryRoutes.get('/deliveries', verifyClientAuthToken, (request, response) => {

  return findDeliveryController
    .handle(request, response);
});


deliveryRoutes.patch('/delivery/notes', verifyClientAuthToken, (request, response) => {


})
export { deliveryRoutes }