import { BsFillImageFill } from 'react-icons/Bs'

export default {
    name: "richText",
    title: "Rich text",
    type: 'array',
    of: [{ type: 'block' }, { type: 'image', icon: BsFillImageFill }]
}