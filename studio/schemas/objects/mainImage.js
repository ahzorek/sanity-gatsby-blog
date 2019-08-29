export default {
  name: 'mainImage',
  type: 'image',
  title: 'Imagem',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Legenda',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Texto Alternativo',
      description: 'Importante para SEO e acessibilidade da página.',
      validation: Rule => Rule.error('Você precisa preencher o Texto Alt.').required(),
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
