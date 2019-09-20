import React from 'react'
import { convertToDueToneToMatrixString } from './helpers'

const DuoToneImage = ({ primary, secundary, imageWidth, imageHeight, imageUrl }) => {
  const duoToneString = convertToDueToneToMatrixString(primary, secundary)
  const filterName = 'Duotone__' + primary + '_x_' + secundary;
  const width = imageWidth !== undefined ? imageWidth : 400
  const height = imageHeight !== undefined ? imageHeight : 400
  
  return (
    <div style={{overflow: 'hidden', lineHeight: '0'}}>
      <svg style={{width: '100%', height: '100%', colorInterpolationFilters: 'sRGB' }} width={width} height={height} viewBox={`0 0 ${width} ${height}`} id="duotone" preserveAspectRatio="xMidYMid slice">
        <filter id={filterName}>
          <feColorMatrix type="matrix" values={duoToneString}/>
        </filter>
        <image filter={`url(#${filterName})`} width={width} height={height} xlinkHref={imageUrl}/>
      </svg>
    </div>
  )
}

export default DuoToneImage