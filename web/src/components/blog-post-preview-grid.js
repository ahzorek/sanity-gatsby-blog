import {Link} from '../lib/link'
import React from 'react'
import styled from 'styled-components'
import BlogPostPreview from './blog-post-preview'

const Grid = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2em;
  /* @media (--media-min-small) {
    grid-template-columns: 1fr 1fr;
  }

  @media (--media-min-medium) {
    grid-template-columns: 1fr 1fr 1fr;
  } */
`

import styles from './blog-post-preview-grid.module.css'

function BlogPostPreviewGrid (props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <Grid className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} />
            </li>
          ))}
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
