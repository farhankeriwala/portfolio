import {defineField, defineType} from 'sanity';

export const experienceType = defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'position',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'company',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'companyLogo',
            type: 'image',
        }),
        defineField({
            name: 'startDate',
            type: 'date',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'endDate',
            type: 'date',
        }),
        defineField({
            name: 'description',
            type: 'text',
            validation: (rule) => rule.required(),
        }),
    ]
});