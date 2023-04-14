import { Router } from "express";
import { postSignUp } from "../controllers/signUpController.js";
import { postSignIn } from "../controllers/signInController.js";
import { getBalance, postBalance } from "../controllers/balanceController.js";
import { signUpValidation } from "../middlewares/signUpMiddleware.js";
import { signInValidation } from "../middlewares/signInMiddleware.js";
import { balanceValidation } from "../middlewares/balanceMiddleware.js";

const router = Router();

router.post("/sign-up", signUpValidation, postSignUp);
router.post("/sign-in", signInValidation, postSignIn);
router.post("/balance", balanceValidation, postBalance);
router.get("/balance", getBalance);

export default router;
