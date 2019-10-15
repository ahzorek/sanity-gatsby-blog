export default {
    name: 'tvID',
    type: 'object',
    title: 'Box Série',
    fields: [
        {
          name: 'id',
          type: 'string',
          title: 'ID da série no TMDB'
        },
        {
            name: 'rating',
            type: 'number',
            title: 'Avaliação do Review',
            description: 'Nota em números de 0 a 10',
        }

      ]
}