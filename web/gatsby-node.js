const {isFuture, parseISO} = require('date-fns')

async function createBlogPostPages (graphql, actions, reporter) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityPost( filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } } ) {
        edges {
          node {
            id
            publishedAt
            URLDate: publishedAt(formatString: "MM/YYYY")
            slug {
              current
            }
            categories{
              slug {
                current
              }
            }
          }
        }
      }
      allSanityAuthor {
        edges {
          node {
            id
            name
            slug: _rawSlug(resolveReferences: {maxDepth: 25})
          }
        }
      }
      allSanityCategory {
        edges {
          node {
            id
            title
            slug: _rawSlug(resolveReferences: {maxDepth: 25})    
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []
  const authorEdges = (result.data.allSanityAuthor || {}).edges || []
  const topicEdges = (result.data.allSanityCategory || {}).edges || []

  postEdges
    .filter(edge => !isFuture(parseISO(edge.node.publishedAt)))
    .forEach((edge, index) => {
      const {id, URLDate, slug = {}} = edge.node
      const path = `/${URLDate}/${slug.current}/`

      reporter.info(`Criando a página ${index} em: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/blog-post.js'),
        context: {id}
      })
    })

  authorEdges
    .forEach((edge, index) => {
      const {id, slug = {}} = edge.node
      const path = `/autores/${slug.current}/`

      reporter.info(`Criando a página ${index} em: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/authors.js'),
        context: {id}
      })
    })

  topicEdges
    .forEach((edge, index) => {
      const {id, slug = {}} = edge.node
      const path = `/${slug.current}/`

      reporter.info(`Criando a página ${index} em: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/topic.js'),
        context: {id}
      })
    })
  

}

exports.createPages = async ({graphql, actions, reporter}) => {
  await createBlogPostPages(graphql, actions, reporter)
}
