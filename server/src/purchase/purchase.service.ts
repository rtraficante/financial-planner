import { db } from "../utils/db.server";

type Purchase = {
  id: number;
  name: string;
  description: string | null;
  amount: number;
};

export const listPurchases = async (): Promise<Purchase[]> => {
  return db.purchase.findMany();
};

export const getPurchase = async (id: number): Promise<Purchase | null> => {
  return db.purchase.findUnique({
    where: {
      id,
    },
  });
};

export const addPurchase = async (
  purchase: Omit<Purchase, "id">
): Promise<Purchase> => {
  const { name, description, amount } = purchase;
  return db.purchase.create({
    data: {
      name,
      description,
      amount,
    },
  });
};
