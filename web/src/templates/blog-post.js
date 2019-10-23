import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../layouts/mainLayout'
import ErrorLayout from '../layouts/errorLayout'
import { SEO, Basic, FullCover, HalfCover, SimpleCover, VideoCover, MainContent, CommentBox, PostKeywords } from '../components'
import {toPlainText, readTime} from '../lib/helpers'

const BlogPostTemplate = props => {
  const {data, errors, pageContext} = props
  const node = data && data.post
  const {coverFormat} = node
  const timeToRead = readTime(node, 100)
  // console.log('~', timeToRead, (timeToRead > 1 ?'minutos': 'minuto'))
    
  if (errors) { 
    console.error(errors)
    return <ErrorLayout><SEO title='GraphQL Error' /><GraphQLErrorList errors={errors} /></ErrorLayout> 
  }

  return (
    <Layout post {...node} >
      <SEO title={node.title || 'Sem título'} description={toPlainText(node._rawExcerpt)} image={node.mainImage} />
      { coverFormat === 'basic' && <Basic {...node} /> }
      { coverFormat === 'fullCover' && <FullCover {...node} /> }
      { coverFormat === 'halfCover' && <HalfCover {...node} /> }
      { coverFormat === 'simpleCover' && <SimpleCover readTime={readTime(node, 100)} {...node} /> }
      { coverFormat === 'videoCover' && <VideoCover readTime={readTime(node, 100)} {...node} /> }
      { coverFormat !== 'basic' && <MainContent>{node._rawBody}</MainContent> }
      {node.keywords && <PostKeywords items={node.keywords}/>}
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
      _rawExcerpt(resolveReferences: {maxDepth: 5})
      _rawBody(resolveReferences: {maxDepth: 5})
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