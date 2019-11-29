import React, {createRef} from 'react'
import styled, { keyframes } from 'styled-components'
import mojs from 'mo-js'

function SupportButton(props){
  const {accentColor = '#fa0a32', size = 60, border = '1pt', un = 'px'} = props
  const theButton = createRef()

  const clinchedFist = keyframes`
    0% { 
      opacity: 1;
      box-shadow: 0 0 .1rem ${accentColor};
    }
    
    100% { 
      opacity: .4;
      box-shadow: 0 0 2.8rem ${accentColor};
    }
  `
  const Button = styled.button`
    position: relative;
    width: ${size+un};
    height: ${size+un};
    border: none;
    transition: all 400ms ease;
    outline: none;
    border-radius: 50%; 
    border: solid ${border} ${accentColor};
    background: transparent;
    z-index: 1;
    & ::after {
      content: '';
      position: absolute;
      box-sizing: border-box;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%; 
    }
    & :hover, :focus { 
      & ::after {
        animation: ${clinchedFist} 1s ease-in infinite; 
      }
    }
    & :active {
      background-color: ${accentColor};
      & ::after {
        box-shadow: 1px 1px 25px ${accentColor};
        animation: ${clinchedFist} 2000ms ease-in infinite; 
        transform: scale(0.95);
      }
    }
  `
  const Fist = styled.svg`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 60%;
    fill: ${props => props.color};
    z-index: 2;
    ${Button}:active & {
      fill: ${props => props.theme.mainBg};
    }
  `
  return (
    <Wrapper width={size+un} height={size+un}>
      <span style={{display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0}} ref={theButton}/>
      <Button onClick={(e) => { animate(e, theButton)}} color={accentColor}>
        <Fist color={accentColor} viewBox="0 0 65.18 100">
          <path d="m35.479 39.365c-0.168 0.449-0.277 0.91-0.324 1.379-0.053 0.518-0.039 1.039 0.057 1.555 0.058 0.309 0.131 0.617 0.241 0.918 0.515 1.392 1.539 2.499 2.888 3.119 0.734 0.338 1.514 0.508 2.315 0.508 0.996 0 1.949-0.279 2.781-0.764 0.45-0.262 0.863-0.584 1.227-0.964 0.325-0.339 0.606-0.725 0.839-1.145 0.067-0.121 0.143-0.237 0.201-0.365 0 0 11.078-24.098 11.102-24.147 0.023-0.052 0.334-0.974 0.4-1.345 0.435-2.428-0.783-4.941-3.127-6.02-0.732-0.338-1.512-0.508-2.313-0.508-1.688 0-3.258 0.78-4.3 2.052-0.293 0.359-0.551 0.75-0.748 1.183 1e-3 -4e-3 2e-3 -8e-3 4e-3 -0.011l-6e-3 0.012c-1e-3 1e-3 -2e-3 4e-3 -4e-3 6e-3l-11.096 24.142c-0.058 0.129-0.089 0.263-0.137 0.395z"/>
          <path d="m40.476 12.83c0.235 0.236 0.388 0.544 0.5 0.881 0.263 0.799 0.219 1.822 1e-3 2.859-0.112 0.529-0.262 1.054-0.442 1.551-0.068 0.191-0.137 0.384-0.214 0.564-0.113 0.275-0.262 0.595-0.434 0.933-1.504 2.975-5.374 7.975-14.463 8.285-5e-3 0-0.012 1e-3 -0.017 1e-3l-3.787 7.886c2.366 0.559 6.577 1.881 10.227 4.73l12.345-26.859c0.202-0.438 0.32-0.889 0.401-1.344 0.432-2.431-0.783-4.945-3.127-6.022-0.734-0.336-1.514-0.508-2.313-0.508-1.688 0-3.257 0.779-4.298 2.052-0.296 0.359-0.554 0.751-0.754 1.184 2e-3 -4e-3 2e-3 -6e-3 6e-3 -0.01l-6e-3 0.01-3e-3 7e-3 -1.56 3.395h7.532l0.406 0.405z"/>
          <path d="m25.861 12.424h3.62l2.087-4.549c0.2-0.438 0.319-0.89 0.399-1.344 0.433-2.429-0.782-4.943-3.126-6.021-0.736-0.336-1.514-0.51-2.314-0.51-1.688 0-3.258 0.781-4.299 2.053-0.293 0.359-0.552 0.751-0.751 1.185 0 2e-3 -4e-3 4e-3 -4e-3 6e-3l-4.213 9.18h8.601z"/>
          <polygon points="31.578 7.861 31.581 7.854 31.578 7.861 31.573 7.874"/>
          <polygon points="55.551 28.84 55.55 28.84 55.55 28.841"/>
          <polygon points="44.949 45.252 44.952 45.248 44.95 45.249"/>
          <polygon points="44.954 45.241 44.952 45.245 44.952 45.246"/>
          <path d="m65.18 33.276c0-0.624-0.348-1.915-0.362-1.927-0.785-2.115-2.805-3.628-5.191-3.628-0.501 0-0.979 0.088-1.441 0.213-0.803 0.216-1.528 0.607-2.145 1.131-0.724 0.617-1.282 1.405-1.615 2.315-4e-3 0.012-6e-3 0.026-0.012 0.038l-6.939 14.99h2e-3c-0.205 0.447-0.308 0.913-0.332 1.377-8e-3 0.166 0 0.33 0.013 0.492 0.106 1.305 0.888 2.518 2.16 3.103 0.604 0.279 1.255 0.362 1.89 0.297 0.828-0.086 1.627-0.432 2.242-0.996 0.295-0.271 0.539-0.6 0.731-0.962l3.605-7.787 2.521 1.163 0.25-0.543-3.742 8.143-6e-3 0.012c-0.062 0.135-0.137 0.259-0.211 0.386-0.155 0.278-0.327 0.548-0.518 0.799-0.391 0.519-0.86 0.967-1.379 1.343-1.006 0.733-2.213 1.183-3.494 1.247-0.111 7e-3 -0.218 0.021-0.327 0.021h-1e-3c-0.943 0-1.859-0.202-2.723-0.598-1.292-0.596-2.284-1.566-2.936-2.72-0.314-0.557-0.537-1.157-0.678-1.781-0.053-0.233-0.096-0.466-0.123-0.705-0.43 0.22-0.872 0.412-1.337 0.555-0.776 0.238-1.593 0.368-2.425 0.368h-1e-3c-0.965 0-1.61-0.172-2.511-0.497 0.512 1.676 0.831 3.528 0.831 5.63v10.526h-2.777v-10.526c0-2.521-0.788-4.656-1.598-6.478-3.794-8.545-14.629-10.023-15.182-10.092l-1.914-0.24 6.146-12.802h0.875c0.232 0 0.43-0.029 0.652-0.035 0.538-0.016 1.074-0.033 1.568-0.084 5.297-0.549 8.203-3.018 9.739-5.135 0.133-0.183 0.249-0.367 0.366-0.548 0.272-0.426 0.499-0.842 0.69-1.248 0.219-0.463 0.389-0.906 0.517-1.313 0.195-0.628 0.298-1.174 0.328-1.578h-22.978c-2.75 0-5.154 1.458-6.5 3.64-0.314 0.51-0.572 1.056-0.762 1.635l-7.218 15.48-0.371 0.796c-0.356 0.882-0.557 1.844-0.557 2.855 0 1.382 0.373 2.675 1.014 3.794l0.781 1.12 17.738 23.491v31.984h33.331v3e-3h2.777l2e-3 -23.609 8.821-17.957c0.124-0.223 0.243-0.446 0.337-0.687 0.232-0.594 0.367-1.235 0.378-1.908 2e-3 -0.034 1e-3 -22.563 1e-3 -22.563z"/>
        </Fist>
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
`

function animate(e, theButton){
  const burst1 = new mojs.Burst({
    parent: theButton,
    count: 13,
    pathScale: 'rand(.5, 1.25)',
    radius: { 40: 120 },
    children: {
      shape: 'line',
      stroke: [ 'white', '#FFE217', '#FC46AD', '#D0D202', '#B8E986', '#D0D202' ],
      scale: 1,
      scaleX: { 1 : 0 },
      radius: 'rand(20, 40)',
      degreeShift: 'rand(-90, 90)',
      delay: 'rand(0, 150)',
      isForce3d: true
    }
  })

  const largeBurst = new mojs.Burst({
    parent: theButton,
    count: 3,
    angle: 45,
    radius: { 40: 300  },
    children: {
      shape: 'line',
      stroke: '#FD5061',
      scale: 1,
      scaleX: { 1 : 0 },
      radius: 50,
      degreeShift: 'rand(-45, 45)',
      easing: 'cubic.inout',
      isForce3d: true,
    }
  })

  const baseCircle = {
    parent: theButton,
    scale: { 0: 1 },
  }

  const largeCircle = new mojs.Shape({
    ...baseCircle,
    fill: 'none',
    stroke: 'white',
    strokeWidth: 4,
    opacity: { .25 : 0 },
    radius: 150,
  })

  const smallCircle = new mojs.Shape({
    ...baseCircle,
    fill: 'white',
    opacity: { .5 : 0 },
    radius: 30,
  })

  const MoElements = [burst1, largeBurst, largeCircle, smallCircle]

  MoElements.map(mo => {
    mo.tune({ duration: e.shiftKey ? 2000 : 400 })
      .generate()
        .replay()
  })
}

export default SupportButton

