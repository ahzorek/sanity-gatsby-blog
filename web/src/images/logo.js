import React from 'react'
import styled from 'styled-components'
import {StaticQuery, graphql} from 'gatsby'
import { minQueries } from '../lib/media'

const SVG = styled.svg`
  width: 30px;
  height: 42px;
  fill: ${props => props.accent ? props.accent : props.theme.primaryText};
`
const LogoWrapper = styled.i`
  display: flex;
  width: max-content;
  margin: 2pt 4pt;
  align-items: center;
  justify-content: space-around;
`
const HibernativosTitle = styled.span`
  display: none;
  font-size: 1.4rem;
  font-style: normal;
  line-height: 0;
  font-weight: 400;
  font-family: BWHaasGrotesk, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: ${props => props.accent ? props.accent : props.theme.primaryText};
  /* margin-block-start: 0;
  margin-block-end: 0; */
  margin-left: 5px;
  @media ${minQueries.Sm} {
    display: block;
  }
`
const Logo = ({ color, hideText }) => {
  return (
    <StaticQuery
      query={SiteNameQuery}
      render={data => {
        const {title} = data.site
        return (
          <LogoWrapper title={title}>
            <SVG accent={color} viewBox="0 0 30 42">
              {/* <path d="M29.26,30.52l-6-8.69a.74.74,0,0,1-.14-.43V2.22A2.23,2.23,0,0,0,20.88,0H2.22A2.21,2.21,0,0,0,0,2.22V39.78A2.24,2.24,0,0,0,2.22,42H21.81a2.21,2.21,0,0,0,1.81-.94l5.63-8A2.21,2.21,0,0,0,29.26,30.52Zm-7.63-9.08H1.47V2.22a.75.75,0,0,1,.75-.75H20.88a.76.76,0,0,1,.75.75ZM6.06,32.92,1.47,39.56V23.92l4.6,6.74A2,2,0,0,1,6.06,32.92Zm21.71-.36L22.4,40.18a.75.75,0,0,1-.61.31H2.65l5.49-7.93Zm0-1.53H8.15L2.64,23H22.17Z"/> */}
              <polygon points="1.39 41.86 23.63 41.86 30 33.21 7.65 33.21 1.39 41.86"/>
              <polygon points="0 23.79 0 40.84 6.33 32.38 0 23.79"/>
              <rect width="23.74" height="21.09"/>
              <polygon points="1.39 22.74 7.66 31.55 30 31.55 23.62 22.74 1.39 22.74"/>
            </SVG>
            {!hideText && <HibernativosTitle accent={color}>{title}</HibernativosTitle>}
          </LogoWrapper>
        )
      }}
    />
  )
}

const SiteNameQuery = graphql`
  query SiteNameQuery_for_Logo {
    site: sanitySiteSettings(_id: {eq: "siteSettings"}) {
      title
    }
  }
`

export default Logo