import React from 'react'
import styled from 'styled-components'
import {StaticQuery, graphql} from 'gatsby'

const LogoWrapper = styled.span`
  display: flex;
  max-width: 180px;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 700px) {
    max-width: 42px;
  }
`
const HibernativosTitle = styled.h1`
  font-size: 1.4rem;
  line-height: 1;
  font-weight: 600;
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
              <svg viewBox="0 0 42 60">
                <path fill={color} d="M41.62,43.46,33.48,30.17V1.67A1.68,1.68,0,0,0,31.8,0H1.67A1.67,1.67,0,0,0,0,1.67V58.33A1.67,1.67,0,0,0,1.67,60h30.2a1.06,1.06,0,0,0,.31,0l.19-.05.14-.06a1.55,1.55,0,0,0,.22-.12l0,0a1.6,1.6,0,0,0,.48-.49l8.37-13.66a2.47,2.47,0,0,0,0-2.08ZM3.35,3.33H30.13V29H3.35Zm0,33.23L8.21,44.5,3.35,52.44ZM33.48,52.44l-2.59,4.23H4.67L11,46.33H37.22Zm0-9.77H11L4.67,32.33H30.89l2.59,4.23,3.74,6.11Z"/>
                <rect fill={fill} x="3.35" y="3.33" width="26.78" height="25.67"/>
                <polygon fill={fill} points="37.22 42.67 11 42.67 4.66 32.33 30.89 32.33 37.22 42.67"/>
                <polygon fill={fill} points="37.22 46.33 11 46.33 4.67 56.67 30.89 56.67 37.22 46.33"/>
                <polygon fill={fill} points="3.35 52.44 3.35 36.56 8.21 44.5 3.35 52.44"/>
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