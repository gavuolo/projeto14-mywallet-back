import { userCollection } from "../database/db.js";
import { v4 as uuidV4 } from "uuid";

export async function postSignIn(req, res) {
  const { email, password } = req.body;
  const body = {
    email,
    password,
  }
  
  res.send(body)
}