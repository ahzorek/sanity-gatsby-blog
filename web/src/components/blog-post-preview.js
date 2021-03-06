import React from 'react'
import {Link} from 'gatsby'
import {buildImageObj, cn, getBlogUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import DisplayDate from './displayDate'

import PortableText from './portableText'

import styles from './blog-post-preview.module.css'
import {responsiveTitle3} from './typography.module.css'

function BlogPostPreview (props) {
  const { title, slug, mainImage, _rawExcerpt, publishedAt, isUpdated, _updatedAt, isInList} = props

  return (
    <Link className={isInList ? styles.inList : styles.inGrid} to={getBlogUrl(publishedAt, slug.current)}>
      <div className={styles.leadMediaThumb}>
        {mainImage && mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .auto('format')
              .url()}
            alt={mainImage.alt}
          />
        )}
      </div>
      <div className={styles.text}>
        <h3 style={{fontFamily: 'BWHaasGrotesk'}} className={cn(responsiveTitle3, styles.title)}>{title}</h3>
          {_rawExcerpt && (
            <div className={styles.excerpt}>
              <PortableText blocks={_rawExcerpt} />
            </div>
          )}
        <div className={styles.date}>
          <DisplayDate dateInfo={{publishedAt, isUpdated, _updatedAt}}/>
        </div>
      </div>
    </Link>
  )
}

export default BlogPostPreview