import React from 'react'
import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import DocContainer from '../containers/doc-container'
import Header from '../components/header'


import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query ArchivePageQuery {
    posts: allSanityPost(limit: 12, sort: {fields: [publishedAt], order: DESC}) {
      edges {
        node {
          id
          publishedAt
          isUpdated
          _updatedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const ArchivePage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <DocContainer>
        <GraphQLErrorList errors={errors} />
      </DocContainer>
    )
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <DocContainer>
      <SEO title='Arquivo' />
      <Header siteTitle={'Hibernativos'} />
      <Container>
        <h1 className={responsiveTitle1}>Arquivo</h1>
        {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
      </Container>
    </DocContainer>
  )
}

export default ArchivePage
