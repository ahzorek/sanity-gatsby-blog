import React from 'react'
import Figure from './Figure'
import MovieReview from './movie-review'
import TvReview from './tv-review'


const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage: Figure,
    bodyImage: Figure,
    movieID:  MovieReview,
    tvID: TvReview
  }
}

export default serializers
