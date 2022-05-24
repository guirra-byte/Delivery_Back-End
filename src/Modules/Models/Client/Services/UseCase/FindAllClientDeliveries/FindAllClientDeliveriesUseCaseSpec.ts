import { ClientRepositoryInMemory } from "../../../Repository/in-memory/ClientRepositoryInMemory";
import { CreateClientUseCase } from "../CreateClient/CreateClientUseCase";
import { FindAllClientDeliveriesUseCase } from "./FindAllClientDeliveriesUseCase";
import { Delivery } from "@prisma/client";


let clientRepository: ClientRepositoryInMemory;
let findAllClientDeliveriesUseCase: FindAllClientDeliveriesUseCase;
let createClientUseCase: CreateClientUseCase;

describe("List", () => {

  beforeEach(() => {

    clientRepository = new ClientRepositoryInMemory();
    findAllClientDeliveriesUseCase = new FindAllClientDeliveriesUseCase(clientRepository);
    createClientUseCase = new CreateClientUseCase(clientRepository);
  });

  it("Find All Client Deliveries", async () => {

    const client = {

      username: "List All Client Deliveries Username",
      delivery: ["Monitor Ultrawide", "Teclado Mecânico", "Cadeira Gamer Corsair"],
      password: "V84816756"
    }

    const clientDelivery: Delivery = {

    }

    const createClient = await createClientUseCase
      .execute(client.username, client.password, client.delivery);

    const findClientUser = await clientRepository
      .findByUsername(client.username);

    if (findClientUser !== undefined) {

      const findAllDeliveries = await findAllClientDeliveriesUseCase
        .execute(findClientUser.username);

      expect(findClientUser.delivery).toEqual(

        expect.objectContaining({

          delivery: ["Monitor Ultrawide", "Teclado Mecânico", "Cadeira Gamer Corsair"]
        })
      )
    }

  });
})