import React, {useState, useEffect} from 'react'
import {graphql} from 'gatsby'

import {mapEdgesToNodes, filterOutDocsWithoutSlugs, filterOutDocsPublishedInTheFuture} from '../lib/helpers'
import BlogPostPreviewList from '../components/blog-post-preview-list'
import GraphQLErrorList from '../components/graphql-error-list'
import {SEO} from '../components'

import Layout from '../layouts/mainLayout'
import ErrorLayout from '../layouts/errorLayout'

const PaginaArquivo = ({data, errors}) => {

  if (errors) { console.error(errors)
  return ( 
    <ErrorLayout>
      <GraphQLErrorList errors={errors} />
    </ErrorLayout> 
  )
}
const site = (data || {}).site; if(!site) { 
    throw new Error('Faltam ser configuradas as informações do site.') 
  }

  const postNodes = (data || {}).posts? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs).filter(filterOutDocsPublishedInTheFuture) : []
  const initial = 4
  const increment = 2
  const allPosts = data.posts.edges.length
  
  const [postsLoaded, loadPosts] = useState(allPosts > initial ? initial : allPosts)
  const [postsToLoad, setPosts] = useState((allPosts - postsLoaded) > increment 
    ? increment 
    : (allPosts - postsLoaded))

  let docTitle = `Arquivo | Exibindo ${postsLoaded} de ${allPosts} artigos`

  useEffect(() => {
    setPosts((allPosts - postsLoaded) > increment 
      ? increment 
      : (allPosts - postsLoaded));
    docTitle = `Arquivo | Exibindo ${postsLoaded} de ${allPosts} artigos`
  }, [postsLoaded])
  
  const loadMorePosts = () => loadPosts(postsLoaded + postsToLoad)

  return (
    <Layout navigation nodes={postNodes}>
      <SEO title={docTitle} />
      <h1 hidden>Arquivo de artigos do {site.title}</h1>
      {postNodes && postNodes.length > 0 && (
        <BlogPostPreviewList 
          title={`Arquivo`} 
          subTitle={`Exibindo ${postsLoaded} de ${allPosts} artigos`}
          nodes={postNodes.slice(0, postsLoaded)}
          loadMore={postsLoaded < allPosts ? loadMorePosts : false}
           />
        )}
    </Layout>

  )
}

export const query = graphql`
  query ArchivePageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(sort: {fields: [publishedAt], order: DESC}) {
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

export default PaginaArquivo
