import express from "express";
import cors from "cors";
import nodemon from "nodemon";
import dotenv from "dotenv"

import { MongoClient } from "mongodb";


const mongoClient = new MongoClient(process.env.MONGO_URI)

const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()

app.listen(5000, () => console.log('Listening on port 5000...'))