export default {
    name: "press",
    title: "Press",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "link",
            type: "url",
        },
        {
            name: "subtitle",
            type: "text",
        },

        {
            name: "image",
            title: "Press Image",
            type: "image",
        }
    ],

    preview: {
        select: {
            title: 'title',
            media: 'image'
        },
    }

}