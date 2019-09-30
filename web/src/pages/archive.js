import React, {Component} from 'react'
import {graphql} from 'gatsby'
import {mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture} from '../lib/helpers'
import BlogPostPreviewList from '../components/blog-post-preview-list'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import DocContainer from '../containers/doc-container'
import Header from '../components/header'


import {responsiveTitle1} from '../components/typography.module.css'

const ArchivePage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <DocContainer>
        <GraphQLErrorList errors={errors} />
      </DocContainer>
    )
  }

  const postNodes = (data || {}).posts
  ? mapEdgesToNodes(data.posts)
    .filter(filterOutDocsWithoutSlugs)
    .filter(filterOutDocsPublishedInTheFuture)
  : []

  return (
    <DocContainer>
      <SEO title='Arquivo' />
      <Header siteTitle={data.site.title || 'Hibernativos'} />
      <Container>
        <h1 style={{fontSize: '4em'}}className={responsiveTitle1}>Arquivo</h1>
        {postNodes && postNodes.length > 0 && <BlogPostPreviewList nodes={postNodes} />}
      </Container>
    </DocContainer>
  )
}

export const query = graphql`
  query ArchivePageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(limit: 12, sort: {fields: [publishedAt], order: DESC}) {
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
          slug: _rawSlug
          }
        }
      }
    }
  }
`

export default ArchivePage
