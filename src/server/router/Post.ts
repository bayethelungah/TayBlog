import { createRouter } from "./context";
import { z } from "zod";
import { prisma } from "../db/client";
import { resolve } from "path/posix";

export const PostRouter = createRouter()
  .query("get-all-posts", {
    input: z.object({ text: z.string().nullish() }).nullish(),
    async resolve() {
      const posts = await prisma.post.findMany();
      return posts;
    },
  })
  .mutation("create-post", {
    input: z.object({
      author: z.string().min(5).max(100),
      body: z.string().min(5).max(100),
      title: z.string().min(5).max(100),
      User: z.object({
        name: z.string().nullish(),
        email: z.string().nullish(),
        image: z.string().nullish(),
      }),
    }),
    async resolve({ input }) {
      await prisma.post.create({
        data: {
          author: input.author,
          body: input.body,
          title: input.title,
        },
      });
    },
  })
  .mutation("delete-post", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      await prisma.post.delete({
        where: { id: input.id },
      });
    },
  });
