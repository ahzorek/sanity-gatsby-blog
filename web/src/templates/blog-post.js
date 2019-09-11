import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import BlogPost from '../components/blog-post'
import FullCover from '../components/fullCover-post'

import SEO from '../components/seo'
import DocContainer from '../containers/doc-container'
import {toPlainText} from '../lib/helpers'

const BlogPostTemplate = props => {
  const {data, errors} = props
  const post = data && data.post

  const viewFormat = post.viewFormat ? post.viewFormat._rawViewFormat.current : false
  
  return (
    <DocContainer>
      {errors && <SEO title='GraphQL Error' />}
      {post && <SEO title={post.title || 'Sem título'} description={toPlainText(post._rawExcerpt)} image={post.mainImage} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && viewFormat === 'fullCover' ? <FullCover {...post} /> : <BlogPost {...post} />}

    </DocContainer>
  )
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
