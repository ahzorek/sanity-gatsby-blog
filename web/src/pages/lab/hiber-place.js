import React, {useState} from 'react'
import Helmet from 'react-helmet'

const mainBoard = {position: 'relative', width: '100vw', height: '100vh', top: 0, left: 0, background: '#fdfdfd', overflow: 'hidden'}
const gridDef = function(num, size = 10){
  return Math.round(num / size)
}

const pixels = [
  {x: 50, y: 50, color: 'red'}
]

function hiberPlace(){
  let pixWidth = 10; let pixHeight = 10;
  // if(typeof window !== undefined){
  //    pixWidth = Math.round(window.innerWidth / 100)
  //    pixHeight = Math.round(window.innerHeight / 100)
  // }

  const [pixelGrid, setPixels] = useState(pixels)
  const [color, setColor] = useState('#001050')

  const handleClick = e => {
    setPixels(
    [...pixelGrid, {x: gridDef(e.clientX, pixWidth), y: gridDef(e.clientY, pixHeight), color: color}])
    localStorage
  }
  console.log(pixelGrid)


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
      </div>
    </>
  )
  console.log('does this work?')
}

export default hiberPlace
