import Joi from "joi";

const phoneSchema = Joi.object({
  number: Joi.string().length(11).required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  clientId: Joi.number().required(),
  carrierId: Joi.number().required(),
});

export default phoneSchema;
