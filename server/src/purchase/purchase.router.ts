import express from "express";
import type { Request, Response } from "express";

import {
  listPurchases,
  getPurchase,
  addPurchase,
} from "../purchase/purchase.service";

export const purchaseRouter = express.Router();

purchaseRouter.get("/", async (_, res: Response) => {
  try {
    const purchases = await listPurchases();
    return res.status(200).json(purchases);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
});

purchaseRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const purchase = await getPurchase(id);
    return res.status(200).json(purchase);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
});

purchaseRouter.post("/", async (req: Request, res: Response) => {
  try {
    const purchase = req.body;
    const newPurchase = await addPurchase(purchase);

    return res.status(201).json(newPurchase);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
});
