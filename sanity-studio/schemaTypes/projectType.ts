import {defineField, defineType} from 'sanity';

export const projectType = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        // Title of the project
        defineField({
            name: 'title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),

        // Description of the project
        defineField({
            name: 'description',
            type: 'text',
            validation: (rule) => rule.required(),
        }),

        // Slug for the project (based on title)
        defineField({
            name: 'slug',
            type: 'slug',
            options: {source: 'title'},
            validation: (rule) => rule.required(),
        }),

        // Images related to the project
        defineField({
            name: 'images',
            type: 'array',
            of: [{type: 'image'}],
        }),

        // Tech stack used for the project
        defineField({
            name: 'techStack',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {name: 'name', type: 'string'},
                        {name: 'image', type: 'image'},
                    ]
                }
            ],
        }),

        // Project features
        defineField({
            name: 'features',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {name: 'name', type: 'string'},
                        {name: 'description', type: 'text'},
                    ],
                },
            ],
        }),

        // URL of the project
        defineField({
            name: 'url',
            type: 'url',
        }),

        // GitHub URL of the project
        defineField({
            name: 'github',
            type: 'url',
        }),

        // Published date of the project (optional)
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
    ],
});