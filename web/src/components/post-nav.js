import React, { Component } from 'react'
import styled from 'styled-components' 
import { Link } from '../lib/link'

import Logo from '../images/logo'
import styles from './header.module.css'

const Bar = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 2;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: ${props => props.colors.bg};
  color: ${props => props.colors.color};
  padding: 4px 20px 0;
  box-sizing: border-box;
  transition: transform 250ms ease-in-out;
  box-shadow: 0 4px 12px 0 rgba(0,-1,0,.05);
  -webkit-backdrop-filter: blur(5px);
  @media (min-width: 1024px) {
    padding: 4px 100px 0;
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
  font-size: .8rem;
  font-weight: 500;
  letter-spacing: -.01rem;
  margin: 0 0 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;
  @media (max-width: 500px) {
    border-left: solid 1.25pt rgb(20,20,20);
    padding-left: 1rem;
  }
`
const SwitchInput = styled.input`
  display:none;
`
const SwitchLabel = styled.label`
  transform: scale(.7);
	width: 70px;
	height: 35px;
	position: relative;
	background: ${props => props.colors.ink};
	border-radius: 10px;
	display: inline-block;
	transition: all 400ms ease-in-out 0s;
  &::before {
    content:'';
    top:50%;
    right: ${props => props.config};
    width:23px;
    height:23px;
    background: ${props => props.colors.paper};
    border-radius: 6px;
    position:absolute;
    margin-top:-11.5px;
    transition:inherit;
  }
`

const Subject = styled.span`
  display: inline-block;
  font-size: 10pt; 
  border-width: 1.25pt;
  border-style: solid;
  border-color: ${props => props.color};
  border-radius: 0.15rem;
	font-weight: 600;
  padding: .4rem .25rem;
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
class PostNav extends Component {
  state = {
    navPos: -70,
    lastY: 0,
  }

  componentDidMount() {
    //console.log(this.props.pos)
    this.setState({ navPos: this.props.pos })
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { lastY } = this.state; 
    const currentY = window.scrollY;

    if (currentY > lastY) { this.setState({ navPos: -70}) } 
    else if (currentY === 0) { this.setState({ navPos: this.props.pos}) } 
    else { this.setState({ navPos: 0 }) }

    this.setState({ lastY: currentY })
    if (window.scrollY <= 0) { this.setState({ navPos: this.props.pos }) }
  } 

  render() {
    const { title, category, colors: {ink, paper}, darkMode: { func: handleDark, status } } = this.props 
    const switchPos = status ? '4px': '40px'
    const navColors = status ? {bg: 'rgba(13, 14, 14, 0.98)', color: 'rgb(230, 240, 240)'} : {bg: 'rgba(252,252,252,.92)', color: 'rgb(23,23,23)'}


    return (
        <Bar colors={navColors}  style={{top: 0, transform: `translateY(${this.state.navPos}px)`}}>
          {/* LEFT */}
          <SideSlot className={styles.branding}>
            <Link to='/' color={category.catColor ? category.catColor.hex : 'rgb(125,125,125)'}><Logo color={category.catColor ? category.catColor.hex : 'rgb(125,125,125)'} /></Link>
          </SideSlot>
  
          {/* CENTER */}
          <CenterSlot>
            <Link 
              to={`/${category._rawSlug.current}`} 
              style={{ textDecoration: 'none' }} 
              color={category.catColor ? category.catColor.hex : 'rgb(125,125,125)'}
            >
              <Subject color={category.catColor ? category.catColor.hex : 'rgb(125,125,125)'} >{category.title}</Subject>
            </Link>      
            <NavTitle ariaHidden={'true'} title={title}>{title}</NavTitle>
          </CenterSlot>
  
          {/* RIGHT */}
          <SideSlot style ={{justifyContent: 'flex-end'}} >
            {handleDark && 
              <form>
              <SwitchInput
                onChange={(e) => handleDark()}
                id="switch"
                type="checkbox"
              />
              <SwitchLabel
                config={switchPos}
                colors={{ink, paper}}
                htmlFor="switch">
              </SwitchLabel>
            </form>
            }
          </SideSlot>
        </Bar>
      )
  }
} 

export default PostNav
