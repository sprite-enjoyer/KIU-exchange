import { MongoClient, ServerApiVersion } from 'mongodb';


const uri = process.env.DATABASE_URL ?? "";
const client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });
client.connect().catch(e => console.log(e)).then(() => console.log("success"));