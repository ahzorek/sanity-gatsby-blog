import React from 'react'
import styled from 'styled-components'
import PortableText from './portableText'
import { dark, light } from '../lib/color_modes'

const Wrapper = styled.main`
    color: ${props => props.colors.ink};
    background-color: ${props => props.colors.paper};
    min-height: 800px;
    box-sizing: border-box;
    transition: all 250ms ease-in-out;
    padding: 2em 0;
    & p:first-child:first-letter {
        float: left;
        font-size: 6.5rem;
        line-height: 4rem;
        padding-top: .9rem;
        padding-right: .4rem;
        padding-left: .1rem;
        font-family: sans-serif;
        font-weight: 600;
    }
    & h1, h2, h3, h4, h5, h6 {
      text-align: left;
      max-width: 680px;
      margin: inherit;
      margin-left: auto;
      margin-right: auto;
      padding: 1rem 2rem .5rem;
    }

    & p, li {
      font-family: Georgia,Cambria,Times,serif;
      font-style: normal;
      font-size: 21px;
      letter-spacing: -.003em;
      text-align: left;
      max-width: 680px;
      margin: 1rem auto;
      padding: 0 2rem;
    }
    & li {
      list-style-type: square;
      padding: 0 1rem;
    }
    & a {
      color: ${props => props.colors.link};
      text-decoration: none;
      transition: all 400ms ease-out;
      /* padding: .4rem;
      margin: -.4rem; */
      & :hover, :focus {
        text-decoration: underline;
        transition: all 300ms ease-in;
        /* background-color: ${props => props.colors.link};
        color: ${props => props.colors.paper}; 
        padding: .2rem;
        margin: -.2rem; */
      }
    }
`

const MainContent = ({children, isDark}) => {
  const colors = isDark ? dark : light

  return (
    <Wrapper colors={colors}>
      <PortableText blocks={children} />
    </Wrapper>
  )
}

export default MainContent