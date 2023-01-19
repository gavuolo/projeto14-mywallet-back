import { Router } from "express";
import { postSignUp } from "../controllers/signUpController.js";
import {signUpValidation} from '../middlewares/signUpMiddleware.js'
const router = Router();

router.post('/signUp', signUpValidation, postSignUp)

export default router