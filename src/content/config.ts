import { defineCollection, z } from 'astro:content';

const projectCollection = defineCollection({ 
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        link: z.string(),
        technologies: z.array(z.string()),
        image: z.string(),
    })
 });

export const collections = {
  'project': projectCollection,
};