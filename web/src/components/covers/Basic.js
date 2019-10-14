import React from 'react'
import { Link } from 'gatsby'

import {buildImageObj} from '../../lib/helpers'
import {imageUrlFor} from '../../lib/image-url'
import PortableText from '../portableText'
import DisplayDate from '../displayDate'
import AuthorList from '../author-list'

import styles from './blog-post.module.css'

function Basic ({_rawBody, authors, categories, title, mainImage, publishedAt, isUpdated, _updatedAt}) {

  return (
    <article className={styles.root}>
      {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .auto('format')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <div style={{maxWidth: '960px', margin: '0 auto'}}>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                <DisplayDate dateInfo={{publishedAt, isUpdated, _updatedAt}} postdate={publishedAt} isUpdate={isUpdated} update={_updatedAt} />
              </div>
            )}
            {authors && <AuthorList items={authors} title='Publicado por' />}
            {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Marcado como</h3>
                <ul>
                  {categories.map(category => (  
                    <li key={category.id}>
                      <Link to={`/${category._rawSlug.current}`}>{category.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
    </article>
  )
}

export default Basic
