import * as rechargeRepository from "../repositories/recharge.repository";
import { Recharge } from "../protocols/recharge.protocol";

export async function createRecharge(recharge: Recharge) {
  const phone = await rechargeRepository.findPhoneById(recharge.phoneId);
  if (!phone) throw { type: "not_found", message: "Phone not found" };
  if (recharge.amount < 10 || recharge.amount > 1000)
    throw { type: "unprocessable_entity", message: "Invalid amount" };

  return await rechargeRepository.insertRecharge(recharge);
}

export async function getRechargesByPhoneNumber(number: string) {
  return await rechargeRepository.findRechargesByNumber(number);
}

export async function getSummaryByDocument(document: string) {
  return await rechargeRepository.getSummary(document);
}
