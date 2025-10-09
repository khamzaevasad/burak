import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URL as string)
  .then((data) => {
    console.log("MongoDB connect succed");
    const PORT = process.env.PORT ?? 3003;
  })
  .catch((err) => {
    console.log("Error on connection MongoDB", err);
  });

// mongoose@6.2.9 mongodb@3.2.6 express@4.17.3  @types/express@4.17.3 -D ejs@3.1.6
