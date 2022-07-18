import { createRouter } from "./context";
import { z } from "zod";
import { prisma } from "../db/client";
import jwt from "jsonwebtoken";

export const UserRouter = createRouter()
  .mutation("create-user", {
    input: z.object({
      name: z.string().min(5).max(20),
      email: z.string().email().min(5),
      password: z.string().min(5).max(20),
    }),
    async resolve({ input }) {
      await prisma.users.create({
        data: {
          fullname: input.name,
          email: input.email,
          password: input.password,
        },
      });
    },
  })
  .mutation("login-user", {
    input: z.object({
      email: z.string().email().min(5),
      password: z.string().min(5).max(20),
    }),
    async resolve({ input }) {
      let res = await prisma.users.findUnique({
        where: {
          email: input.email,
        },
      });

      if (!res) return { token: null };
      return {
        token: jwt.sign(input.email, "secretket"),
      };
    },
  });
