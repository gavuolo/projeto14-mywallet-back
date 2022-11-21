import dotenv from "dotenv"

import { MongoClient } from "mongodb";

dotenv.config()
console.log(process.env.MONGO_URI)
const mongoClient = new MongoClient(process.env.MONGO_URI)
const db = mongoClient.db("MyWallet")

try{
    await mongoClient.connect()
    console.log("Conectado")
} catch (err){ 
    console.log(err)
}

export const userCollection = db.collection("users");
export const sessionsCollection = db.collection("sessions")