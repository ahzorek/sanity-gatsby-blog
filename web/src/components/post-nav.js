import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import IosMenu from 'react-ionicons/lib/IosMenu'

import Switch from './Switch'
import Logo from '../images/logo'
import {Link} from '../lib/link'
import {minQueries} from '../lib/media'

const PostNav = ({ title, category, darkModeToggle, layoutType, handleDrawer, mode }) => {
  let navStart
  if((layoutType === 'fullCover') || (layoutType === 'halfCover')){ 
    navStart = false 
  } else navStart = true
    
  const [showNav, setNav] = useState(navStart)
  const [lastY, setY] = useState(0)
  const [displayTitle, setDisplay] = useState(false)
  
  const handleScroll = () => {
    const currentY = typeof window !== 'undefined' ? window.scrollY : 0;

    if (((lastY - currentY) < 0) && currentY > 400 ){ setNav(false) } 
      else if (currentY === 0) { setNav(navStart) } 
        else if (currentY > 400){ setNav(true) }
    setY(currentY); if (currentY <= 0) { setNav(navStart) }

    if(lastY < 400) {setDisplay(false)} else { setDisplay(true) }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const accentColor = category.catColor ? category.catColor.hex : 'rgb(128,128,128)'    
    
    
  return (
    <Bar style={{top: 0, transform: `translateY(${showNav ? 0 : -80}px)`}}>
      <SideSlot>
        <Link to='/' color={accentColor}><Logo color={accentColor}/></Link>
      </SideSlot>

      <CenterSlot display={displayTitle}>
        <Link to={`/${category._rawSlug.current}`} color={accentColor}>
          <Subject title={`Ver mais artigos em ${category.title}`} color={accentColor} >{category.title}</Subject>
        </Link>      
        <NavTitle ariaHidden="true" title={title}>{title}</NavTitle>
      </CenterSlot>

      <SideSlot style ={{justifyContent: 'flex-end', alignItems: 'center'}} >
        <SwitchWrapper>
          <Switch isOn={mode} accentColor={accentColor} functionToRun={darkModeToggle}/>
        </SwitchWrapper>
        <IconButton onClick={handleDrawer}>
          <IosMenu fontSize="24pt" color={accentColor} />
        </IconButton>
      </SideSlot>
    </Bar>
  )
}
const SwitchWrapper = styled.section`
  display: none;
  @media ${minQueries.Md}{
    display: contents;
  }
`
const Bar = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: ${props => props.theme.navBg};
  color: ${props => props.theme.navText};
  font-weight: 500;
  padding: 0 20px;
  box-sizing: border-box;
  transition: transform 250ms ease-in-out;
  box-shadow: 0 4px 12px 0 rgba(0,0,0,.05);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  && a {
    display: inline-block;
    padding: 0.5em;
    color: inherit;
    text-decoration: none;
  }
  @media ${minQueries.Lg} {
    padding: 0 80px;
  }
`
const SideSlot = styled.span`
  display: flex;
  flex-basis: 20%;
  @media (max-width: 700px) {
    flex-basis: 10%;
  }
`
const CenterSlot = styled.span`
  flex-basis: 40%;
  flex-grow: 2;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform: ${props => props.display ? 'translateY(0)' : 'translateY(-300%)'};
  transition: transform 300ms ease-in-out;
`
const NavTitle = styled.span`
  font-size: 10pt;
  letter-spacing: -.01rem;
  margin: 0 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;
`
const Subject = styled.span`
  display: none;
  font-size: 10pt; 
  border: 1pt solid ${props => props.color};
  border-radius: .2rem;
  padding: 4pt;
  color: ${props => props.color};
  transition: all 190ms ease;
  &:hover {
    background: ${props => props.color};
    color: white;
  }
  @media ${minQueries.Md} {
    display: inherit;
  }
`
export default PostNav