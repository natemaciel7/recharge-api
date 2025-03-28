import { Request, Response, NextFunction } from "express";

export default function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(error);
  if (error.type === "conflict") return res.status(409).send(error.message);
  if (error.type === "not_found") return res.status(404).send(error.message);
  if (error.type === "unprocessable_entity")
    return res.status(422).send(error.message);
  return res.status(500).send("Internal Server Error");
}
