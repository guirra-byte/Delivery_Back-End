import { DeliveryRepository } from "../../../Repository/Implementation/DeliveryRepository";
import { UpdateDeliveryEndDateUseCase } from "./UpdateDeliveryEndDateUseCase";
import { UpdateDeliveryEndDateController } from './UpdateDeliveryEndDateController';

const deliveryRepository = DeliveryRepository.getInstance();

const updateDeliveryEndDateUseCase = new UpdateDeliveryEndDateUseCase(deliveryRepository);

const updateDeliveryEndDateController = new UpdateDeliveryEndDateController(updateDeliveryEndDateUseCase);

export { updateDeliveryEndDateController }