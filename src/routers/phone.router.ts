import { Router } from "express";
import * as phoneController from "../controllers/phone.controller";
import validateSchema from "../middlewares/validateSchema";
import phoneSchema from "../schemas/phone.schema";

const router = Router();

router.post("/", validateSchema(phoneSchema), phoneController.createPhone);
router.get("/:document", phoneController.getPhonesByDocument);

export default router;
