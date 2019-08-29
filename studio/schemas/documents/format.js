export default {
    name: 'viewFormat',
    type: 'document',
    title: 'Formatos de Visualização',
    fields: [
      {
        name: 'title',
        type: 'string',
        description: 'Modelo de exibição que será adotado para o artigo.',
        title: 'Nome'
      },
      {
        name: 'viewFormat',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
          maxLength: 96
        }
      }
    ]
  }