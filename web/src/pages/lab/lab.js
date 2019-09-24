import React, { Component } from 'react'
import styled from 'styled-components'
import {StaticQuery, graphql} from 'gatsby'
import CoverBox from '../../components/cover-box'
import layout from '../../components/layout'
import ImageRenderer from '../../components/image-renderer'
import {Link} from '../../lib/link'

import '../../styles/layout.css'

const MyTitle = styled.h1`
  font-family: BWHaasGrotesk;
  margin: 0 !important;
  font-size: 4em;
`


class lab extends Component {
  render() {
    return (
      <layout style={{padding: '5rem 5rem'}} >
        <MyTitle>This is a very big test.</MyTitle>
        <CoverBox contentType={'movieID'} />   
        <CoverBox contentType={'tvID'} />
        <StaticQuery
          query={Posts}
          render={data => {
            const post = data.post
          return (
            <div>
              <ImageRenderer mainImage={post.mainImage} altColor={post.categories[0].catColor.hex}/>
            </div>
          )}}
        /> 
        <Link to={'/'} anim={'fade'} color={'#ff0000'}>Teste</Link>

      </layout>
    )
  }
}

export default lab

const Posts = graphql`
  query Posts_on_Lab {
    post: sanityPost(id: {eq: "9279d8eb-7901-5bb9-bf16-e0345a7d66ef"}) {
      id
      publishedAt
      isUpdated
      _updatedAt
      mainImage {
        ...SanityImage
        alt
        asset {
          metadata {
            palette {
              darkMuted {
                color:background
              }
              darkVibrant {
                color:background
              }
              lightMuted {
                color:background
              }
              lightVibrant {
                color:background
              }
              dominant {
                color:background
              }
              muted {
                color:background
              }
              vibrant {
                color:background
              }
            }
          }
        }
      }
      title
      slug {
        current
      }
      keywords
      viewFormat {
        _rawViewFormat
      }
      categories {
        id
        title
        _rawSlug
        catColor {
          hex
          rgb {
            r
            g
            b
          }
        }
      }
      _rawExcerpt(resolveReferences: {maxDepth: 5})
      _rawBody(resolveReferences: {maxDepth: 5})
      authors {
        _key
        author {
          name
          slug {
          current
        }
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
        }
      }
    }
  }
`