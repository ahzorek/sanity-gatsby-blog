var postIndex = `{
  posts: allSanityPost(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }){
    edges {
      node {
        id
        title
        publishedAt
        dateISO: publishedAt(formatString: "MM/YYYY")
        slug { current }
        categories {
          title
          slug { current }
          color: catColor {
            hex
          }
        }
        keywords
        mainImage {
          caption
          alt
          asset {
            fixed(height: 360, width: 640) {
              srcWebp
              src
            }
          }
        }
      }
    }
  }
}`

const transformData = data => data.posts.edges.map(({ node }) => {
  console.log(`indexando ${node.title}`)
  return {
    objectID: node.id,
    title: node.title,
    slug: node.slug.current,
    publishedAt: node.publishedAt,
    link: `/${node.dateISO}/${node.slug.current}`,
    image: {
      Src: node.mainImage.asset.fixed.src,
      Webp: node.mainImage.asset.fixed.srcWebp,
      caption: node.mainImage.caption,
      alt: node.mainImage.alt
    },
    keywords: node.keywords,
    categories: [...node.categories]
  }
})

const queries = [
  {
    query: postIndex,
    transformer: ({ data }) => transformData(data),
    settings: {
      //optional
    },
  },
]
module.exports = queries