export default {
    name: 'seo',
    type: 'object',
    title: 'SEO | Search Engine Optimization',
    description: 'Click to Expand',
    options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
    },

    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'Title that shows up on Google & Social Media'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            description: 'Describe your page for search engines and social media.'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Open Graph Image',
            description: 'Image that shows up on Social Media eg. Twitter'
        },
        {
            name: 'keywords',
            type: 'array',
            title: 'Keywords',
            description: 'Add keywords that describes your website.',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        },

    ]
}
