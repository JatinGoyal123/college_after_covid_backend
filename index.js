import path from "path";
import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: "./config/config.env" });
import Users from "./routes/users.js";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", Users);
const MONGO_URI =
  "mongodb+srv://jatingoyal24:jatingoyal30694@cluster0.bmhzl.mongodb.net/college_after_covid";
const PORT = 5000;
mongoose
  .connect(MONGO_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(
    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}!`);
    })
  );
