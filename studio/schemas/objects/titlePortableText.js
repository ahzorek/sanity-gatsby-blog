export default {
    name: 'titlePortableText',
    type: 'array',
    title: `Título 'estilizado'`,
    of: [
      {
        type: 'block',
        title: 'Block',
        styles: [
            {title: 'H1', value: 'h1'}
        ],
        lists: [],
        marks: {
          decorators: [
            {title: 'Strong', value: 'strong'},
            {title: 'Emphasis', value: 'em'},
          ],
          annotations: []
        }
      }
    ]
  }
  