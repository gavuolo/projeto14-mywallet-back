import { sessionsCollection, userCollection } from "../database/db.js";
import { v4 as uuidV4 } from "uuid";
import bcrypt from "bcrypt";

export async function postSignIn(req, res) {
  const { email, password } = req.body;
  const token = uuidV4()
  console.log(token)
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
      user: userExist._id
    })
    res.status(201).send({token, userExist})
  }catch (err){
    console.log(err)
    res.sendStatus(500)
  }
}