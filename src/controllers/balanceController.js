import { balanceCollection, sessionsCollection } from "../database/db.js";
import { v4 as uuidV4 } from "uuid";
import bcrypt from "bcrypt";
import dayjs from "dayjs";

export async function postBalance(req, res) {
  const { description, value, type } = req.body;
  const { authorization } = req.headers;
  const data = dayjs().format("DD/MM");
  const token = authorization?.replace("Bearer ", "");
  const user = await sessionsCollection.findOne({ token });
  console.log(user.user)
  await balanceCollection.insertOne({
    value,
    description,
    type,
    user: user.user,
    data: data,
  })
  if (token === undefined || token === null) {
    return res.status(400).send("token inválido");
  }

  res.sendStatus(201);
}
export async function getBalance(req, res){
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  try{
    const user = await sessionsCollection.findOne({ token });
    let userId = user.user
    console.log(user)
    const transations =  await balanceCollection.find({ user: userId }).toArray()
    res.status(200).send(transations)
  } catch (err){
    console.log(err)
    res.sendStatus(500)
  }
}