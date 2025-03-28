import Joi from "joi";

const phoneSchema = Joi.object({
  number: Joi.string().length(11).required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  carrierId: Joi.number().required(),
  document: Joi.string().length(11).required(),
});

export default phoneSchema;
