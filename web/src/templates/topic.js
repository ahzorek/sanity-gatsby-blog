import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import DocContainer from '../containers/doc-container'
import {toPlainText, mapEdgesToNodes} from '../lib/helpers'
import SEO from '../components/seo'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Header from '../components/header'


const TopicsTemplate = props => {
  const {data, errors} = props
  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)
  const topic = data.topic

  return (
  <DocContainer>
    {errors && <SEO title='GraphQL Error' />}
    {topic && <SEO title={topic.title || 'Assunto'} description={'Hibernativos'} image={'undefined'} />}

    {errors && (
      <Container>
        <GraphQLErrorList errors={errors} />
      </Container>
    )}
    <Header siteTitle={'Hibernativos'} />
    {data && (
      <Container>
        {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
      </Container>
    )}
  </DocContainer>
  )
}

export const query = graphql`
  query TopicsQuery($id: String!) {
    topic: sanityCategory(id: {eq: $id}) {
      id
      title
    }
    posts: allSanityPost(filter: {categories: {elemMatch: {id: {eq: $id}}}}){
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

export default TopicsTemplate
