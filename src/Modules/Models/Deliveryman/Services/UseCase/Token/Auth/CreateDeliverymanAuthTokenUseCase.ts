import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';

import { IDeliverymanRepository } from '../../../../Repository/IDeliverymanRepository';
import { AppError } from '../../../../../../Errors/AppError';

interface ICreateDeliverymanAuthTokenRequestProps {

  username: string,
  password: string
}

interface IDeliverymanTokenRequestProps {

  token: string,
  user: {

    username: string
  }
}

export const authTokenHash = "0389554751ff254c400720291dccdd6d";

export class CreateDeliverymanAuthTokenUseCase {

  constructor(private deliverymanRepository: IDeliverymanRepository) { }

  async execute({ username, password }: ICreateDeliverymanAuthTokenRequestProps): Promise<IDeliverymanTokenRequestProps> {

    const findUser = await this
      .deliverymanRepository
      .findOne(username);

    if (!findUser) {

      throw new AppError("Username or Password are incorrect!");
    }

    const verifyPassword = await compare(password, findUser.props.password);

    if (!verifyPassword) {

      throw new AppError("Username or Password are incorrect!");
    }

    const createAuthToken = sign({}, authTokenHash, {

      subject: findUser.props.id,
      expiresIn: "1d"
    });

    const deliverymanRequest: IDeliverymanTokenRequestProps = {

      token: createAuthToken,
      user: {

        username: findUser.props.username
      }
    }

    return deliverymanRequest;

  }
}