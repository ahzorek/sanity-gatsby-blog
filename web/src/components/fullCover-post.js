import React, {Component} from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import PortableText from './portableText'
import DisplayDate from './displayDate'
import PostNav from './post-nav'

import clientConfig from '../../client-config'
import styles from './fullCover-post.module.css'

const CoverWrapper = styled.div`
	position: relative;
	background-color: white;
	min-height: 500px;
	width: 100vw;
	height: 100vh;
	top: 0;
	z-index: 0;
	display: flex;
	justify-content: space-around;
	align-items: flex-end;
	background-image: 
	linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,.5),rgba(0,0,0,0)),
	${props => `url(${props.bg.bgSrc.src})`},
    ${props => `url(${props.bg.bgSrc.srcWebp})`};
	background-size: cover;
  background-attachment: fixed;
  background-position-x: ${props => props.bg.posX};
`
const ContentWrapper = styled.div`
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
	@media (max-width: 0420px) { font-size: 2rem }
	@media (min-width: 1230px) { font-size: 74px }
`
const Author = styled.span`
	font-family: Georgia,Cambria,Times,serif;
	font-weight: 400;
	font-style: italic;
	margin: 0 5px 0 0;
	color: #fff;
`
const MainContent = styled.div`
    color: rgb(38,35,35);
    background-color: rgb(252,250,251);
    box-sizing: border-box;
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
    // console.log(localStorage.getItem('dark__mode'))
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
      // console.log(localStorage.getItem('dark__mode'))
      this.setState({ darkMode: JSON.parse(localStorage.getItem('dark__mode')) })
    localStorage.getItem('font__size') &&
      this.setState({fontSize: parseInt(localStorage.getItem('font__size'))})

  }

  render() {
    const {_rawBody, authors, categories, title, mainImage, publishedAt, isUpdated, _updatedAt} = this.props
    const bgSrc = getFluidGatsbyImage(
      mainImage.asset._id, 
      { maxWidth: self.innerWidth && self.innerWidth > self.innerHeight ? self.innerWidth : self.innerHeight || 1200 }, 
      clientConfig.sanity
    )
    const posX = mainImage.hotspot && Math.round(mainImage.hotspot.x * 100) + '%' || 'center'
    const posY = mainImage.hotspot && Math.round(mainImage.hotspot.y * 100) + '%' || 'center'

    return (
      <article>
        <PostNav title={title} category={categories[0]} pos={-70} />
        {mainImage && mainImage.asset !== null &&
          <CoverWrapper bg={{bgSrc, posX, posY}}>
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
        <MainContent className={styles.mainContent}>{_rawBody && <PortableText blocks={_rawBody} />}</MainContent>
      </article>
    )
  }
}

export default FullCover