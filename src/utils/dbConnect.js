import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(
      "mongodb+srv://soum-ik:fontendDeveloper@cluster1.ncv8dak.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    connection.isConnected = db.connections[0].readyState === 1;
    console.log(
      connection.isConnected
        ? "Connected to MongoDB"
        : "Failed to connect to MongoDB"
    );
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
}

export default dbConnect;
