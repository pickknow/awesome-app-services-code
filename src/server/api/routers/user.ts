import { z } from 'zod';

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";


export const userRouter = createTRPCRouter({
  allUsers:publicProcedure
    .query(({ ctx }) => {
      return ctx.db.user.findMany();
    }),
  });

