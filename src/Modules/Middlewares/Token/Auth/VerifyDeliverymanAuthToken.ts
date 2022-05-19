import { Request, Response, NextFunction } from 'express';

import { verify } from "jsonwebtoken";

import { DeliverymanRepository } from "../../../Models/Deliveryman/Repository/Implementation/DeliverymanRepository";
import { authTokenHash } from "../../../Models/Deliveryman/Services/UseCase/Token/Auth/CreateDeliverymanAuthTokenUseCase";
import { AppError } from "../../../Errors/AppError";


interface IVerifyAuthTokenPayloadRequestProps {

  username: string
  sub: string
}

const verifyDeliverymanAuthToken = async (request: Request, response: Response, next: NextFunction) => {

  const bearerToken = request.headers.authorization;

  if (bearerToken === undefined) {

    throw new AppError("Token is missing!");
  }

  const token = bearerToken.split(" ");
  const authToken = token[1];

  try {

    const verifyAuthToken = verify(authToken, authTokenHash) as IVerifyAuthTokenPayloadRequestProps;

    const deliverymanRepository = DeliverymanRepository
      .getInstance();

    const findDeliveryman = await deliverymanRepository
      .findById(verifyAuthToken.sub);

    if (findDeliveryman === null) {

      throw new AppError("This Deliveryman does exists!");
    }

    request.deliveryman = {

      id: verifyAuthToken.sub
    }

    next();
  }

  catch {

    throw new AppError("Token is invalid!");
  }
}

export { verifyDeliverymanAuthToken }