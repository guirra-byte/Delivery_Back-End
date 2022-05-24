import { Delivery } from "@prisma/client";
import { hash } from "bcryptjs";
import { AppError } from "../../../../../Errors/AppError";
import { IClientRepository } from "../../../Repository/IClientRepository";

export class CreateClientUseCase {

  constructor(private clientRepository: IClientRepository) { }

  async execute(username: string, password: string) {

    const cryptThePassword = await hash(password, 10);

    const verifyClientAlreadyExists = await this
      .clientRepository
      .findByUsername(username);

    if (verifyClientAlreadyExists) {

      throw new AppError("Client Username already exists, try other username!")
    }

    const createClient = await this
      .clientRepository
      .create({ username, password: cryptThePassword });

    return createClient;
  }
}