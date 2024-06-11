const { MongoClient } = require('mongodb');
const {mongoose} = require('mongoose')
async function connectToMongoDB() {
  const uri = "mongodb+srv://sadafhameed:mern123@cluster0.fsvtyip.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  const client = new MongoClient(uri);

  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected successfully to MongoDB!");
    return client; // Return the connected client
  } catch (err) {
    console.error('Error connecting to MongoDB: ', err);
    throw err; // Throw the error to handle it in the caller
  }
}

module.exports = connectToMongoDB; // Export the connection function
