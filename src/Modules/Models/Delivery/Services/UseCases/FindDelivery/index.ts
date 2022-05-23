import { DeliveryRepository } from "../../../Repository/Implementation/DeliveryRepository"; import { FindDeliveryUseCase } from "./FindDeliveryUseCase";
import { FindDeliveryController } from "./FindDeliveryController";

const deliveryRepository = DeliveryRepository.getInstance();

const findDeliveryUseCase = new FindDeliveryUseCase(deliveryRepository);

const findDeliveryController = new FindDeliveryController(findDeliveryUseCase);

export { findDeliveryController }