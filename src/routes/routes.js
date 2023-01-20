import { Router } from "express";
import { postSignUp } from "../controllers/signUpController.js";
import { signUpValidation } from "../middlewares/signUpMiddleware.js";
import { signInValidation } from "../middlewares/signInMiddleware.js";
import { postSignIn } from "../controllers/signInController.js";
const router = Router();

router.post("/sign-up", signUpValidation, postSignUp);
router.post("/sign-in", signInValidation, postSignIn);
export default router;
