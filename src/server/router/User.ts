import { createRouter } from "./context";
import { z } from "zod";
import { prisma } from "../db/client";
import jwt from "jsonwebtoken";

export const UserRouter = createRouter()
  .mutation("create-user", {
    input: z.object({
      fullName: z.string().min(5).max(20),
      email: z.string().email().min(5),
      password: z.string().min(5).max(20),
      username: z.string().min(5).max(20),
    }),
    async resolve({ input }) {
      await prisma.user.create({
        data: {
          fullname: input.fullName,
          username: input.username,
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
      let res = await prisma.user.findUnique({
        where: {
          email: input.email,
        },
      });
      if (!res || res.password !== input.password)
        return {
          token: null,
          username: null,
          fullName: null,
          error: !res ? "User Does Not Exist" : "Password is Incorrect",
        };

      return {
        token: jwt.sign(input.email, "secretkey"),
        username: res.username,
        fullName: res.fullname,
        error: null,
      };
    },
  });
