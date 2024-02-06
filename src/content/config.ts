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

const profileSchema = z.object({
  title: z.string(),
  group: z.string(),
  sequence: z.number(),
});

const profileCollection = defineCollection({
  type: "content",
  schema: profileSchema,
});

export const collections = {
  posts: blogCollection,
  shorts: blogCollection,
  profile: profileCollection,
};
