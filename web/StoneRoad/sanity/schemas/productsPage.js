export default {
    name: "productsPage",
    type: "document",
    title: "Products Page",
    // __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
    fields: [
        {
            name: "title",
            type: "string",
            hidden: true,
        },
        {
            name: "products",
            type: "array",
            options: {
                layout: 'list',
                editModal: 'fullScreen',
            },
            of: [{
                type: 'reference',
                to: [{ type: 'product' }]
            }],
            validation: Rule => Rule.unique(),
        },
        {
            name: "seo",
            title: 'SEO | Search Engine Optimization',
            type: "seo",
        },
    ],
    initialValue: {
        title: 'Products Page'
    }
}