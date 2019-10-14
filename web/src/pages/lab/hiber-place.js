import React, {useState} from 'react'
import Helmet from 'react-helmet'
import { GithubPicker } from 'react-color';

const mainBoard = {position: 'relative', width: '100vw', height: '100vh', top: 0, left: 0, background: '#fdfdfd', overflow: 'hidden'}

const gridDef = function(num, size = 10){
  return Math.round(num / size)
}

const pixels = []

function hiberPlace(){
  let pixWidth = 10; let pixHeight = 10;
  if(typeof window !== 'undefined'){
     pixWidth = Math.round(window.innerWidth / 100)
     pixHeight = Math.round(window.innerHeight / 100)
  }

  const [pixelGrid, setPixels] = useState(pixels)
  const [gridPos, setPos] = useState({x: 0, y: 0})
  const [colorPicker, showPicker] = useState(false)

  const handleColorPicked = (color) => {
    showPicker(!colorPicker)
    console.log(colorPicker)
    setPixels(
      [ ...pixelGrid, 
        {
          x: gridPos.x, 
          y: gridPos.y, 
          color: color.hex
        }
      ]) 
  }
  
  const handleClick = e => {
    setPos({ x: gridDef(e.clientX, pixWidth), y: gridDef(e.clientY, pixHeight)})
    showPicker(true)
    console.log(colorPicker)
  }

  return (
    <>
      <Helmet title={'HiberPlace - a reddit place clone practice lab.'}/>
      <div style={mainBoard} onClick={handleClick}>
        { pixelGrid.map((pixel, index) => 
          <div 
            key={index} 
            style={{
              position: 'absolute', 
              width: pixWidth, height: pixHeight, 
              top: pixel.y * pixHeight, 
              left: pixel.x * pixWidth,
              transform: 'translate(-50%, -50%)', 
              background: pixel.color,
              zIndex: (99999 - index)
            }}/>
        )}
        {colorPicker && 
        <div style={{position: 'absolute', top: gridPos.y * pixHeight, left: gridPos.x * pixWidth, zIndex: 100000, transform: 'translateX(-50%)'}}>
          <GithubPicker onChange={handleColorPicked} triangle="hide" width="100px" />
        </div> 
        }
      </div>
    </>
  )
}

export default hiberPlace
