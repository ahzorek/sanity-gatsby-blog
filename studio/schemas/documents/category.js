export default {
  name: 'category',
  type: 'document',
  title: 'Categorias',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Título'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'catColor',
      title: 'Cor de Referencia',
      type: 'color',
      options: {
        disableAlpha: true
      }
    },
    {
      name: 'description',
      type: 'text',
      title: 'Descrição'
    }
  ]
}
