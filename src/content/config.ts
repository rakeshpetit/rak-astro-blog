import { z, defineCollection } from "astro:content";

const schema = z.object({
  title: z.string(),
  isDraft: z.boolean(),
  date: z.string(),
});

const blogCollection = defineCollection({
  type: "content",
  schema,
});

export const collections = {
  posts: blogCollection,
  shorts: blogCollection,
};
