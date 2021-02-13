import S from '@sanity/desk-tool/structure-builder'
import { AiFillSetting, AiFillFile } from "react-icons/ai";
import { MdSmokeFree } from "react-icons/md"


export default () =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Site Settings')
                .icon(AiFillSetting)
                .child(
                    S.document()
                        .schemaType('siteSettings')
                        .documentId('siteSettings')
                ),
            S.listItem()
                .title('Farm Page')
                .icon(AiFillFile)
                .child(
                    S.document()
                        .schemaType('farm')
                        .documentId('farm')
                ),
            S.listItem()
                .title('Products Page')
                .icon(AiFillFile)
                .child(
                    S.document()
                        .schemaType('productsPage')
                        .documentId('productsPage')
                ),
            S.divider(),



            ...S.documentTypeListItems().filter(listItem => !['farm', 'siteSettings', 'productsPage', 'media.tag'].includes(listItem.getId()))
        ]
        )