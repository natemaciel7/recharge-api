import * as phoneRepository from "../repositories/phone.repository";
import { Phone } from "../protocols/phone.protocols";

export async function createPhone(phone: Phone) {
  return await phoneRepository.createPhone(phone);
}

export async function getPhonesByDocument(document: string) {
  return await phoneRepository.getPhonesByDocument(document);
}
