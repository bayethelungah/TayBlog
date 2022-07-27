// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { PostRouter } from "./Post";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("PostRouter.", PostRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
