import React from 'react'
import styled from 'styled-components'

const SwitchWrapper = styled.span`
  width: 30px;
  height: 42px;
`
const LogoWrapper = styled.div`
  display: flex;
  max-width: 180px;
  align-items: center;
  justify-content: space-around;

`
const HibernativosTitle = styled.h1`
  font-size: 22px;
  font-weight: 600;
  font-family: BWHaasGrotesk, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: ${props => props.fontcolor};
  margin-left: 5px;
  @media (max-width: 700px) {
    display: none;
  }
`
const Logo = (props) => {
  const { color, name: siteName } = props
  return (
    <LogoWrapper>
      <SwitchWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 86">
          <path style={{fill: color, vectorEffect: 'non-scaling-stroke'}} d="M59.7 62.3L48 43.2V2.4A2.4 2.4 0 0 0 45.6 0H2.4A2.4 2.4 0 0 0 0 2.4v81.2A2.4 2.4 0 0 0 2.4 86h44.2l.3-.2h.1l.7-.7 12-19.6A4 4 0 0 0 60 64a3.7 3.7 0 0 0-.3-1.7zM4.8 4.8h38.4v36.8H4.8zm0 47.6l7 11.4-7 11.4zM48 75.2l-3.7 6H6.7l9.1-14.8h37.5zm0-14H15.8L6.7 46.3h37.6l3.7 6.1 5.3 8.8z"/>
        </svg>
      </SwitchWrapper>
      <HibernativosTitle fontcolor={color}>{siteName || "Hibernativos"}</HibernativosTitle>
    </LogoWrapper>
  )
}
export default Logo