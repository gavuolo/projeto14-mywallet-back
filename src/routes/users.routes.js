
import {Router} from "express"
import { signIn } from "../controllers/signInController.js"
import { signUp } from "../controllers/signUpController.js"

const router = Router()

router.post("/sign-up", signUp)

router.post("/", signIn)



export default router;
