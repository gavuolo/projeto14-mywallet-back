import express from "express";
import cors from "cors";
import nodemon from "nodemon";
import dotenv from "dotenv"

import joi from "joi";

import { MongoClient } from "mongodb";
import usersRoutes from "./routes/users.routes.js"

const app = express()
app.use(express.json())
app.use(cors())
app.use(usersRoutes)
dotenv.config()

//validação joi

app.listen(5000, () => console.log('Listening on port 5000...'))