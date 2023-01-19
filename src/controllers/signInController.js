import { userCollection } from "../database/db.js";

export async function postSignIn(req, res) {
  const { email, password } = req.body;
  const body = {
    email,
    password,
  }
  res.send(body)
}