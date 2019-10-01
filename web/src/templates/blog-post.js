import React, { useState } from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import PostNav from '../components/post-nav'
import Basic from '../components/Basic'
import FullCover from '../components/FullCover'
import HalfCover from '../components/HalfCover'
import SimpleCover from '../components/SimpleCover'
import MainContent from '../components/main-content'
import SEO from '../components/seo'
import {toPlainText} from '../lib/helpers'


const BlogPostTemplate = props => {
  const stateDark = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('dark__mode')) : false;
  const [isDark, setDark] = useState(stateDark)
  const handleDarkMode = () => {
    setDark(!isDark)
    localStorage.setItem('dark__mode', !isDark)
  }  
  const {data, errors, pageContext} = props
  const post = data && data.post
  const viewFormat = post.viewFormat._rawViewFormat.current
  const readTime = Math.ceil((toPlainText(post._rawBody).split(" ").length) / 150);
  //console.log('~', readTime, (readTime > 1 ?'minutos': 'minuto'))
  
  if(post){
    return (
      <Layout>
        <SEO title={post.title || 'Sem título'} description={toPlainText(post._rawExcerpt)} image={post.mainImage} />
        <PostNav
          title={post.title} 
          category={post.categories[0]}
          layoutType={viewFormat}
          darkModeToggle={handleDarkMode} 
          isDark={isDark}
        />
        { viewFormat === 'basic' && <Basic {...post} /> }
        { viewFormat === 'fullCover' && <FullCover {...post} /> }
        { viewFormat === 'halfCover' && <HalfCover isDark={isDark} {...post} /> }
        { viewFormat === 'simpleCover' && <SimpleCover isDark={isDark} {...post} /> }
        <MainContent isDark={isDark} >{post._rawBody}</MainContent>
      </Layout>
    )
  } else errors && <SEO title='GraphQL Error' />
}

export default BlogPostTemplate

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
        caption
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