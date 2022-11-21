import { schemaSignUp } from "../index.js"
import { userCollection } from "../DataBase/db.js"
import bcrypt from "bcrypt"

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

// export async function signIn(req, res) {
//     const { email, password } = req.body;
//     try {
//         await userCollection.findOne({ email, password })
//         res.sendStatus(201)
//     }
//     catch (error) {
//         console.log(error)
//         res.sendStatus(500)
//     }
// }