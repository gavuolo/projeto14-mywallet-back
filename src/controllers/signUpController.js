import { userCollection } from "../database/db.js";

export async function postSignUp(req, res) {
  const { name, email, password } = req.body;
  const body = {
    name,
    email,
    password,
  };
  try {
    await userCollection.insertOne(body);
    res.status(201).send("Cadastrado");
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}