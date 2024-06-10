import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  tls: true,
  tlsAllowInvalidCertificates: true,
});

export default client;

export async function connDB() {
    try {
        await client.connect();
        console.log(`Successfully connected to Database ✨`);
    } catch (error) {
        console.log(`Error occurred while connecting to Database ❌`);
        console.log(error);
    }
}
