
import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

//import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useSiteMetadata } from "../hooks/use-site-metadata"
 
// Webpack will resolve the .js extension and it is optional to use the .js extension
import Header from '../components/header';
import Menu from '../components/menu';
import Bottom from '../components/bottom'; 

import {
  container
 } from '../components/layout.module.css'


const Tags = ({ pageContext, data }) => {
	
	const { title } = useSiteMetadata()
	
    const { tag } = pageContext
    const { edges, totalCount } = data.allMdx
	
    const tagHeader = `${totalCount} post${
        totalCount === 1 ? "" : "s"
        } tagged with "${tag}"`
    
	return (
       
     	  <div className={container}>
		   		    
			<Header />
            <Menu />	
		    <title>{title}</title>	
			
            <h1>{tagHeader}</h1>
			
            <ul>
                {edges.map(({ node }) => {
                    // const { slug } = node.fields
                    const { title } = node.frontmatter
                    return (
                        <article key={node.fields.slug}>
                            <header>
                                <h2>
                                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                                        {title}
                                    </Link>
                                </h2>
                            </header>
                            <section>
                              
                            </section>
                        </article>
                    )
                })}
            </ul>
			
			<Bottom />
			
        </div>
    )
}

Tags.propTypes = {
	
    pageContext: PropTypes.shape({
        tag: PropTypes.string.isRequired,
    }),
	
    data: PropTypes.shape({
		
        allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired,
                        }),
                        fields: PropTypes.shape({
                            slug: PropTypes.string.isRequired,
                        }),
                    }),
                }).isRequired
            ),
        }),
    }),
}
export default Tags

export const pageQuery = graphql`

  query($tag: String) {
	  
     allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
            excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`