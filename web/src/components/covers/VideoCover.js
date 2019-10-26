import React from 'react' 
import styled from 'styled-components' 
import Img from 'gatsby-image' 
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import DisplayDate from '../displayDate' 
import Author from '../author' 
import clientConfig from '../../../client-config' 
import {minQueries, maxQueries} from '../../lib/media' 
import ReactPlayer from 'react-player'


const Media = styled.section`
  max-width: 960px;
  height: 720px;
  margin: 0 auto;
  position: relative;
  /* padding-top: 56.25%; Player ratio: 100 / (1280 / 720) */
  overflow: hidden;
`

const VideoBlock = ({source, staticCover = true}) => {
  if(!source)
    return false
  
  return (
    <Media>
      <ReactPlayer
        style={{ position: 'absolute', top: 0, left: 0 }} 
        url={source}
        width='100%'
        height='100%'
        playing
        light={staticCover}
        pip
      />
    </Media>
  )
}

const VideoCover = ({title, categories, authors, mainImage, videoCoverURL, publishedAt, isUpdated, _updatedAt }) => {
  const coverBg = getFluidGatsbyImage(mainImage.asset._id, { maxWidth: 1920 }, clientConfig.sanity)
  console.log(coverBg)
  return (
    <ContentWrapper>
      {/* <Subject>{categories[0].title}</Subject> */}
      <Title>{title}</Title>
      <section style={{maxWidth: 620, margin: '1rem auto 2rem', display: 'flex', flexFlow: 'row wrap'}}>
        <Author items={authors}/>
        <DisplayDate dateInfo={{publishedAt, isUpdated, _updatedAt}} />
      </section>
      { videoCoverURL && <VideoBlock source={videoCoverURL} staticCover={coverBg.src} />}
      { !videoCoverURL && mainImage && mainImage.asset !== null && (
        <figure style={{margin: 'auto'}}>
          <CoverImage fluid={coverBg} alt={title} />
          <CoverCaption>{mainImage.caption}</CoverCaption>
        </figure>
      )}
    </ContentWrapper>
  )
}

const ContentWrapper = styled.section`
  && {
    box-sizing: border-box;
    width: 100%;
    padding: 6rem 1rem 0;
    font-family: sans-serif;
  }
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
 && {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 4vw;
    font-weight: 400;
    /* margin: .2rem auto .6rem; */
    max-width: max-content;
    line-height: 1.2;
    /* @media ${maxQueries.Sm} { font-size: 1.8rem }
    @media ${minQueries.XL} { font-size: 3.6rem }  */
 }
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
export default VideoCover