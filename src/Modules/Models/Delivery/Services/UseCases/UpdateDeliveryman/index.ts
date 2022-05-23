import { DeliveryRepository } from "../../../Repository/Implementation/DeliveryRepository";
import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanInDeliveryUseCase";
import { UpdateDeliverymanController } from "./UpdateDeliverymanController";

const deliveryRepository = DeliveryRepository.getInstance();

const updateDeliverymanUseCase = new UpdateDeliverymanUseCase(deliveryRepository);

const updateDeliverymanController = new UpdateDeliverymanController(updateDeliverymanUseCase);

export { updateDeliverymanController }