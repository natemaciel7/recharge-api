import { Request, Response } from "express";
import * as clientService from "../services/client.service";

export async function getAllClients(req: Request, res: Response) {
  const clients = await clientService.getAllClients();
  res.send(clients);
}
