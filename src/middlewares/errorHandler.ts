import { Request, Response, NextFunction } from "express";

export default function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.error(error);

  if (error.type === "conflict") {
    res.status(409).send(error.message);
    return;
  }

  if (error.type === "not_found") {
    res.status(404).send(error.message);
    return;
  }

  if (error.type === "unprocessable_entity") {
    res.status(422).send(error.message);
    return;
  }

  res.status(500).send("Internal Server Error");
}
