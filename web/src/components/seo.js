import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'
import {imageUrlFor} from '../lib/image-url'
import {buildImageObj} from '../lib/helpers'

function SEO ({description, lang, meta, keywords, title, image}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || (data.site && data.site.description) || ''
        const siteTitle = (data.site && data.site.title) || ''
        const siteAuthor = (data.site && data.site.author && data.site.author.name) || ''
        const metaImage = (image && image.asset) ? imageUrlFor(buildImageObj(image)).width(1200).url() : ''

        return (
          <Helmet
            htmlAttributes={{lang}}
            title={title}
            titleTemplate={title === siteTitle ? '%s' : `%s | ${siteTitle}`}
            link={[
              {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: `static/apple-touch-icon.png`
              },
              {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: 'static/favicon-32x32.png'
              },
              {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: 'static/favicon-16x16.png'
              },
              {
                rel: 'manifest',
                href: 'static/site.webmanifest'
              },
              {
                rel: "mask-icon",
                href: "static/safari-pinned-tab.svg",
                color: "#db1041"
              }
            ].concat()}
            meta={[
              {
                name: 'apple-mobile-web-app-title',
                content: 'Hibernativos'
              },
              {
                name: 'application-name',
                content: 'Hibernativos'
              },
              {
                name: 'msapplication-TileColor',
                content: '#db1041'
              },
              {
                name: 'theme-color',
                content: '#ffffff'
              },
              {
                name: 'description',
                content: metaDescription
              },
              {
                property: 'og:title',
                content: title
              },
              {
                property: 'og:description',
                content: metaDescription
              },
              {
                property: 'og:type',
                content: 'website'
              },
              {
                property: 'og:image',
                content: metaImage
              },
              {
                name: 'twitter:card',
                content: 'summary'
              },
              {
                name: 'twitter:creator',
                content: siteAuthor
              },
              {
                name: 'twitter:title',
                content: title
              },
              {
                name: 'twitter:description',
                content: metaDescription
              }
            ]
              .concat(
                keywords && keywords.length > 0
                  ? {
                    name: 'keywords',
                    content: keywords.join(', ')
                  }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'pt-BR',
  meta: [],
  keywords: []
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(_id: {eq: "siteSettings"}) {
      title
      description
      keywords
      author {
        name
      }
    }
  }
`
