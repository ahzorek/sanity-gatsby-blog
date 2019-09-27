import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
    color: ${props => props.colors.ink};
    background-color: ${props => props.colors.paper};
    min-height: 800px;
    box-sizing: border-box;
    transition: all 250ms ease-in-out;
    padding: 2em 0;
    & p:first-child:first-letter {
        float: left;
        font-size: 7rem;
        line-height: 4rem;
        padding-top: 16px;
        padding-right: 10px;
        padding-left: 2px;
        border-radius: 3px;
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
      padding: .4rem;
      margin: -.4rem;
      transition: all 400ms ease-out;
      & :hover, :focus {
        text-decoration: underline;
        background-color: ${props => props.colors.link};
        color: ${props => props.colors.paper}; 
        padding: .2rem;
        margin: -.2rem;
        transition: all 300ms ease-in;
      }
    }
`

const MainContent = ({colors, children, link}) => {
  return (
    <Wrapper colors={colors} link={link}>{children}</Wrapper>
  )
}

export default MainContent