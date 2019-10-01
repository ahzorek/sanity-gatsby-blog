import React from 'react'
import styled from 'styled-components'

const SwitchLabel = styled.label`
	width: 50px;
	height: 26px;
	position: relative;
	background: ${props => props.colors.accentColor};
	border-radius: 25px;
	display: inline-block;
  transition: all 200ms ease-in-out 0s;
  box-shadow: inset 0 1px 3px rgba(20,20,20,.1);
  &::before {
    content:'';
    right: ${props => props.status ? '4px': '24px'};
    width: 20px;
    height: 18px;
    background: ${props => props.colors.baseColor};
    border-radius: 20px;
    position:absolute;
    margin-top: 4px;
    transition: inherit;
    box-shadow: ${props => props.status ? '-1px 0 2px 1px rgba(20,20,20,0.2)' : '1px 0 2px 1px rgba(20,20,20,0.2)'}
  }
`

const Switch = ({status, baseColor, accentColor, functionToRun}) => {
    return(
      <form style={{display: 'flex'}}>
        <input style={{display: 'none'}}
          onChange={() => functionToRun()}
          id="switch"
          type="checkbox"
        />
        <SwitchLabel
          status={status}
          colors={{baseColor, accentColor}}
          htmlFor="switch">
        </SwitchLabel>
      </form>
    )
}

export default Switch