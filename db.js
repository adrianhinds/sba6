import { MongoClient } from 'mongodb';
import 'dotenv/config';
const connectionString = process.env.ATLAS_URI || ""
const client = new MongoClient(connectionString)
let conn;
try {
    conn = await client.connect()
    console.log('Connected to MongoDb')
} catch (error) {
    console.log(error);
}
 let db = conn.db("sample_restaurants");
export default db;