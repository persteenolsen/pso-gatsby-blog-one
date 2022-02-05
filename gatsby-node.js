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
                        }
                    }
                }
            }
		    tagsGroup: allMdx(limit: 2000) {
              group(field: frontmatter___tags) {
                fieldValue
               }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild('ERROR: Loading "createPages" query')
    }
      
	// Extract tag data from query
    const tags = result.data.tagsGroup.group

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tag/${_.kebabCase(tag.fieldValue)}/`,
		//path: `/tag/${tag.fieldValue.toLowerCase()}/`,
        component: path.resolve(`./src/templates/tags-template.js`),
        context: {
          tag: tag.fieldValue,
      },
    })
  })
	
	
    // Create blog post pages.
    const posts = result.data.allMdx.edges

    posts.forEach(({ node }, index) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/post-page-template.js`),
            context: { id: node.id },
        })
    })
}

