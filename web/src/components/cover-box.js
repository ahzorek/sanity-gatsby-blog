import React, {Component} from 'react'
import {StaticQuery, graphql, Link} from 'gatsby'
import styled from 'styled-components'
import {tmdb, getBlogUrl} from '../lib/helpers'

const Poster = styled.img`
  max-width: 200px;
  margin: 5px;
  border-radius: 2px;
  box-shadow: 0 0 20px 5px rgba(40, 40, 40, .2);
`
class Cover extends Component {
  state = { show: [] }
  
  componentWillMount(){
    const {id, tmdb, media} = this.props
    const path = media === 'tvID'? 'tv' : 'movie'
    fetch(`https://api.themoviedb.org/3/${path}/${id}?api_key=${tmdb}&language=pt-BR`)
    .then(response => response.json())
      .then(data => { this.setState({ show: data })
    })
  }
  render(){
    const { show } = this.state
    return (
      <Poster 
        alt={show === [] ? 'carregando' : `Poster de ${show.name || show.title}`} 
        src={show === [] ? 'https://dalk4zrp4jp3q.cloudfront.net/images/mac_YFVkNF/movie_placeholder_big_2x.png' : `https://image.tmdb.org/t/p/w400/${show.poster_path}`}
      />
    )
  }
}
const CoverBox = ({contentType}) => {
  return (
    <StaticQuery
      query={postsTvIdQuery}
      render={data => {
        const baseNode = contentType === 'tvID' ? data.tv : data.movie;
        const postList = baseNode.edges.map(each =>  new Array(each.node))
        const rawBodyList = postList.flatMap(x => x[0]._rawBody)
        const items = rawBodyList.filter(rawBody => rawBody._type === contentType ? true : false)
        return (
          <div>
            {items.map((item, index) => {
              return (
                <Link key={item._key} to={getBlogUrl(postList[index][0].publishedAt, postList[index][0].slug.current)}>
                  <Cover id={item.id} media={contentType} rating={item.rating} tmdb={tmdb}/>
                </Link>
                )
              })}
          </div>
        )
      }}
    />
  )
}

export default CoverBox

const postsTvIdQuery = graphql`
  query PostsWithTvID {
    tv: allSanityPost(filter: {body: {elemMatch: {_type: {eq: "tvID" }}}}) {
      edges {
        node {
          id
          title
          slug: _rawSlug
          publishedAt
          _rawBody
        }
      }
    }
    movie: allSanityPost(filter: {body: {elemMatch: {_type: {eq: "movieID" }}}}) {
      edges {
        node {
          id
          title
          slug: _rawSlug
          publishedAt
          _rawBody
        }
      }
    }
  }
`
