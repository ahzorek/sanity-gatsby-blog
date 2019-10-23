import React, {useContext} from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import NavMenu from './NavMenu'
import { Link } from '../lib/link'
import Logo from '../images/logo.js'

const Header = ({handleDrawer, nodes, hideNav}) => (
  <HeaderBox>
    <Flexer>
      <Branding>
        <MenuButton onClick={handleDrawer} >
          <MenuIcon/>
        </MenuButton>
        <Link to='/' color={'#232323'}><Logo/></Link>
      </Branding>
      {!hideNav && <NavMenu nodes={nodes}/> }
    </Flexer>
  </HeaderBox>
)
const HeaderBox = styled.header`
  display: block;
  width: 100%;
  width: 100vw;
  background-color: ${props => props.theme.contrastBg};
  box-shadow: 0 4px 12px 0 rgba(0,0,0,.05);
  z-index: 1020;
  top: 0;
`
const Flexer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: flex;
  height: 80px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;

`
const Branding = styled.section`
  justify-self: flex-start;
  display: flex;
  justify-content: flex-end;
  font-weight: 600;
  & a {
    color: inherit;
    text-decoration: none; 
  }
`
const MenuButton = styled(IconButton)`
  justify-self: flex-start;
  color: ${props => props.theme.primaryText};
`
export default Header
