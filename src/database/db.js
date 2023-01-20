import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try{
    await mongoClient.connect()
    console.log("Database is connected")
} catch (err){
    console.log(err)
}

const db = mongoClient.db("MyWallet")
export const userCollection = db.collection('users');
export const sessionsCollection = db.collection('sessions');