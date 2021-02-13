export default {
    name: "farm",
    type: "document",
    title: "Farm Page",
    __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
    fields: [

        {
            name: "title",
            type: "string"
        },
        {
            name: "heroImages",
            title: "Hero Images",
            type: "images"
        },
        {
            name: "body",
            type: "richText"
        },
        {
            name: "seo",
            title: 'SEO | Search Engine Optimization',
            type: "seo",
        },

    ]
}