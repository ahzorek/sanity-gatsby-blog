import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import DisplayDate from './displayDate'
import Container from './container'
import AuthorList from './author-list'
import { Link } from 'gatsby'
import PostNav from './post-nav'


import styles from './blog-post.module.css'

function BlogPost (props) {
  const {_rawBody, authors, categories, title, mainImage, publishedAt, isUpdated, _updatedAt} = props
  return (
    <article className={styles.root}>
      <PostNav title={title} category={categories[0]} pos={0} />
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
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                <DisplayDate postdate={publishedAt} isUpdate={isUpdated ? isUpdated : false} update={_updatedAt} />
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
      </Container>
    </article>
  )
}

export default BlogPost
