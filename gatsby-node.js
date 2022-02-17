const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value: `/posts${value}`,
    })
  }
}

const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql
    (`
        query {
            allMdx {
                edges {
                    node {
                        id
                        fields {
                        slug
                        }
						 frontmatter {
                         title
                          tags
						  categories
                        }
                    }
                }
            }
		    tagsGroup: allMdx(limit: 2000) {
              group(field: frontmatter___tags) {
                fieldValue
               }
            }
			categoriesGroup: allMdx(limit: 2000) {
              group(field: frontmatter___categories) {
                fieldValue
               }
            }
        }
    `)

  if (result.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query')
  }


  // Extract categories data from query
  const categories = result.data.categoriesGroup.group

  // Make category pages
  categories.forEach(category => {

    // Make the category page
    createPage({
      path: `/category/${_.kebabCase(category.fieldValue)}/`,
      component: path.resolve(`./src/templates/categories-template.js`),
      context: {
        category: category.fieldValue,
      },
    })
  })

  // Extract tag data from query
  const tags = result.data.tagsGroup.group

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tag/${_.kebabCase(tag.fieldValue)}/`,
      component: path.resolve(`./src/templates/tags-template.js`),
      context: {
        tag: tag.fieldValue,
      },
    })
  })



  // Create blog post pages without pagnition
  const posts = result.data.allMdx.edges

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post-template.js`),
      context: { id: node.id },
    })
  })



  // Create blog post pages with pagnition of 5 Posts per Page
  const postspagnition = result.data.allMdx.edges
  const postsPerPage = 5
  const numPages = Math.ceil(postspagnition.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/post-list-pagnition-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })


}


