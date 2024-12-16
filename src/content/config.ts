import { defineCollection, z } from "astro:content";

const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string().url(),
    readtime: z.number(),
    description: z.string(),
  }),
});

export const collections = { 'about': aboutCollection };
