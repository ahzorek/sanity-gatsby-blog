export default {
    name: 'movieID',
    type: 'object',
    title: 'Movie Review',
    fields: [
        {
          name: 'id',
          type: 'string',
          title: 'ID do filme no TMDB'
        },
        {
            name: 'rating',
            type: 'number',
            title: 'Avaliação do Review',
            description: 'Nota em números de 0 a 10',
        }

      ]
}