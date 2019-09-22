import React from 'react'
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import styled from 'styled-components' 
import clientConfig from '../../client-config'

const Caption = styled.figcaption`
  display: block;
  font-size: .8rem;
  box-sizing: border-box;
  max-width: ${props => props.width};
  margin: auto auto 2.4rem;
  padding: .5rem;
  overflow: hidden;
`

const ImageCrop = styled(Img)`
  box-sizing: border-box;
  max-width: 700px;
  padding: 1.25rem;
  margin: 2.6rem auto 0;
  box-shadow: 0 4px 12px 0 rgba(0,-1,0,.05);
`

const ImageFull = styled(Img)`
  box-sizing: border-box;
  max-width: 900px;
  margin: 2.6rem auto 0;
  overflow: hidden;
`

export default ({node}) => {
  const fluidProps = getFluidGatsbyImage(
    node.asset._id,
    { maxWidth: node.isFullWidth ? 1600 : 720 },
    clientConfig.sanity
  )

  return (
    <figure style={{padding: 0, margin: 0}}>
      { node.isFullWidth ? <ImageFull fluid={fluidProps} alt={node.alt} /> : <ImageCrop fluid={fluidProps} alt={node.alt} /> }
      { node.showCaption && <Caption width={node.isFullWidth ? '100%' : '700px'}>{node.caption}</Caption>}
    </figure>
  )
}