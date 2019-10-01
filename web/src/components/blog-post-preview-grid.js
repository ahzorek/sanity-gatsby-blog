import {Link} from '../lib/link'
import React from 'react'
import styled from 'styled-components'
import BlogPostPreview from './blog-post-preview'
import BasicCard from './BasicCard'
import {Widths} from '../lib/helpers'

const { Medium, Large } = Widths

const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  margin: 0;
  padding: 0;
  list-style: none;
  @media (min-width: ${Medium}) {
    grid-template-columns: repeat(2,1fr);
  }
  @media (min-width: ${Large}) {
    grid-template-columns: repeat(3,1fr);
  }
`
import styles from './blog-post-preview-grid.module.css'

function BlogPostPreviewGrid (props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <Grid>
        {props.nodes && props.nodes.map(node => <BasicCard key={node.id} {...node} /> )}
      </Grid>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref} color={'#232323'}>Ver mais</Link>
        </div>
      )}
    </div>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
