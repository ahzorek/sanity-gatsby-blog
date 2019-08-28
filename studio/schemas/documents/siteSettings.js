export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Configurações do Site',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Título'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Descrição',
      description: 'Descrição do site que vai ser indexada em buscadores e redes sociais.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Palavras-chave para o site.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Autores',
      to: [{type: 'author'}]
    }
  ]
}
