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
import Author from './author'
import BackgroundImage from 'gatsby-background-image'

const Wrapper = styled.header`
  display: grid;
  grid-template-areas: "photo info";
  height: 100vh;
  background-color: ${props => props.colors.paper};
  color: ${props => props.colors.ink};
  & a {
    color: ${props => props.colors.ink};
    & :hover {
      color: ${props => props.colors.link};
    }
  }
`
const Photo = styled(BackgroundImage)`
	width: 55vw;
	display: flex;
  background-size: cover;
  background-position-x: ${props => props.pos.X};   
  background-position-y: ${props => props.pos.Y};   
  height: 1000px;
  height: 100vh;
`
const PostInfo = styled.section`
  grid-area: info;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  max-width: 600px;
  padding: 0 1.6rem;
  z-index: 2;
`
const Title = styled.h1`
	font-weight: 400;
	font-family: Georgia, 'Times New Roman', Times, serif;
	font-size: 3rem;
`
// const Author = styled.span`
// 	font-family: Georgia,Cambria,Times,serif;
// 	font-weight: 400;
// 	font-style: italic;
// `
const Subject = styled.span`
	display: inline-block;
	text-transform: uppercase;
  font-weight: 600;
`
class HalfCover extends Component {
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
    const X = mainImage.hotspot && Math.round(mainImage.hotspot.x * 100) + '%' || 'center'
    const Y = mainImage.hotspot && Math.round(mainImage.hotspot.y * 100) + '%' || 'center'
    const colors = this.state.darkMode ? dark : light
    const __color = Object.values(mainImage.asset.metadata)[0].vibrant.color

    return (
      <article style={{overflow: 'hidden'}}>
        <PostNav
          pos={-80} 
          title={title} 
          category={categories[0]} 
          colors={colors} 
          darkMode={{func: this.handleDarkMode, status: this.state.darkMode }} 
         />
        <Wrapper colors={colors}>
          {mainImage && mainImage.asset !== null && 
          <Photo 
            pos={{X, Y}}
            Tag="section"
            className={'cover'}
            fluid={bgSrc}
            backgroundColor={__color}
            />}
          <PostInfo>
            <Subject>{categories[0].title}</Subject>
            <Title cartola={categories[0].title}>{title}</Title>
            <DisplayDate showUpdate prefix={"publicado"} sFormat={"d' 'MMM' 'yy"} dateInfo={{publishedAt, isUpdated, _updatedAt}} />
            {authors && <Author items={authors}/>}
          </PostInfo>
        </Wrapper>
        <MainContent colors={colors} link={__color}>
          {_rawBody && <PortableText blocks={_rawBody} />}
        </MainContent>
      </article>
    )
  }
}

export default HalfCover