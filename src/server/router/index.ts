// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { UserRouter } from "./User";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("UserRouter.", UserRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
