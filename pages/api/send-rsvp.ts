// /api/send-rsvp
// import { MongoClient } from "mongodb";
import { connectToDatabase } from "../../lib/mongodb";

async function handler(request: any, response: any) {
  if (request.method === "POST") {
    const data = request.body;

    try {
      const client = await connectToDatabase();
      const db = client.db;
      const rsvpCollection = db.collection("rsvp");
      const result = await rsvpCollection.insertOne(data);
      console.log(result);
      client.client.close();

      response.status(201).json({ message: "rsvp sent!" });
    } catch (error) {
      response
        .status(500)
        .json({ message: "Something went wrong when sengin the rsvp!" });
    }
  }
}
export default handler;
