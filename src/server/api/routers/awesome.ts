import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
  adminProcedure,
} from "@/server/api/trpc";
import { makeTitleUrl } from "@/helps/func";

export const awesomeRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.db.awesome.findMany({
      orderBy: {
        id: "desc",
      },
    });
  }),
  show: publicProcedure
    .input(
      z.object({
        url: z.string().min(1),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.db.awesome.findFirst({
        where: { url: input.url },
      });
    }),
  findById: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.db.awesome.findFirst({
        where: { id: Number(input.id) },
      });
    }),
  findByTag: publicProcedure
    .input(
      z.object({
        tags: z.string().min(1),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.db.awesome.findMany({
        where: { tags: input.tags },
        orderBy: { id: "desc" },
      });
    }),
  create: adminProcedure
    .input(
      z.object({
        title: z.string().min(1),
        summary: z.string().min(1),
        tags: z.string().default("Android"),
        cover: z.string(),
        content: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const data = {
        title: input.title,
        url: makeTitleUrl(input.title),
        summary: input.summary,
        cover: input.cover,
        tags: input.tags,
        content: input.content,
      };
      return ctx.db.awesome.create({ data });
    }),
  edit: adminProcedure
    .input(
      z.object({
        id: z.number(),
        title: z.string().min(1),
        cover: z.string(),
        summary: z.string().min(1),
        tags: z.string().default("Android"),
        content: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.awesome.update({
        where: {
          id: input.id,
        },
        data: {
          title: input.title,
          url: makeTitleUrl(input.title),
          cover: input.cover,
          tags: input.tags,
          summary: input.summary,
          content: input.content,
        },
      });
    }),
  delete: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.awesome.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
