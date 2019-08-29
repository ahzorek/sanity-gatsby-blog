export default {
    name: 'bodyImage',
    type: 'image',
    title: 'Imagem de Corpo',
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
      },
      {
        title: 'Imagem em Largura Total',
        name: 'isFullWidth',
        type: 'boolean',
        hidden: false,
        description: 'Define se a imagem será exibida na largura total do dispositivo ou se será limitada ao layout do corpo do texto. Ideal para imagens panorâmicas.',
        options: {
            isHighlighted: true
        }
      },
      {
        title: 'Mostrar Legenda',
        name: 'showCaption',
        type: 'boolean',
        hidden: false,
        description: 'Define se a legenda será exibida logo embaixo da imagem.',
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