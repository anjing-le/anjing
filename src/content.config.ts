import { defineCollection, z } from 'astro:content';

const knowledge = defineCollection({
  type: 'content',
  schema: z.object({
    hub: z.string(),
    domain: z.string(),
    title: z.string(),
    summary: z.string(),
    type: z.enum(['doc', 'video']),
    draft: z.boolean().default(false),
    mdPath: z.string().optional(),
    coverUrl: z.string().optional(),
    externalUrl: z.string().optional(),
    embedUrl: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    hub: z.string().optional(),
    title: z.string(),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  knowledge,
  projects,
};
