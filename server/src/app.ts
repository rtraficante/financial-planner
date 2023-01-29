import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () =>
  console.log(`Server Listening on PORT: ${process.env.PORT}`)
);
