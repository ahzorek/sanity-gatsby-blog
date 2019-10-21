import React from 'react'
import styled from 'styled-components'
import PortableText from './portableText'

const Wrapper = styled.main`
    min-height: max-content;
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
      color: ${props => props.theme.primaryText};
      font-family: BWHaasGrotesk;
      text-align: left;
      max-width: 680px;
      margin: inherit;
      margin-left: auto;
      margin-right: auto;
      padding: 1rem 2rem .5rem;
    }
    & p, li {
      color: ${props => props.theme.primaryText};
      font-family: Georgia,Cambria,Times,serif;
      font-style: normal;
      font-size: calc(1rem + .4vw);
      letter-spacing: -.003em;
      text-align: left;
      width: 50ch;
      max-width: 680px;
      margin: 1rem auto;
      padding: 0 2rem;
    }
    & li {
      list-style-type: square;
      padding: 0 1rem;
    } 
    & a {
      color: ${props => props.theme.link};
      text-decoration: none;
      transition: all 400ms ease-out;
      & :hover, :focus {
        text-decoration: underline;
        transition: all 300ms ease-in;
      }
    }
`

const MainContent = ({children}) => {
  return (
    <Wrapper>
      <PortableText blocks={children} />
    </Wrapper>
  )
}

export default MainContent