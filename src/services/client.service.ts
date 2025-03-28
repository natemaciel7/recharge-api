import * as clientRepository from "../repositories/client.repository";

export async function getAllClients() {
  return await clientRepository.getAllClients();
}
