import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import DocContainer from '../containers/doc-container'
import {toPlainText, mapEdgesToNodes} from '../lib/helpers'
import SEO from '../components/seo'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Header from '../components/header'


const AuthorTemplate = props => {
  const {data, errors} = props
  const author = data && data.author
  
  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
  <DocContainer>
    {errors && <SEO title='GraphQL Error' />}
    {author && <SEO title={author.name || 'Autor'} description={toPlainText(author._rawBio) || 'Autor do Hibernativos'} image={'undefined'} />}

    {errors && (
      <Container>
        <GraphQLErrorList errors={errors} />
      </Container>
    )}
    
    <Header siteTitle={'Hibernativos'} />

    {author && (
      <Container>
          <h1>{author.name}</h1>
          <h2>{toPlainText(author._rawBio) || 'Autor do Hibernativos'}</h2>
          {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
      </Container>
    )}
  </DocContainer>
  )
}

export const query = graphql`
  query AuthorTemplateQuery($id: String!) {
    author: sanityAuthor(id: {eq: $id}) {
      id
      name
      image {
        _key
        _type
        caption
        alt
        ...SanityImage
      }
      _rawBio
    }
    posts: allSanityPost(sort: {fields: _createdAt, order: DESC}, filter: {authors: {elemMatch: {author: {id: {eq: $id}}}}}){
      edges {
        node {
          title
          slug {
            current
          }
          categories {
            title
            slug {
              current
            }
          }
          id
          publishedAt
          isUpdated
          _updatedAt
          mainImage {
            ...SanityImage
            alt
          }
          _rawExcerpt
        }
      }
    }
  }
`

export default AuthorTemplate
