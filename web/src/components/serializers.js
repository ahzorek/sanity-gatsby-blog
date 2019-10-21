import React from 'react'
import Figure from './Figure'
import MovieReview from './MovieReview'
import TvReview from './TvReview'

const VideoEmbed = (props) => <div>Bloco de video aqui</div>


const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage: Figure,
    bodyImage: Figure,
    movieID:  MovieReview,
    tvID: TvReview,
    videoSource: VideoEmbed
  },
  marks: {
    sup: ({children}) => <sup>{children[0]}</sup>
  }
}

export default serializers
