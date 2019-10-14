import React from 'react'
import styled from 'styled-components'

const Switch = ({isOn, accentColor = false, functionToRun}) => {
    return(
      <form style={{display: 'contents'}}title={`${isOn ? 'Desativar o' : 'Ativar o'} modo noturno`}>
        <input style={{display: 'none'}}
          onChange={() => functionToRun()}
          id="switch"
          type="checkbox"
        />
        <SwitchLabel
          status={isOn}
          special_color={accentColor}
          htmlFor="switch">
        </SwitchLabel>
      </form>
    )
}

const SwitchLabel = styled.label`
  display: inline-block;
  position: relative;
  width: 48px;
  height: 26px;
  border-radius: .8rem;
  box-shadow: inset 0 1px 3px rgba(20,20,20,.1);
  background-color: ${props => props.special_color ? props.special_color : props.theme.primaryText};
  &::before {
    content:'';
    position: absolute;
    box-sizing: border-box;
    width: 21px;
    height: 20px;
    border-radius: .8rem;
    top: 3px;
    left: 3px;
    transform: ${props => props.status && 'translateX(21px)'};
    transition: transform 300ms ease-in-out;
    background-color: ${props => props.theme.mainBg};
    box-shadow: ${props => props.status ? '-1px 0 2px 1px rgba(20,20,20,0.2)' : '1px 0 2px 1px rgba(20,20,20,0.2)'}
  }
`

export default Switch