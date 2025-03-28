import { Router } from "express";
import * as rechargeController from "../controllers/recharge.controller";
import validateSchema from "../middlewares/validateSchema";
import rechargeSchema from "../schemas/recharge.schema";

const router = Router();

router.post(
  "/",
  validateSchema(rechargeSchema),
  rechargeController.createRecharge
);
router.get("/:number", rechargeController.getRechargesByPhoneNumber);
router.get("/summary/:document", rechargeController.getSummaryByDocument);

export default router;
