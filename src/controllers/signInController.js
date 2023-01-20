import { sessionsCollection, userCollection } from "../database/db.js";
import { v4 as uuidV4 } from "uuid";
import bcrypt from "bcrypt";

export async function postSignIn(req, res) {
  const { email, password } = req.body;
  const token = uuidV4()
  try{
    const userExist = await userCollection.findOne({ email });
    if(!userExist){
      return res.sendStatus(401);
    }
    const comparePassword = bcrypt.compareSync(password, userExist.password);
    if(!comparePassword){
      return res.sendStatus(401);
    }
    await sessionsCollection.insertOne({
      token, 
      userId: userExist._id
    })
    res.status(201).send({token})
  }catch (err){
    console.log(err)
    res.sendStatus(500)
  }
}