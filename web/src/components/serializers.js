import React from 'react'
import Figure from './Figure'
import MovieReview from './MovieReview'
import TvReview from './TvReview'


const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage: Figure,
    bodyImage: Figure,
    movieID:  MovieReview,
    tvID: TvReview
  },
  marks: {
    sup: ({children}) => <sup>{children[0]}</sup>
  }
}

export default serializers
