import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL);

try{
    await mongoClient.connect()
    console.log("Database is connected")
} catch (err){
    console.log(err)
}

const db = mongoClient.db()
export const userCollection = db.collection('users');
export const sessionsCollection = db.collection('sessions');
export const balanceCollection = db.collection('balance');