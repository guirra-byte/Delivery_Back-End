import { DeliverymanRepository } from "../../../../Repository/Implementation/DeliverymanRepository";
import { CreateDeliverymanAuthTokenUseCase } from "./CreateDeliverymanAuthTokenUseCase";
import { CreateDeliverymanAuthTokenController } from "./CreateDeliverymanAuthTokenController";

const deliverymanRepository = DeliverymanRepository.getInstance();

const createDeliverymanAuthTokenUseCase = new CreateDeliverymanAuthTokenUseCase(deliverymanRepository);

const createDeliverymanAuthTokenController = new CreateDeliverymanAuthTokenController(createDeliverymanAuthTokenUseCase);

export { createDeliverymanAuthTokenController }