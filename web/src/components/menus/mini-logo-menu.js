import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Logo from '../../images/logo'
import {Link} from '../../lib/link'

function MiniLogoMenu({right = false}) {
  const [posY, setY] = useState(true)
  const setBar = () => setY(window.scrollY < 10 ? true : false)

  useEffect(() => { 
    window.addEventListener('scroll', setBar)
    return () => window.removeEventListener('scroll', setBar)
  })
  return (
    <MiniLogo 
      display={posY ? 'translateY(0%)' : 'translateY(-100%)'}
      position={right ? `right: 0;` : `left: 0;`}
    >
      <Link to='/'><Logo hideText /></Link>
    </MiniLogo>
  )
}

const MiniLogo = styled.div`
  position: absolute;
  top: 0;
  ${props => props.position}
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: .6rem .6rem .6rem .8rem;
  margin: 1rem;
  transform: ${props => props.display};
  transition: transform 260ms ease-in-out;
  background-color: rgba(20,20,20,.92);
  background-color: ${props => props.theme.navBg};
  ${props => props.theme.myLogoBlend};
  backdrop-filter: blur(5px);
  & a {
    text-decoration: none;
  }
`

export default MiniLogoMenu

