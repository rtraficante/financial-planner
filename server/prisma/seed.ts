import { db } from "../src/utils/db.server";

type Purchase = {
  name: string;
  description?: string;
  amount: number;
};

type Category = {
  name: string;
};

async function seed() {
  await Promise.all(
    getPurchases().map((purchase) => {
      return db.purchase.create({
        data: {
          name: purchase.name,
          description: purchase.description,
          amount: purchase.amount,
        },
      });
    })
  );
  const purchase = await db.purchase.findFirst({
    where: {
      name: "Chipotle",
    },
  });

  await Promise.all(
    getCategories().map(({ name }) => {
      return db.category.create({
        data: {
          name,
          purchaseId: purchase.id,
        },
      });
    })
  );
}

seed();

function getPurchases(): Purchase[] {
  return [
    {
      name: "Chipotle",
      description: "lunch burrito bowl",
      amount: 12.99,
    },
    {
      name: "HBO Max",
      description: "subscription",
      amount: 10.99,
    },
    {
      name: "Reese's",
      description: "snack",
      amount: 3.99,
    },
  ];
}

function getCategories(): Category[] {
  return [
    {
      name: "Food",
    },
    {
      name: "Subscription",
    },
  ];
}
