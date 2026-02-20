import { z, defineCollection } from "astro:content";

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
  profile: profileCollection,
};
