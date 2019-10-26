import React from 'react'
import styled from 'styled-components'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import BackgroundImage from 'gatsby-background-image'

import { getBlogUrl, getPos } from '../lib/helpers'
import {Link} from '../lib/link'
import clientConfig from '../../client-config'
import Logo from '../images/logo'
import NavMenu from './NavMenu'

function hasVideo({bodyText, videoCoverURL = false}){
  let videoBlocks = bodyText && bodyText.filter(({_type}) => (
    _type === 'videoSource' ? true : false ))
  if(videoBlocks.length > 0 || videoCoverURL !== false){
    return true
  } else return false
}

const SpotLight = ({nodes}) => {
  return (
    <>
    <Bar>
      <Logo />
      <NavMenu nodes={nodes}/>
    </Bar>
    <Box>
      <Grid>
        {nodes.slice(0,4).map(({id, title, mainImage, categories, publishedAt, slug, bodyText, videoCoverURL}) => {
          const bgSrc = getFluidGatsbyImage( mainImage.asset._id, { maxWidth: 1920 }, clientConfig.sanity )
          console.log(hasVideo({bodyText, videoCoverURL}))
          return (
            <li key={id}>
              <Link to={getBlogUrl(publishedAt, slug.current)}>
                <Photo
                  Tag="section"
                  pos={getPos(mainImage)}
                  fluid={[bgSrc, `linear-gradient(to top,rgba(0,0,0,.95),rgba(0,0,0,.5),rgba(0,0,0,0))`].reverse()}>
                  {/* <span>{categories[0].title}</span> */}
                  <h1>{title}</h1>
                </Photo>
              </Link>
            </li>
          )
        })}
      </Grid>
    </Box>
    </>
  )
}
const Bar = styled.nav`
  display: flex;
  height: 80px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
`
const Box = styled.section`
  margin: 0 80px 80px;
  height: calc(100vh - 160px);
`
const Grid = styled.ul`
  list-style: none;
  display: grid;
  height: 100%;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:  
  'main main main main second second'
  'main main main main third third'
  'main main main main fourth fourth';
  & > li > a {
    text-decoration: none;
    color: white;
  }
  & > li:first-child {
    grid-area: main;
    & h1 {
      font-size: calc(2rem + 1.2vw);
    }
  }
  & > li:nth-child(2){
    grid-area: second;
  }
  & > li:nth-child(3){
    grid-area: third;
  }
  & > li:nth-child(4){
    grid-area: fourth;
  }
`
const Photo = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position-x: ${props => props.pos.X};   
  background-position-y: ${props => props.pos.Y};
  padding: 1.6rem 1.2rem;
  display: flex;
  align-items: flex-end; 
  & > h1 {
    transition: transform 200ms ease-in-out;
    & :hover {
      transform: translateY(-10px);
    }
  } 
`

export default SpotLight