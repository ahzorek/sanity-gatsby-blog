import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import BackgroundImage from 'gatsby-background-image'
import DisplayDate from '../displayDate'
import clientConfig from '../../../client-config'
import Author from '../author'
import { minQueries } from '../../lib/media'
import { getPos } from '../../lib/helpers'
import {Link} from '../../lib/link'
import Logo from '../../images/logo'

const HalfCover = props => {
  const {title, categories, authors, mainImage, publishedAt, isUpdated, _updatedAt} = props
  const bgSrc = getFluidGatsbyImage( mainImage.asset._id, { maxWidth: 1920 }, clientConfig.sanity )
  const [posY, setY] = useState(true)
  
  const setBar = () => setY(window.scrollY < 10 ? true : false)

  useEffect(() => {
    window.addEventListener('scroll', setBar)
    return () => window.removeEventListener('scroll', setBar)
  })

  if(mainImage) {
    return (
      <Wrapper>
        {mainImage && mainImage.asset !== null && (
          <Photo 
            pos={getPos(mainImage)}
            Tag="section"
            fluid={bgSrc}
            backgroundColor={Object.values(mainImage.asset.metadata)[0].vibrant.color}>
            <MiniLogoBar pos={posY}>
              <Link to='/'><Logo hideText/></Link>
            </MiniLogoBar>
          </Photo>
        )}

        <PostInfo>
          <Subject>{categories[0].title}</Subject>
          <Title>{title}</Title>
          <DisplayDate showUpdate prefix={""} sFormat={"d' de 'MMMM' de 'yyyy"} dateInfo={{publishedAt, isUpdated, _updatedAt}} />
          {authors && <Author items={authors}/>}
        </PostInfo>
      </Wrapper>
    )
  }
}

const Wrapper = styled.header`
  display: grid;
  height: auto;
  grid-template-areas:  "photo"
                        "info";
  @media ${minQueries.Lg}{
    height: 100vh;
    grid-template-areas: "photo info";
  }
`
const Photo = styled(BackgroundImage)`
  position: relative;
  width: 100%;
  height: 480px;
  background-size: cover;
  background-position-x: ${props => props.pos.X};   
  background-position-y: ${props => props.pos.Y};   
  @media ${minQueries.Lg} {
    width: 55vw;
    height: 100vh;
  }
`
const MiniLogoBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: .6rem .6rem .6rem .8rem;
  margin: 1rem;
  transform: ${props => props.pos ? 'translateY(0%)' : 'translateY(-100%)'};
  transition: transform 260ms ease-in-out;
  background-color: rgba(20,20,20,.92);
  background-color: ${props => props.theme.navBg};
  ${props => props.theme.myLogoBlend};

  backdrop-filter: blur(5px);
  & a {
    text-decoration: none;
  }

  /* background-image: linear-gradient(  
    to bottom,
    rgba(20,20,20, 1),
    rgba(20,20,20,.8),
    rgba(20,20,20,.5),
    rgba(20,20,20,.3),
    rgba(20,20,20,.2),
    rgba(20,20,20,.1),
    rgba(20,20,20,.0)
  ); */
`

const PostInfo = styled.section`
  grid-area: info;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  margin: 0 1.2rem -12rem;
  padding: 1.8rem 1.6rem 0;
  transform: translateY(-12rem);
  background-color: ${props => props.theme.mainBg};
  box-shadow: 0 2px 15px 5px rgba(0,0,0,.1);
  & a:hover { color: ${props => props.theme.link}; }
  @media ${minQueries.Lg}{
    width: auto;
    transform: translateY(0);
    box-shadow: none;
    margin: 0;
  }
`
const Title = styled.h1`
	font-weight: 400;
	font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: calc(1.8rem + 1.4vw);
`
const Subject = styled.span`
	display: inline-block;
	text-transform: uppercase;
  font-weight: 600;
`

export default HalfCover