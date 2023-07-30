const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/MobileDataTerminal"; // Replace with your database name

MongoClient.connect(url, function (err, client) {
  if (err) {
    console.error("Failed to connect to MongoDB:", err);
    return;
  }

  const collection = client.db().collection("Unit");

  console.log(collection);

  client.close();
});
