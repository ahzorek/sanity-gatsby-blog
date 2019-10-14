import React from 'react'
import styled from 'styled-components'
import {maxQueries} from '../../lib/media'

const Wrapper = styled.div`
  width: 350px;
  min-height: max-content;
  height: 100%;
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
          <CloseDrawer onClick={handleDrawer}>Fechar Barra</CloseDrawer>
          {children}
        </Wrapper>
    )
}

export default DrawerBox
