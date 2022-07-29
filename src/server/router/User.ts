import { createRouter } from "./context";
import { z } from "zod";
import { prisma } from "../db/client";

export const UserRouter = createRouter().query("get-user", {
  input: z.object({
    email: z.string(),
  }),
  async resolve({ input }) {
    return await prisma.user.findUnique({
      where: { email: input.email },
    });
  },
});
