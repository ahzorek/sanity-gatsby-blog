import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import DisplayDate from '../displayDate'
import clientConfig from '../../../client-config'
import Author from '../author'
import {minQueries, maxQueries} from '../../lib/media'
import {getPos} from '../../lib/helpers'
import MiniLogoMenu from '../menus/mini-logo-menu'

const FullCover = props => {
  const {title, categories, authors, mainImage, publishedAt, isUpdated, _updatedAt } = props
  const bgSrc = getFluidGatsbyImage( mainImage.asset._id, { maxWidth: 1920 }, clientConfig.sanity )
  
  if(mainImage && mainImage.asset !== null){
    return (
      <header>
        <BGImageWrapper 
          bg={bgSrc}
          pos={getPos(mainImage)}
          Tag="section"
          className={'background'}
          fluid={[bgSrc, `linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,.5),rgba(0,0,0,0))`].reverse()}
          backgroundColor={Object.values(mainImage.asset.metadata)[0].vibrant.color}
          >
          <MiniLogoMenu />
          <CoverContent>
            <Subject>{categories[0].title}</Subject>
            <Title>{title}</Title>
            <DisplayDate dateInfo={{publishedAt, isUpdated, _updatedAt}} postdate={publishedAt} isUpdate={isUpdated} update={_updatedAt} />
            <Author items={authors} />
          </CoverContent>
        </BGImageWrapper>
      </header>
    )
  } else return false
}

const BGImageWrapper = styled(BackgroundImage)`
	min-height: 500px;
	width: 100vw;
	top: 0;
	display: flex;
	justify-content: space-around;
	align-items: flex-end;
  background-size: cover;
  background-attachment: fixed;
  background-position-x: ${props => props.pos.X};
  background-position-y: ${props => props.pos.Y};
  height: 100vh;
`
const CoverContent = styled.section`
 && {
  width: 100%;
	max-width: 1000px;
	margin: 0 auto;
	padding: 4rem 2em;
  text-shadow: 0 0 1.6rem rgba(0,0,0,.2);
  color: rgb(240,240,240) !important;
	z-index: 1;
 }
`
const Title = styled.h1`
 && {
  font-size: 6vw;
  margin: 1rem 0 1.6rem;
  line-height: 1.2em;
  color: rgb(240,240,240) ;
	@media ${maxQueries.Sm} { font-size: 2rem }
	@media ${minQueries.XL} { font-size: 74px }
 }
`
const Subject = styled.span`
	display: inline-block;
	text-transform: uppercase;
	font-weight: 400;
	font-size: 1rem;
`

export default FullCover