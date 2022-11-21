import {schemaSignUp} from "../index.js"
import {userCollection} from "../DataBase/db.js"

export async function signUp(req, res){
    const user = req.body;

    const validation = schemaSignUp.validate(user)
    if(validation.error){
        return res.sendStatus(422);
    }

    try {
        await userCollection.insertOne(user);
        res.sendStatus(201)
  
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }

}