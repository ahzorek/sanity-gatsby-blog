import React from 'react'
import BlogPostPreview from './blog-post-preview'
import {Link} from '../lib/link'

import styles from './blog-post-preview-list.module.css'

function BlogPostPreviewList (props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={styles.list}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} isInList />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref} color={'#232323'}>Ver mais</Link>
        </div>
      )}
    </div>
  )
}

BlogPostPreviewList.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewList
