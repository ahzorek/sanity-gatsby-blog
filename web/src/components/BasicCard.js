import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import clientConfig from '../../client-config'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import {getBlogUrl} from '../lib/helpers'

const Card = styled.li`
  display: block;
  position: relative;
  box-sizing: border-box;
  font-family: BWHaasGrotesk, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  transition: all 200ms ease-out;
  height: max-content;
  border-radius: .4rem;
  /* background-color: rgba(252,252,252,1); */
  & a {
    text-decoration: none;
    color: rgb(23,23,23);
    transition: all 200ms ease-out;
  }
  & :hover {
    background-color: rgba(252,252,252,.9);
    box-shadow: 0 0 10px 5px rgba(50,50,51,.05);
    transition: all 200ms ease-in;
    overflow: hidden;
    & a {
      transition: all 200ms ease-in;
      color: ${props => `rgb(
        ${props.color.r || 128},
        ${props.color.g || 128},
        ${props.color.b || 128})`
      };
    }
    & :last-child:hover{
      background-color: ${props => `rgb(
        ${props.color.r || 128},
        ${props.color.g || 128},
        ${props.color.b || 128})`
      };
      & a {
        color: white;
      }
    }
  }
`

const Image = styled(Img)`
  max-width: 100%;
  min-height: 200px;
  margin: .8rem .8rem 0;
  border-radius: .3rem;
  overflow: hidden;
  object-fit: cover;
`
const Title = styled.h2`
  font-size: calc(21 / 16 * 1rem);
  line-height: calc(30 / 21);
  padding: 0 .7rem 1rem;
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
  background-color: ${props => `rgb(
        ${props.color.r || 128},
        ${props.color.g || 128},
        ${props.color.b || 128})`
      };
`
const Author = styled.span`

`

const BasicCard = (props) => {
  const {title, categories, mainImage} = props
  
  const fluidProps = getFluidGatsbyImage(
    mainImage.asset._id,
    { maxWidth: 400 },
    clientConfig.sanity
  )

  if (categories[0].color !== null){
    var { r, g, b } = categories[0].color.rgb
  }

  return (
    <Card color={{r, g, b}}> 
      <Link to={getBlogUrl(props.publishedAt, props.slug.current)}>
        <Image fluid={fluidProps} alt={props.mainImage.alt}/>
      </Link>
      <Link to={`/${categories[0].slug.current}`}>
        <Category color={{r,g,b}}>{categories[0].title}</Category>
      </Link>
      <Link to={getBlogUrl(props.publishedAt, props.slug.current)}>
        {console.log(title.length, ' for:  ', title)}
        <Title color={{r,g,b}}>{title}</Title>
      </Link>
      {/* <Author>{'----'}</Author> */}

    </Card>
  )
}

export default BasicCard