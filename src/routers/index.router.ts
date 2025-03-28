import { Router } from "express";
import phoneRouter from "./phone.router";
import rechargeRouter from "./recharge.router";
import clientRouter from "./client.router";

const router = Router();
router.use("/phones", phoneRouter);
router.use("/recharges", rechargeRouter);
router.use("/clients", clientRouter);

export default router;
