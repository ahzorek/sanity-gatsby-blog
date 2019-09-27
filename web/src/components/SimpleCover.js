import React, {Component} from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import PortableText from './portableText'
import DisplayDate from './displayDate'
import PostNav from './post-nav'
import { dark, light } from '../lib/color_modes'
import MainContent from './layouts/main-content'
import clientConfig from '../../client-config'
import Img from 'gatsby-image'

// import styles from './fullCover-post.module.css'

const ContentWrapper = styled.section`
  box-sizing: border-box;
  width: 100%;
  padding: 6rem 1rem 0;
  font-family: sans-serif;
  background-color: ${props => props.colors.paper};
  color: ${props => props.colors.ink};
`
const Subject = styled.span`
	display: block;
  max-width: 620px;
  margin: 0 auto;
	text-transform: uppercase;
	font-weight: 400;
	font-size: 10pt;
`
const Title = styled.h1`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 2.8rem;
  font-weight: 400;
  margin: 0 auto 2rem;
  max-width: 620px;
  line-height: 1.2;
	@media (max-width: 420px) { font-size: 1.8rem }
	@media (min-width: 1230px) { font-size: 3.6rem }
`
const CoverImage = styled(Img)`
  max-width: 860px;
  max-height: 520px;
  margin: 0 auto;
  box-shadow: 0 4px 12px 0 rgba(0,-1,0,.05);
`

const CoverCaption = styled.figcaption`
  display: block;
  max-width: 860px;
  margin: 0 auto;
  padding: 1rem; 
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 400;
  opacity: .5;
`

const Author = styled.span`
	font-family: Georgia,Cambria,Times,serif;
	font-weight: 400;
	font-style: italic;
	margin: 0 5px 0 0;
`

class SimpleCover extends Component {
  state = {
    darkMode: false,
    fontSize: 14
  }

  handleDarkMode = () => {
    this.setState({ darkMode: !this.state.darkMode })
    localStorage.setItem('dark__mode', !this.state.darkMode)
    }
  biggerFont = () => {
    this.state.fontSize < 24 && this.setState({fontSize: this.state.fontSize + 2})
    localStorage.setItem('font__size', this.state.fontSize + 2)
  }
  smallerFont = () => {
    this.state.fontSize > 12 && this.setState({fontSize: this.state.fontSize - 2})
    localStorage.setItem('font__size', this.state.fontSize)
  }

  componentDidMount(){
    localStorage.getItem('dark__mode') &&
      this.setState({ darkMode: JSON.parse(localStorage.getItem('dark__mode')) })
    localStorage.getItem('font__size') &&
      this.setState({fontSize: parseInt(localStorage.getItem('font__size'))})

  }

  render() {
    const colors = this.state.darkMode ? dark : light
    const {_rawBody, authors, categories, title, mainImage, publishedAt, isUpdated, _updatedAt} = this.props
    const bgSrc = getFluidGatsbyImage( mainImage.asset._id, { maxWidth: 1920 }, clientConfig.sanity )

    return (
      <article style={{overflow: 'hidden'}}>
        <PostNav 
          title={title} 
          category={categories[0]} 
          pos={0}
          colors={colors} 
          darkMode={{func: this.handleDarkMode, status: this.state.darkMode }} 
         />
        {mainImage && mainImage.asset !== null &&
            <ContentWrapper colors={colors}>
              <Subject>{categories[0].title}</Subject>
              <Title>{title}</Title>
              <figure style={{margin: 'auto'}}>
                <CoverImage fluid={bgSrc} alt={title} />
                <CoverCaption>{mainImage.caption}</CoverCaption>
              </figure>
              {/* <DisplayDate postdate={publishedAt} isUpdate={isUpdated ? isUpdated : false} update={_updatedAt} />
              <Author>
                {authors && authors.map(({author}, index) =>  <span key={index}>por <Link to={`/autores/${author.slug.current}`} >{author.name}</Link></span>)}
              </Author> */}
            </ContentWrapper>
        }
        <MainContent colors={colors}>
          {_rawBody && <PortableText blocks={_rawBody} />}
        </MainContent>
      </article>
    )
  }
}

export default SimpleCover