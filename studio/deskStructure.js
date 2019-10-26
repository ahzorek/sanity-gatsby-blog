import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdPerson from 'react-icons/lib/md/person'
//import MdTab from 'react-icons/lib/md/tab'
import MdLibraryBooks from 'react-icons/lib/md/library-books'
import MdStyle from 'react-icons/lib/md/style'
//import MdVignette from 'react-icons/lib/md/vignette'
import IoIosMdFlask from 'react-icons/lib/io/ios-flask'

const hiddenDocTypes = listItem =>
  !['viewFormat', 'testEnv','category', 'author', 'post', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Conteúdo')
    .items([
      S.listItem()
        .title('Configurações')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Artigos')
        .icon(MdLibraryBooks)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Artigos')),
      S.listItem()
        .title('Autores')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Autores')),
      S.listItem()
        .title('Categorias')
        .icon(MdStyle)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categorias')),
      // S.listItem()
      //   .title('Formatos de Capa')
      //   .icon(MdVignette)
      //   .schemaType('viewFormat')
      //   .child(S.documentTypeList('viewFormat').title('Capas')),
      S.listItem()
        .title('Ambiente de Testes **')
        .icon(IoIosMdFlask)
        .schemaType('testEnv')
        .child(S.documentTypeList('testEnv').title('Testes')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
