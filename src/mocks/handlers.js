import { rest } from "msw";
import { inventory } from "./db";

export const handlers = [
  rest.get("/inventory", async (req, res, ctx) => {
    const content = await inventory;
    return res(ctx.status(200), ctx.json(content));
  }),
];
