import {defineField, defineType} from 'sanity';
export const educationType = defineType({
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        defineField({
            name: 'institution',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'degree',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'logo',
            type: 'image',
        }),
        defineField({
            name: 'grades',
            type: 'string',
        }),
        defineField({
            name: 'fieldsOfStudy',
            type: 'array',
            of: [{type: 'string'}],
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
})