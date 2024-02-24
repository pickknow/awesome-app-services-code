import { z } from 'zod';

import {
  createTRPCRouter,
  protectedProcedure,
} from "@/server/api/trpc";


export const adminRouter = createTRPCRouter({
  all: protectedProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        message: `Hello ${input.text}`,
      }
    }),
});


