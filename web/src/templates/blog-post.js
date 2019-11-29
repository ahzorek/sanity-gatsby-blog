import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../layouts/mainLayout'
import ErrorLayout from '../layouts/errorLayout'
import PostCover from '../components/covers/'
import { SEO, MainContent, CommentBox, PostKeywords } from '../components'
import {toPlainText, readTime} from '../lib/helpers'
//import SupportButton from '../components/SupportButton'

const BlogPostTemplate = props => {
  const {data, errors, pageContext} = props
  const node = data && data.post
  //const timeToRead = readTime(node, 100)
  //console.log(pageContext)
  // console.log('~', timeToRead, (timeToRead > 1 ?'minutos': 'minuto'))
    
  if (errors) { 
    console.error(errors)
    return <ErrorLayout><SEO title='GraphQL Error' /><GraphQLErrorList errors={errors} /></ErrorLayout> 
  }
  const color = node.categories[0].catColor
      ? node.categories[0].catColor.hex 
      : 'rgb(128,128,128)'

  return (
    <Layout post {...node} >
      <SEO title={node.title || 'Sem título'} description={toPlainText(node.excerptText)} image={node.mainImage} />
      <PostCover node={node} />
      { node.coverFormat !== 'basic' && <MainContent>{node.bodyText}</MainContent> }
      <PostKeywords items={node.keywords}/>
      <CommentBox {...node} />
    </Layout>
  )
  
}

export default BlogPostTemplate

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: {eq: $id}) {
      id
      publishedAt
      isUpdated
      _updatedAt
      mainImage {
        ...SanityImage
        alt
        caption
      }
      title
      slug {
        current
      }
      keywords
      coverFormat
      videoCoverURL
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
      excerptText: _rawExcerpt(resolveReferences: {maxDepth: 5})
      bodyText: _rawBody(resolveReferences: {maxDepth: 5})
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