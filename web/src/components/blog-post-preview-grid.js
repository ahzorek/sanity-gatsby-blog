import React from 'react'
import styled from 'styled-components'

import GridMediumPic from './cards/GridMediumPic'
import {Link} from '../lib/link'
import {minQueries} from '../lib/media'
import Container from '../containers/container__1024'

const Grid = styled.ul`
  display: flex;
  flex-flow: wrap row;
  list-style: none;
  padding-inline-start: 0;
  @supports(display: grid) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem; 
  }
  @media ${minQueries.Md} {
    grid-template-columns: repeat(2,1fr);
  }
  @media ${minQueries.Lg} {
    grid-template-columns: repeat(3,1fr);
  }
`
function BlogPostPreviewGrid ({title, nodes, hideCat, browseMoreHref}) {
  return (
    <>
    <Container>
      {title && <h2>{title}</h2>}
      <Grid>
        {nodes && nodes.map(node => <GridMediumPic 
          hideCat={hideCat} 
          key={node.id} 
          {...node} /> )}
      </Grid>
      {browseMoreHref && (
        <div>
          <Link to={browseMoreHref} color={'#232323'}>Ver mais</Link>
        </div>
      )}
    </Container>
    </>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
