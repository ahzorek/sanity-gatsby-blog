import React from 'react'
import styled from 'styled-components'
import {StaticQuery, graphql} from 'gatsby'

const LogoWrapper = styled.span`
  display: flex;
  max-width: 180px;
  margin: 2pt 4pt;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 700px) {
    max-width: 42px;
  }
`
const HibernativosTitle = styled.h1`
  font-size: 1.4rem;
  line-height: 1;
  font-weight: 500;
  font-family: BWHaasGrotesk, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: ${props => props.fontcolor};
  margin-block-start: 0;
  margin-block-end: 0;
  margin-left: 5px;
  @media (max-width: 700px) {
    display: none;
  }
`
const Logo = (props) => {
  const { color, color2 } = props
  const fill = color2 === undefined ? 'transparent' : color2
  return (
    <StaticQuery
      query={SiteNameQuery}
      render={data => {
        const {title} = data.site
        return (
          <LogoWrapper>
            <span style={{width: 30, height: 42}}>
              <svg viewBox="0 0 30 42">
                <path fill={color} d="M29.26,30.52l-6-8.69a.74.74,0,0,1-.14-.43V2.22A2.23,2.23,0,0,0,20.88,0H2.22A2.21,2.21,0,0,0,0,2.22V39.78A2.24,2.24,0,0,0,2.22,42H21.81a2.21,2.21,0,0,0,1.81-.94l5.63-8A2.21,2.21,0,0,0,29.26,30.52Zm-7.63-9.08H1.47V2.22a.75.75,0,0,1,.75-.75H20.88a.76.76,0,0,1,.75.75ZM6.06,32.92,1.47,39.56V23.92l4.6,6.74A2,2,0,0,1,6.06,32.92Zm21.71-.36L22.4,40.18a.75.75,0,0,1-.61.31H2.65l5.49-7.93Zm0-1.53H8.15L2.64,23H22.17Z"/>
              </svg>
            </span>
            <HibernativosTitle fontcolor={color}>{title}</HibernativosTitle>
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