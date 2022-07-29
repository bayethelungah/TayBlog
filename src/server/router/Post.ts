import { createRouter } from "./context";
import { z } from "zod";
import { prisma } from "../db/client";

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
      author: z.string(),
      body: z.string(),
      title: z.string(),
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
  });
