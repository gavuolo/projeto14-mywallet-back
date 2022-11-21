import { schemaSignUp } from "../index.js"
import { userCollection , sessionsCollection} from "../database/db.js"
import bcrypt from "bcrypt"
import { v4 as uuidV4 } from "uuid";

export async function signIn(req, res) {
    const { email, password } = req.body;
    const token = uuidV4();

    try {
        const userExist = await userCollection.findOne({ email })
        //console.log(userExist)
        if(!userExist){
            res.sendStatus(401)
            return
        }
        const passwordOk = bcrypt.compareSync(password, userExist.password);
        //console.log(passwordOk)
        if(!passwordOk){
            res.sendStatus(401)
            return
        }
        await sessionsCollection.insertOne({
            token,
            userId: userExist._id,
        })

        //console.log(token)
        res.send({token})
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}
