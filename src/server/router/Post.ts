import { createRouter } from "./context";
import { z } from "zod";
import { prisma } from "../db/client";

export const PostRouter = createRouter().query("get-all-posts", {
  input: z.object({ text: z.string().nullish() }).nullish(),
  async resolve() {
    const posts = await prisma.post.findMany();
    return posts;
  },
});
