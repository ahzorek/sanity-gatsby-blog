import React from 'react'
import {graphql} from 'gatsby'

import GraphQLErrorList from '../components/graphql-error-list'
import {toPlainText, mapEdgesToNodes} from '../lib/helpers'
import {SEO} from '../components/'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'

import ErrorLayout from '../layouts/errorLayout'
import Layout from '../layouts/mainLayout'

const AuthorTemplate = props => {
  const {data, errors} = props
  
  if(errors) { 
    console.error(errors)
    return <ErrorLayout><SEO title='GraphQL Error' /><GraphQLErrorList errors={errors} /></ErrorLayout> 
  }
  const author = data && data.author
  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <Layout navigation nodes={postNodes}>
      <SEO title={author.name || 'Autor'} description={author._rawBio ? toPlainText(author._rawBio) : 'Autor do Hibernativos'} image={'undefined'} />
      <h1>{author.name}</h1>
      { author._rawBio && <h2>{toPlainText(author._rawBio)}</h2>}
      { postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes}/> }
    </Layout>
  )
}

export default AuthorTemplate

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
          id
          title
          slug { current }
          _rawExcerpt
          publishedAt
          isUpdated
          _updatedAt
          mainImage {
            ...SanityImage
            alt
          }
          categories {
            title
            color: _rawCatColor
            slug { current }
          }
        }
      }
    }
  }
`
