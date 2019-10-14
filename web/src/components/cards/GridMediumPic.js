import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
//import { Link } from 'gatsby'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'

import clientConfig from '../../../client-config'
import { getBlogUrl } from '../../lib/helpers'
import AddToRead from '../read-list/AddToRead'
import {Link} from '../../lib/link'


import '../blog-post-preview-grid.module.css'

const GridMediumPic = props => {
  const { title, slug, publishedAt, categories, mainImage, authors, hideCat, hideRead } = props

  const fluidProps = mainImage !== null && 
    getFluidGatsbyImage( mainImage.asset._id, { maxWidth: 400 }, clientConfig.sanity)
  
  const { hex } = categories[0] !== undefined && categories[0].color !== null && categories[0].color || 'red'
  
  return (
    <Card color={{ hex }}>
      {!hideRead && <AddToRead style={{position: 'absolute', top: -3, right: 0, zIndex: 9999}} node={props} />}
      {mainImage !== null &&
        <Link to={getBlogUrl(publishedAt, slug.current)}>
          <Image fluid={fluidProps} alt={mainImage.alt} />
        </Link>}
      {categories[0] !== undefined && !hideCat &&
        <Link to={`/${categories[0].slug.current}`}>
          <Category color={hex}>{categories[0].title}</Category>
        </Link>}
      <Link to={getBlogUrl(publishedAt, slug.current)}>
        <Title>{title}</Title>
      </Link>
    </Card>
  )
}

const Card = styled.li`
  max-width: 340px;
  position: relative;
  box-sizing: border-box;
  transition: all 200ms ease-out;
  height: max-content;
  z-index: 0;
  @supports(display: grid){
    max-width: 100%;
  }
  & a {
    text-decoration: none;
    color: ${props => props.theme.primaryText};
    transition: all 200ms ease-out;
  }
  & :hover {
    background-color: ${props => props.theme.contrastBg};
    box-shadow: 0 2px 15px 5px rgba(0,0,0,.1);
    transition: all 200ms ease-in;
    transform: scale(1.05);
    & a {
      transition: all 200ms ease-in;
      color: ${props => props.color.hex};
    };
  }
`
const Image = styled(Img)`
  max-width: 100%;
  min-height: 200px;
  overflow: hidden;
  object-fit: cover;
`
const Title = styled.h2`
  font-size: calc(21 / 16 * 1rem);
  line-height: calc(30 / 21);
  padding: .4rem .6rem .8rem;
`
const Category = styled.span`
  display: block;
  width: max-content;
  text-transform: uppercase;
  font-size: 8pt;
  margin: 0 auto -1rem;
  transform: translateY(-1rem);
  padding: .3rem;
  border-radius: .1rem;
  color: rgb(240,240,252);
  background-color: ${props => props.color || 'rgb(128,128,128)'};
`

export default GridMediumPic