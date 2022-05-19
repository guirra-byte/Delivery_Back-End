import { DeliveryRepository } from "../../../Repository/Implementation/DeliveryRepository";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";
import { CreateDeliveryController } from "./CreateDeliveryController";

const deliveryRepository = DeliveryRepository.getInstance();

const createDeliveryUseCase = new CreateDeliveryUseCase(deliveryRepository);

const createDeliveryController = new CreateDeliveryController(createDeliveryUseCase);

export { createDeliveryController }