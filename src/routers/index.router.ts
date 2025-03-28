import { Router } from "express";
import phoneRouter from "./phone.router";
import rechargeRouter from "./recharge.router";

const router = Router();
router.use("/phones", phoneRouter);
router.use("/recharges", rechargeRouter);

export default router;
