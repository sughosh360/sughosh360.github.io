import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const books = defineCollection({
  loader: file('src/data/books.json'),
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    url: z.url(),
    status: z.enum(['reading', 'read', 'next']),
  }),
});

const projects = defineCollection({
  loader: file('src/data/projects.json'),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    url: z.url(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { books, projects };
