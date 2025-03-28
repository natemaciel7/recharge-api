import * as phoneRepository from "../repositories/phone.repository";
import { Phone } from "../protocols/phone.protocols";

export async function createPhone(phone: Phone) {
  let client = await phoneRepository.findClientByDocument(phone.document);

  if (!client) {
    client = await phoneRepository.createClient(phone.document);
  }

  const existingPhones = await phoneRepository.getPhonesByClientId(client.id);
  if (existingPhones.length >= 3)
    throw { type: "conflict", message: "Limite de 3 telefones atingido." };

  const duplicate = await phoneRepository.findPhoneByNumber(phone.number);
  if (duplicate) throw { type: "conflict", message: "Número já cadastrado." };

  return await phoneRepository.createPhone({
    ...phone,
    clientId: client.id,
  });
}

export async function getPhonesByDocument(document: string) {
  return await phoneRepository.getPhonesByDocument(document);
}
