import { rest } from "msw";
import { inventory, currency } from "./db";

export const handlers = [
  rest.get("/inventory", async (req, res, ctx) => {
    const content = await inventory;
    return res(ctx.status(200), ctx.json(content));
  }),
  rest.get("/currency", async (req, res, ctx) => {
    const content = await currency;
    return res(ctx.status(200), ctx.json(content));
  }),
];
