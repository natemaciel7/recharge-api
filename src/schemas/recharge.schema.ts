import Joi from "joi";

const rechargeSchema = Joi.object({
  phoneId: Joi.number().required(),
  amount: Joi.number().min(10).max(1000).required(),
});

export default rechargeSchema;
