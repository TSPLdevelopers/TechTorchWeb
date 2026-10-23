
const mongoose = require("mongoose");

// Vercel (serverless) me connection ko reuse karne ke liye cache
let cached = global._mongoose;
if (!cached) cached = global._mongoose = { conn: null, promise: null };

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;

    if (!uri) {
      throw new Error("MONGO_URI is missing in .env file");
    }

    // Connect using the database name from MONGO_URI
    await mongoose.connect(uri);

    console.log("✅ MongoDB Connected Successfully");
    console.log(
      "Actually Connected Database:",
      mongoose.connection.name
    );
    console.log("MongoDB Host:", mongoose.connection.host);
    console.log("MongoDB Port:", mongoose.connection.port);

  } catch (error) {
    console.error(
      "❌ MongoDB Connection Failed:",
      error.message
    );
    process.exit(1);
  }
};

module.exports = { connectDB };
