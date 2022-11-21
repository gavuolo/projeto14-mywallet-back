import express from "express";
import cors from "cors";
import nodemon from "nodemon";
import dotenv from "dotenv"

import joi from "joi";
import bcrypt from "bcrypt"
import { v4 as uuidV4 } from "uuid";

import { MongoClient } from "mongodb";
import usersRoutes from "./routes/users.routes.js"

const app = express()
app.use(express.json())
app.use(cors())
app.use(usersRoutes)
dotenv.config()

//validação joi
export const schemaSignUp = joi.object({
    name: joi.string().required().min(3).max(100),
    password: joi.string().required(),
    email: joi.string().email().required(),
  });

export const schemaSignIn = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
})


app.listen(5000, () => console.log('Listening on port 5000...'))