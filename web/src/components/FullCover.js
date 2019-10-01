import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import DisplayDate from './displayDate'
import clientConfig from '../../client-config'

const BGImageWrapper = styled(BackgroundImage)`
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
const CoverContent = styled.section`
	width: 100%;
	max-width: 1000px;
	margin: 0 auto;
	padding: 4rem 2em;
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
const FullCover = props => {

  const {title, categories, authors, mainImage, publishedAt, isUpdated, _updatedAt } = props
  const bgSrc = getFluidGatsbyImage( mainImage.asset._id, { maxWidth: 1920 }, clientConfig.sanity )
  const posX = mainImage.hotspot && Math.round(mainImage.hotspot.x * 100) + '%' || 'center'
  const posY = mainImage.hotspot && Math.round(mainImage.hotspot.y * 100) + '%' || 'center'
  
  if(mainImage && mainImage.asset !== null)
  return (
    <header>
      <BGImageWrapper 
        bg={{bgSrc, posX, posY}}
        Tag="section"
        className={'background'}
        fluid={[bgSrc, `linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,.5),rgba(0,0,0,0))`].reverse()}
        backgroundColor={Object.values(mainImage.asset.metadata)[0].vibrant.color}
        >
        <CoverContent>
          <Subject>{categories[0].title}</Subject>
          <Title>{title}</Title>
          <DisplayDate dateInfo={{publishedAt, isUpdated, _updatedAt}} postdate={publishedAt} isUpdate={isUpdated} update={_updatedAt} />
          <Author>
            {authors && authors.map(({author}, index) =>  <div key={index}>por <Link to={`/autores/${author.slug.current}`} style={{ textDecoration: 'none', color: 'white' }}>{author.name}</Link></div>)}
          </Author>
        </CoverContent>
      </BGImageWrapper>
    </header>

  )
}
export default FullCover