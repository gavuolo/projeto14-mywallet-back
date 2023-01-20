import { userCollection } from "../database/db.js";
import bcrypt from "bcrypt";

export async function postSignUp(req, res) {
  const { name, email, password } = req.body;
  const teste = res.locals
  console.log(teste)
  try {
    const userExist = await userCollection.findOne({ email: email });
    
    if (userExist) {
      return res.status(409).send("Este e-mail já foi cadastrado!");
    }
    const hashPassword = bcrypt.hashSync(password, 10);

    await userCollection.insertOne({ name, email, password: hashPassword });
    res.status(201).send("Cadastrado");
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}