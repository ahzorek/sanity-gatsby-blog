import React, { useState, useEffect } from 'react'
import styled from 'styled-components' 
import { Link } from '../lib/link'
import Logo from '../images/logo'
import Switch from './Switch'

const Bar = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: ${props => props.isDark ? 'rgba(13, 14, 14, 0.98)' : 'rgba(252,252,252,.92)'};
  color: ${props => props.isDark ? 'rgb(230, 240, 240)' : 'rgb(23,23,23)'};
  font-weight: 500;
  padding: 0 20px;
  box-sizing: border-box;
  transition: transform 250ms ease-in-out;
  box-shadow: 0 4px 12px 0 rgba(0,-1,0,.05);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  && a {
    display: inline-block;
    padding: 0.5em;
    color: inherit;
    text-decoration: none;
  }
  @media (min-width: 1024px) {
    padding: 0 100px;
  }
`
const SideSlot = styled.span`
  display: flex;
  flex-basis: 20%;
  margin: 0 5px;
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
`
const NavTitle = styled.span`
  font-size: 10pt;
  letter-spacing: -.01rem;
  margin: 0 0 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;
`
const Subject = styled.span`
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
  @media (max-width: 600px) {
    display: none;
  }
`


  const PostNav = ({ title, category, darkModeToggle, isDark, layoutType, hideToggle }) => {
    let navStart = true
      if(layoutType === 'fullCover') { navStart = false }
      if(layoutType === 'halfCover') { navStart = false }
      
    const [showNav, setNav] = useState(navStart)
    const [lastY, setYpos] = useState(0)
    
    useEffect(() => {
      const handleScroll = () => {
        const currentY = typeof window !== 'undefined' ? window.scrollY : 0;
        if ((lastY - currentY) < 0) { setNav(false) } 
          else if (currentY === 0) { setNav(navStart) } 
          else { setNav(true)}
        
        setYpos(currentY) ; if (currentY <= 0) { setNav(navStart)}
      }
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    })

    const accentColor = category.catColor ? category.catColor.hex : 'rgb(128,128,128)'    
    
    
    return (
        <Bar isDark={isDark} style={{top: 0, transform: `translateY(${showNav ? 0 : -80}px)`}}>
          {/* LEFT */}
          <SideSlot>
            <Link to='/' color={accentColor}><Logo color={accentColor} /></Link>
          </SideSlot>
  
          {/* CENTER */}
          <CenterSlot>
            <Link to={`/${category._rawSlug.current}`} color={accentColor}>
              <Subject color={accentColor} >{category.title}</Subject>
            </Link>      
            <NavTitle ariaHidden={'true'} title={title}>{title}</NavTitle>
          </CenterSlot>
  
          {/* RIGHT */}
          <SideSlot style ={{justifyContent: 'flex-end'}} >
            {!hideToggle && 
              <Switch 
                status={isDark} 
                baseColor={isDark ? 'rgb(23, 22, 22)' : 'rgb(245, 245, 251)'} 
                accentColor={accentColor} 
                functionToRun={darkModeToggle}/>
            }
          </SideSlot>
        </Bar>
      )
  }
 

export default PostNav

// class PostNav extends Component {
//   state = {
//     navPos: 0,
//     lastY: 0,
//   }

//   componentDidMount() {
//     const { pos: setPos } = this.props
//     setPos &&
//       this.setState({ navPos: setPos })
//       window.addEventListener('scroll', this.handleScroll)
//   }

//   componentWillUnmount() {
//     window.removeEventListener('scroll', this.handleScroll)
//   }

//   handleScroll = () => {
//     const { pos: setPos } = this.props
//     const { lastY } = this.state; 
//     const currentY = window.scrollY;

//     if ((lastY - currentY) < 0) { this.setState({ navPos: -80}) } 
//       else if (currentY === 0 && setPos !== undefined) { this.setState({ navPos: setPos}) } 
//       else { this.setState({ navPos: 0 }) }

//     this.setState({ lastY: currentY })
//       if (window.scrollY <= 0) { this.setState({ navPos: setPos }) }
//   } 