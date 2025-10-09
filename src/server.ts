import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connection succed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, () => {
      console.log(
        `The is server is running successfuly on port: http://localhost:${PORT}`
      );
    });
  })
  .catch((err) => {
    console.log("Error on connection MongoDB", err);
  });
