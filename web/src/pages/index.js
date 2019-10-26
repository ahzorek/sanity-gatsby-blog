import React from 'react'
import {graphql} from 'gatsby'

import { mapEdgesToNodes, filterOutDocsWithoutSlugs, filterOutDocsPublishedInTheFuture } from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import SpotLight from '../components/SpotLight'
import Layout from '../layouts/mainLayout'
import ErrorLayout from '../layouts/errorLayout'

const IndexPage = props => {
  const {data, errors} = props
  if (errors) { <ErrorLayout><GraphQLErrorList errors={errors} /></ErrorLayout> }

  const site = (data || {}).site
  const postNodes = (data || {}).posts ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs).filter(filterOutDocsPublishedInTheFuture) : []
  if(!site) { throw new Error('Faltam ser configuradas as informações do site.') }
  
  return (   
    <Layout nodes={postNodes}>
      <SEO title={site.title} description={site.description} keywords={site.keywords}/>
      <h1 hidden>Bem-vindx ao {site.title}</h1>  
        <SpotLight nodes={postNodes}/>
        {postNodes && (
          <BlogPostPreviewGrid
            title='Últimos Artigos'
            nodes={postNodes.slice(0,4)}
            browseMoreHref='/arquivo/'
          />
        )}
    </Layout>
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
          title
          slug { current }
          _rawExcerpt
          bodyText: _rawBody(resolveReferences: {maxDepth: 5})
          publishedAt
          isUpdated
          _updatedAt
          videoCoverURL
          mainImage {
            ...SanityImage
            alt
          }
          categories {
            title
            color: _rawCatColor
            slug: _rawSlug
          }
          authors {
            _key
            author {
              name
              slug { current }
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
                asset { _id }
              }
            }
          }
        }
      }
    }
  }
`
export default IndexPage
