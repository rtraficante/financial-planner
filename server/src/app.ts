import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import { purchaseRouter } from "./purchase/purchase.router";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/purchases", purchaseRouter);

app.listen(PORT, () => console.log(`Server Listening on PORT: ${PORT}`));
