import { DeliverymanRepositoryInMemory } from '../../../Repository/in-memory/DeliverymanRepositoryInMemory';
import { CreateDeliverymanUseCase } from './CreateDeliverymanUseCase';
import { IDeliverymanProps } from '../../../Repository/IDeliverymanRepository';
import { AppError } from '../../../../../Errors/AppError';


let deliverymanRepository: DeliverymanRepositoryInMemory;
let createDeliverymanUseCase: CreateDeliverymanUseCase;

describe("Create Deliveryman", () => {

  beforeEach(() => {

    deliverymanRepository = new DeliverymanRepositoryInMemory();
    createDeliverymanUseCase = new CreateDeliverymanUseCase(deliverymanRepository);
  });

  it("Create a new Deliveryman", async () => {

    const deliveryman: IDeliverymanProps = {

      username: "Deliveryman Username Test",
      password: "Deliveryman Password Test"
    }

    const username = deliveryman
      .username;

    const password = deliveryman
      .password;

    await createDeliverymanUseCase
      .execute({ username, password });

    const findDeliveryman = await deliverymanRepository
      .findOne(username);

    expect(findDeliveryman)
      .toHaveProperty("id");

    expect(findDeliveryman)
      .not
      .toBeUndefined();

  });

  it("Verify Deliveryman Already Exists", async () => {

    //Expect === Expectativa de Retorno;
    //Minha implementação é inserida dentro da Expectativa;

    expect(async () => {

      const deliveryman: IDeliverymanProps = {

        username: "Deliveryman Username Test",
        password: "Deliveryman Password Test"
      }

      const username = deliveryman
        .username;

      const password = deliveryman
        .password;

      await createDeliverymanUseCase
        .execute({ username, password });

      await createDeliverymanUseCase
        .execute({ username, password });

    }).rejects
      .toBeInstanceOf(AppError)

  })

})
