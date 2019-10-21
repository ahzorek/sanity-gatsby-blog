import React from 'react';
import {StaticQuery, graphql, Link} from 'gatsby'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import DuoToneImage from '../lib/duotone'

const ImageRenderer = ({mainImage, altColor}) => {
  const paletes = Object.values(mainImage.asset.metadata)[0]

  return (
    <div>
      {Object.values(paletes).map((x, index) => (
        <div 
          key={index} 
          style={{ 
              display: 'inline-block',
              width: '70px', 
              height: '40px', 
              background: x.color, 
              color: 'white' 
            }}>
          {x.color}
        </div>
      ))}
      <DuoToneImage 
        imageUrl={imageUrlFor(buildImageObj(mainImage))
          .width(1200)
          .url()}
        primary={altColor !== undefined ? altColor : paletes.vibrant.color}
        secundary={'#f07aff'}
        imageWidth={600}
      />
    </div>
  )
}

export default ImageRenderer;
