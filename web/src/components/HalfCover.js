import React from 'react'
import styled from 'styled-components'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import BackgroundImage from 'gatsby-background-image'
import DisplayDate from './displayDate'
import clientConfig from '../../client-config'
import Author from './author'
import { dark, light } from '../lib/color_modes'

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
const HalfCover = props => {
  const {title, categories, authors, mainImage, publishedAt, isUpdated, _updatedAt, isDark} = props
  const bgSrc = getFluidGatsbyImage( mainImage.asset._id, { maxWidth: 1920 }, clientConfig.sanity )
  const X = mainImage.hotspot && Math.round(mainImage.hotspot.x * 100) + '%' || 'center'
  const Y = mainImage.hotspot && Math.round(mainImage.hotspot.y * 100) + '%' || 'center'
  const colors = isDark ? dark : light

  return (
    <Wrapper colors={colors}>
      {mainImage && mainImage.asset !== null && 
      <Photo 
        pos={{X, Y}}
        Tag="section"
        className={'cover'}
        fluid={bgSrc}
        backgroundColor={Object.values(mainImage.asset.metadata)[0].vibrant.color}
        />}
      <PostInfo>
        <Subject>{categories[0].title}</Subject>
        <Title cartola={categories[0].title}>{title}</Title>
        <DisplayDate showUpdate prefix={"publicado"} sFormat={"d' 'MMM' 'yy"} dateInfo={{publishedAt, isUpdated, _updatedAt}} />
        {authors && <Author items={authors}/>}
      </PostInfo>
    </Wrapper>
  )
}

export default HalfCover