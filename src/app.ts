import express from "express";
import cors from "cors"

import dotenv from "dotenv"

import bodyParser from "body-parser";
import IndexController from "./controllers/indexController";

dotenv.config();
const env = process.env;

const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure express-fileuploads


app.use(
  cors({
    credentials: true,
    origin: [""],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use("/api/v0", IndexController);

export default app;