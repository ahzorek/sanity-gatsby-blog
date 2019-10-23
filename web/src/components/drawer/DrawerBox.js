import React from 'react'
import styled from 'styled-components'
import {maxQueries} from '../../lib/media'

const Wrapper = styled.aside`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-flow: collumn no-wrap;
`
const CloseButton = styled.div`
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
  padding: 1rem;
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

const DrawerBox = ({children, handleDrawer}) => {
    return (
        <Wrapper>
          <SideBar>
          <CloseDrawer onClick={handleDrawer}>Fechar Barra</CloseDrawer>
          {children}
          </SideBar>
          <CloseButton onClick={handleDrawer}/>
        </Wrapper>
    )
}

export default DrawerBox
