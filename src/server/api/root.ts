import { postRouter } from "@/server/api/routers/post";
import { createTRPCRouter } from "@/server/api/trpc";
import { helloRouter } from "./routers/hello";
import { userRouter } from "./routers/user";
import { awesomeRouter } from "./routers/awesome";
import { adminRouter } from "./routers/admin";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  hello:helloRouter,
  user:userRouter,
  awesome:awesomeRouter,
  admin:adminRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
