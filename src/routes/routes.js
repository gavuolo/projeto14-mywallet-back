import { Router } from "express";
import { postSignUp } from "../controllers/signUpController.js";
import { signUpValidation } from "../middlewares/signUpMiddleware.js";
import { signInValidation } from "../middlewares/signInMiddleware.js";
import { postSignIn } from "../controllers/signInController.js";
const router = Router();

router.post("/signUp", signUpValidation, postSignUp);
router.post("/signIn", signInValidation, postSignIn);
export default router;
