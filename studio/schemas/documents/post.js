import {format} from 'date-fns'

export default {
  name: 'post',
  type: 'document',
  title: 'Artigo',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Título',
      validation: Rule => [
        Rule.required().min(20).error(`Um título de no minimo 25 caracteres é necessário. Entre 40 e 65 é o ideal.`),
        Rule.max(66).warning('Talvez seja grande demais. Se puder reduzir.'),
        Rule.max(90).error(`Muito grande. A partir de agora a slug não pode ser gerada.`),
      ] 
    },
    {
      name: 'stylizedTitle',
      type: 'titlePortableText',
      title: `Título 'estilizado'`
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 90
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Data de publicação',
      description: 'Pode ser usado para agendar publicações no futuro.',
      options: {
        calendarTodayLabel: 'Agora',
        timeStep: 1
      }
    },
    {
      title: 'Foi Atualizado?',
      name: 'isUpdated',
      type: 'boolean',
      hidden: false,
      description: 'Determina se houve atualização no artigo após a publicação e adiciona a informação junto da data.',
      options: {
          isHighlighted: true
      }
    },
    {
      name: "coverFormat",
      title: 'Formato da capa usada no artigo',
      type: "string",
      options: {
        list: [
          { title: "Capa com video", value: "videoCover" },
          { title: "Capa básica", value: "basic" },
          { title: "Capa em meia página", value: "halfCover" },
          { title: "Capa página cheia", value: "fullCover" },
          { title: `Capa estilo joarnal 'NYT'`, value: "simpleCover" }
        ],
        layout: "checkbox"
      },
      validation: Rule => Rule.error('Precisa ser selecionado.').required()
    },
    // {
    //   name: 'viewFormat',
    //   title: 'Formato de capa para o artigo.',
    //   type: 'reference',
    //   to: {
    //     type: 'viewFormat'
    //   }
    // },
    {
      name: 'videoCoverURL',
      type: 'url',
      title: 'URL para Capa com Video (caso selecionada)'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Imagem de Capa'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Resumo',
      description:
        'Será usado para SEO e redes sociais.'
    },
    {
      name: 'authors',
      title: 'Autores',
      type: 'array',
      of: [
        {
          type: 'authorReference'
        }
      ]
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category'
          }
        }
      ]
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Corpo'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Palavras-chave para o post. Usado em SEO e na organização do site, possivelmente. Adicione a palavra e pressione "Enter/Return" para confirmar.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare ({title = 'Sem título', publishedAt, slug = {}, media}) {
      const dateSegment = format(publishedAt, 'MM/YYYY')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Falta uma data para a publicação'
      }
    }
  }
}
