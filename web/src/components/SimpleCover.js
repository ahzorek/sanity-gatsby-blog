import React, {useState} from 'react'
import styled from 'styled-components'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import DisplayDate from './displayDate'
import Author from './author'
import PostNav from './post-nav'
import { dark, light } from '../lib/color_modes'
import clientConfig from '../../client-config'
import Img from 'gatsby-image'

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
  margin: .2rem auto .6rem;
  max-width: 620px;
  line-height: 1.2;
	@media (max-width: 420px) { font-size: 1.8rem }
	@media (min-width: 1230px) { font-size: 3.6rem }
`
const CoverImage = styled(Img)`
  position: relative;
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
const SimpleCover = props => {
  const {title, categories, authors, mainImage, publishedAt, isUpdated, _updatedAt, isDark} = props
  
  if (mainImage && mainImage.asset !== null)
  return (
    <ContentWrapper colors={isDark ? dark : light}>
      <Subject>{categories[0].title}</Subject>
      <Title>{title}</Title>
      <section style={{maxWidth: 620, margin: '0 auto', display: 'flex', flexFlow: 'row wrap'}}>
        <Author items={authors}/>
        <DisplayDate dateInfo={{publishedAt, isUpdated, _updatedAt}} />
      </section>
      <figure style={{margin: 'auto'}}>
        <CoverImage fluid={getFluidGatsbyImage(mainImage.asset._id, { maxWidth: 1920 }, clientConfig.sanity)} alt={title} />
          <CoverCaption>{mainImage.caption}</CoverCaption>
      </figure>
    </ContentWrapper>
  )
}
export default SimpleCover