import { IClientRepository } from "../../../Repository/IClientRepository";
import { Client, Delivery } from "@prisma/client";

export class FindAllClientDeliveriesUseCase {

  constructor(private clientRepository: IClientRepository) { }
  async execute(client_id: string): Promise<(Client & {
    delivery: Delivery[];
  })[]> {

    const findAllClientDeliveries = await this
      .clientRepository
      .findAllDeliveries(client_id);

    return findAllClientDeliveries;
  }
}