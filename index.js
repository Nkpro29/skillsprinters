import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();

import userRouter from "./routes/userRoutes.js";
import jobRouter from "./routes/jobRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => [console.log("\x1b[32mDB is connected successfully.\x1b[0m")])
  .catch((err) => {
    console.log("\x1b[31mDB connection failed !!\x1b[0m", err);
  });

app.use("/users", userRouter);
app.use("/jobs", jobRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`\x1b[33mapp is running on port ${port}.\x1b[0m`);
});
