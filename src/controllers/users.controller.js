import { schemaSignUp } from "../index.js"
import { userCollection , sessionsCollection} from "../DataBase/db.js"
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
        await userCollection.insertOne({...user, password: hashPassword});
        res.sendStatus(201)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

}

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