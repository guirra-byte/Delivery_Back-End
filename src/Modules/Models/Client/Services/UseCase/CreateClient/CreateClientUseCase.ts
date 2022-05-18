import { hash } from "bcryptjs";
import { IClientRepository } from "../../../Repository/IClientRepository";

export class CreateClientUseCase {

  constructor(private clientRepository: IClientRepository) { }
  async execute(username: string, password: string) {

    const cryptThePassword = await hash(password, 10);

    const createClient = await this
      .clientRepository
      .create({ username, password: cryptThePassword });

    return createClient;
  }
}