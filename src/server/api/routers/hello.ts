import { z } from 'zod';

import {
  createTRPCRouter,
  publicProcedure,
} from "@/server/api/trpc";


export const helloRouter = createTRPCRouter({
  jason:publicProcedure
    .input(z.object({text:z.string() }))
    .query(({ input }) => {
      return {
        message: `Hello ${input.text}`,
      }
    })
    });

