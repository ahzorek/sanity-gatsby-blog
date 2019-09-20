import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import DocContainer from '../containers/doc-container'
import Header from '../components/header'

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <DocContainer>
        <GraphQLErrorList errors={errors} />
      </DocContainer>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []
    
    console.log(postNodes)

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <DocContainer>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Header siteTitle={site.title} />
      <Container>
        <h1 hidden>Bem-vindx ao {site.title}</h1>
        {postNodes && (
          <BlogPostPreviewGrid
            title='Últimos Artigos'
            nodes={postNodes.slice([2])}
            browseMoreHref='/archive/'
          />
        )}
      </Container>
    </DocContainer>
  )
}

export const query = graphql`
  fragment SanityImage on SanityMainImage {
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


  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 8
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
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
export default IndexPage
