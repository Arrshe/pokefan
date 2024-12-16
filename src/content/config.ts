import { defineCollection, z } from "astro:content";

const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    readtime: z.number(),
    description: z.string(),
  }),
});

export const collections = { about };
