import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    isDraft: z.boolean(),
    date: z.date(),
  }),
});

export const collections = {
  blog: blogCollection,
  short: blogCollection,
};
