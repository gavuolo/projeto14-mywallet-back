import { schemaSignUp } from "../index.js"
import { userCollection , sessionsCollection} from "../database/db.js"
import bcrypt from "bcrypt"
import { v4 as uuidV4 } from "uuid";

export async function signUp(req, res) {
    const user = req.body;

    const validation = schemaSignUp.validate(user)
    if (validation.error) {
        return res.sendStatus(422);
    }

    try {
        
        const userExist = await userCollection.findOne({email: user.email})
        if(userExist){
            res.status(409).send({message: "Email já cadastrado"})
            return
        }
        const hashPassword = bcrypt.hashSync(user.password, 10);
        await userCollection.insertOne({...user, password: hashPassword, transactions:[]});
        res.sendStatus(201)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

}