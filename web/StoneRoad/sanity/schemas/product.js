export default {
    name: "product",
    type: "document",
    title: "Products",
    fields: [
        {
            name: "name",
            title: "Product Name",
            type: "string",
            validation: Rule => Rule.required(),

        },
        {
            name: "isVisible",
            title: "Is Visible on Site",
            type: "boolean",
        },
        {
            name: "properUrl",
            title: "Proper URL",
            // description: "eg: '3.54G Jar' ",
            type: "url",
            // validation: Rule => Rule.required(),
        },
        {
            name: "category",
            title: "Category",
            type: "reference",
            to: [{
                type: "category"
            }],
        },
        {
            name: "images",
            title: "Images",
            type: "images",
        },
        {
            name: "netWeight",
            title: "Net Weight",
            description: "eg: '3.54G Jar' ",
            type: "text",
            validation: Rule => Rule.required(),
        },
        {
            name: "ingredients",
            description: "eg: 'INGR: 2.75g flower, 0.75g artisanal hashish'",
            type: "text",
            validation: Rule => Rule.required(),
        },
        {
            name: "description",
            description: "eg: 'Our first love. reserve flower that’s slow cured and hand trimmed. plastic free packaging'",
            type: "text",
            validation: Rule => Rule.required(),
        },
    ],
    initialValue: {
        isVisible: true
    },
    preview: {
        select: {
            title: 'name',
            media: 'images.0'
        },
        // prepare(selection) {
        //     const { title, media } = selection
        //     return {
        //         title: title,
        //         media: `Directed by: ${director ? director : 'unknown'}`
        //     }
        // }
    }

}