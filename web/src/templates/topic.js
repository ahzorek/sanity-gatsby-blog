import React from 'react'
import {graphql} from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import {toPlainText, mapEdgesToNodes} from '../lib/helpers'
import {SEO} from '../components/'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'

import ErrorLayout from '../layouts/errorLayout'
import Layout from '../layouts/mainLayout'

const TopicsTemplate = props => {
  const {data, errors} = props
  if(errors) { return <ErrorLayout><SEO title='GraphQL Error' /><GraphQLErrorList errors={errors} /></ErrorLayout> }
  
  else {
    const postNodes = data && data.posts && mapEdgesToNodes(data.posts)
    const topic = data.topic

    //console.log(topic)
    return (
      <Layout navigation hideNav nodes={postNodes}>
        <SEO title={topic.title || 'Assunto'} description={'Hibernativos'} image={'undefined'} />
        { postNodes && postNodes.length > 0 && <BlogPostPreviewGrid hideCat nodes={postNodes} /> }
      </Layout>
    )   
  }
}

export const query = graphql`
  query TopicsQuery($id: String!) {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    topic: sanityCategory(id: {eq: $id}) {
      id
      title
    }
    posts: allSanityPost(filter: {categories: {elemMatch: {id: {eq: $id}}}}){
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

export default TopicsTemplate
