// import { IClientRepository } from "../../../Repository/IClientRepository";
// import { AppError } from "../../../../../Errors/AppError";
// import { prisma } from "../../../../../../Prisma/Client/Client.prisma";


// export class UploadDeliveryNotes {

//   constructor(private clientRepository: IClientRepository) { }
//   async execute(client_id: string, deliveryNote: string) {

//     const findClient = await this
//       .clientRepository
//       .findById(client_id);

//     if (!findClient) {

//       throw new AppError("Client does Exists!", 404);
//     }

//     const uploadDeliveryNote = await findClient.notes
//   }
// }