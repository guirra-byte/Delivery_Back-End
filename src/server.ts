import "express-async-errors";
import { Request, Response, NextFunction } from "express";

import { AppError } from "./Modules/Errors/AppError";

import { app } from "./app";

import { deliverymanRoutes } from "./Routes/Deliveryman.routes";
import { deliverymanAuthTokenRoutes } from "./Routes/DeliverymanAuthToken.routes";

import { clientRoutes } from './Routes/Client.routes';
import { clientAuthTokenRoutes } from "./Routes/ClientAuthToken.routes";

import { deliveryRoutes } from "./Routes/Delivery.routes";

const PORT = 9978;

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {

  if (error instanceof AppError) {

    return response
      .status(error.errorStatus)
      .json({ message: error.msg });
  }

  return response
    .status(500)
    .json({ message: `Internal Server error: ${error.message}` });

});

app.use(deliverymanRoutes);
app.use(deliverymanAuthTokenRoutes);

app.use(clientRoutes);
app.use(clientAuthTokenRoutes);

app.use(deliveryRoutes);

app.listen(PORT, () => {

  console.log("O Server já está rodando --- 🎃😎🤩");
});