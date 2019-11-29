import React from 'react'
import styled from 'styled-components'
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


import {maxQueries} from '../../lib/media'

const DrawerBox = ({children, handleDrawer}) => {
    return (
        <Wrapper>
          <SideBar>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '.5rem',
              justifyContent: 'flex-end',
            }}
            >
            <IconButton onClick={handleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          {children}
          </SideBar>
          <AwayClick onClick={handleDrawer}/>
        </Wrapper>
    )
}

const Wrapper = styled.aside`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-flow: collumn no-wrap;
`
const AwayClick = styled.div`
  width: 100%;
  height: 100%;
  @media ${maxQueries.Sm}{
    display: none;
  }
`
const SideBar = styled.div`
  min-width: 320px;
  max-width: 480px;
  min-height: 100%;
  height: max-content;
  //padding: 1rem;
  box-sizing: border-box;
  background-color: ${props => props.theme.navBg};
  color: ${props => props.theme.primaryText};
  @media ${maxQueries.Sm}{
    width: 100vw;
  }
`

const CloseDrawer = styled.button`
  all: reset;
  background-color: black;
  margin: 0 0 1rem;
  color: white;
  border: none;
  height: 20px;
  padding: 1rem;
`

export default DrawerBox
