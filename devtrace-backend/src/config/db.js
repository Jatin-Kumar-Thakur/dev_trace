import mongoose from 'mongoose';

const connectDB = async (mongoUri) => {
  try {
    await mongoose.connect(mongoUri || process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;

// db.js
// import mongoose from "mongoose";

// const connectDB = async (mongoUri) => {
//   try {
//     if (!mongoUri) {
//       throw new Error("MongoDB URI is required");
//     }
//     await mongoose.connect(mongoUri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("✅ MongoDB connected");
//   } catch (err) {
//     console.error("❌ MongoDB connection error:", err.message);
//     process.exit(1);
//   }
// };

// export default connectDB;

