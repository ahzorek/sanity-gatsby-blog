const {isFuture, format, parseISO} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const {format} = require('date-fns')

async function createBlogPostPages (graphql, actions, reporter) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            URLDate: publishedAt(formatString: "YYYY/MM")
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges
    .filter(edge => !isFuture(parseISO(edge.node.publishedAt)))
    .forEach((edge, index) => {
      const {id, slug = {}, URLDate} = edge.node
      const path = `/blog/${URLDate}/${slug.current}/`

      reporter.info(`Creating blog post page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/blog-post.js'),
        context: {id}
      })
    })
}

exports.createPages = async ({graphql, actions, reporter}) => {
  await createBlogPostPages(graphql, actions, reporter)
}
