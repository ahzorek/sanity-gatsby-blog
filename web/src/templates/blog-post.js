import React, { Component } from 'react'
import {graphql} from 'gatsby'

import Basic from '../components/Basic'
import FullCover from '../components/FullCover'
import SimpleCover from '../components/SimpleCover'
import SEO from '../components/seo'
import DocContainer from '../containers/doc-container'
import {toPlainText} from '../lib/helpers'

const BlogPostTemplate = props => {
  const {data, errors} = props
  const post = data && data.post
  const viewFormat = post.viewFormat._rawViewFormat.current

  const readTime = Math.ceil((toPlainText(post._rawBody).split(" ").length) / 150);
  //console.log('~', readTime, (readTime > 1 ?'minutos': 'minuto'))

  switch(viewFormat){
    case 'fullCover':
        return (
          <DocContainer>
            {errors && <SEO title='GraphQL Error' />}
            {post && <SEO title={post.title || 'Sem título'} description={toPlainText(post._rawExcerpt)} image={post.mainImage} />}
            <FullCover {...post} />
          </DocContainer>
        )
    case 'simpleCover':
        return (
          <DocContainer>
            {errors && <SEO title='GraphQL Error' />}
            {post && <SEO title={post.title || 'Sem título'} description={toPlainText(post._rawExcerpt)} image={post.mainImage} />}
            <SimpleCover {...post} />
          </DocContainer>
        )
    case 'basic':
        return (
          <DocContainer>
            {errors && <SEO title='GraphQL Error' />}
            {post && <SEO title={post.title || 'Sem título'} description={toPlainText(post._rawExcerpt)} image={post.mainImage} />}
            <Basic {...post} />
          </DocContainer>
        )

  }
}

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
export default BlogPostTemplate
