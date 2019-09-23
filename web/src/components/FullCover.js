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
import BackgroundImage from 'gatsby-background-image'
// import styles from './fullCover-post.module.css'

const CoverWrapper = styled(BackgroundImage)`
	min-height: 500px;
	width: 100vw;
	top: 0;
	display: flex;
	justify-content: space-around;
	align-items: flex-end;
  background-size: cover;
  background-attachment: fixed;
  background-position-x: ${props => props.bg.posX};   
  height: 100vh;


`
const ContentWrapper = styled.section`
	width: 100%;
	max-width: 1000px;
	margin: 0 auto;
	padding: 4rem 2em;
	font-family: sans-serif;
	color: rgb(240,240,240);
	text-shadow: 0 0 1.6rem rgba(0,0,0,.2);
	z-index: 1;
`
const Title = styled.h1`
	font-size: 6vw;
  margin: 1rem 0 1.6rem;
  line-height: 1.2em;
	@media (max-width: 420px) { font-size: 2rem }
	@media (min-width: 1230px) { font-size: 74px }
`
const Author = styled.span`
	font-family: Georgia,Cambria,Times,serif;
	font-weight: 400;
	font-style: italic;
	margin: 0 5px 0 0;
	color: #fff;
`

const Subject = styled.span`
	display: inline-block;
	text-transform: uppercase;
	font-weight: 400;
	font-size: 1rem;
	color: rgb(250,250,250);
`

class FullCover extends Component {
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
    const {_rawBody, authors, categories, title, mainImage, publishedAt, isUpdated, _updatedAt} = this.props
    const bgSrc = getFluidGatsbyImage( mainImage.asset._id, { maxWidth: 1920 }, clientConfig.sanity )
    const posX = mainImage.hotspot && Math.round(mainImage.hotspot.x * 100) + '%' || 'center'
    const posY = mainImage.hotspot && Math.round(mainImage.hotspot.y * 100) + '%' || 'center'
    const colors = this.state.darkMode ? dark : light
    const __color = categories[0].catColor ? categories[0].catColor.hex : `rgba(123, 123, 123, .95)`
    const fluidBG_colored = [
      bgSrc,
      `linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,.5),rgba(0,0,0,0))`
    ].reverse()
  

    return (
      <article style={{overflow: 'hidden'}}>
        <PostNav 
          title={title} 
          category={categories[0]} 
          pos={-70}
          colors={colors} 
          darkMode={{func: this.handleDarkMode, status: this.state.darkMode }} 
         />
        {mainImage && mainImage.asset !== null &&
          <CoverWrapper 
            bg={{bgSrc, posX, posY}}
            Tag="section"
            className={'background'}
            fluid={fluidBG_colored}
            backgroundColor={__color}
            >
            <ContentWrapper>
              <Subject>{categories[0].title}</Subject>
              <Title>{title}</Title>
              <DisplayDate postdate={publishedAt} isUpdate={isUpdated ? isUpdated : false} update={_updatedAt} />
              <Author>
                {authors && authors.map(({author}, index) =>  <div key={index}>por <Link to={`/autores/${author.slug.current}`} style={{ textDecoration: 'none', color: 'white' }}>{author.name}</Link></div>)}
              </Author>
            </ContentWrapper>
          </CoverWrapper>
        }
        <MainContent colors={colors} link={__color}>
          {_rawBody && <PortableText blocks={_rawBody} />}
        </MainContent>
      </article>
    )
  }
}

export default FullCover