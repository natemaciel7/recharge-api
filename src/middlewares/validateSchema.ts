import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export default function validateSchema(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const validation = schema.validate(req.body, { abortEarly: false });

    if (validation.error) {
      res.status(422).send(validation.error.details.map((d) => d.message));
      return;
    }

    next();
  };
}
