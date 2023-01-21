import { balanceCollection, sessionsCollection } from "../database/db.js";
import { v4 as uuidV4 } from "uuid";
import bcrypt from "bcrypt";
import dayjs from "dayjs";

export async function postBalance(req, res) {
  const { description, value, type } = req.body;
  const { authorization } = req.headers;
  const data = dayjs().format("DD/MM/YYYY");
  const token = authorization?.replace("Bearer ", "");
  const user = await sessionsCollection.findOne({ token });

  await balanceCollection.insertOne({
    value,
    description,
    type,
    user: user,
    data: data,
  })
  console.log(user)
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
    const transations = await balanceCollection.findOne({user})
    console.log(user)
    console.log(transations)
    res.send('ok')
  } catch (err){
    console.log(err)
    res.sendStatus(500)
  }
}