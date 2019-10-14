import React from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import IosMenu from 'react-ionicons/lib/IosMenu'

import NavMenu from './NavMenu'
import { Link } from '../lib/link'
import Logo from '../images/logo.js'

const Header = ({handleDrawer, nodes, mode, hideNav}) => (
  <HeaderBox>
    <Flexer>
      <Branding>
        <Link to='/' color={'#232323'}><Logo/></Link>
      </Branding>
      <Nav>
        {!hideNav && <NavMenu mode={mode} nodes={nodes}/> }
        <IconButton style={{justifySelf: 'flex-end'}} onClick={handleDrawer} >
          <IosMenu color={mode ? '#fff' : '#000'} fontSize="24pt"/>
        </IconButton>
      </Nav>
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
  align-items: stretch;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
  padding: 1.6rem .5rem;
  `

const Branding = styled.section`
  font-weight: 600;
  align-self: center;
  & a {
    color: inherit;
    text-decoration: none; 
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`

export default Header
