import { Request, Response } from "express";
import * as rechargeService from "../services/recharge.service";

export async function createRecharge(req: Request, res: Response) {
  const recharge = req.body;
  const created = await rechargeService.createRecharge(recharge);
  res.status(201).send(created);
}

export async function getRechargesByPhoneNumber(req: Request, res: Response) {
  const { number } = req.params;
  const result = await rechargeService.getRechargesByPhoneNumber(number);
  res.send(result);
}

export async function getSummaryByDocument(req: Request, res: Response) {
  const { document } = req.params;
  const result = await rechargeService.getSummaryByDocument(document);
  res.send(result);
}
