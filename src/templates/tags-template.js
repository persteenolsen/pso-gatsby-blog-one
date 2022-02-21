
import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

//import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useSiteMetadata } from "../hooks/use-site-metadata"

// Gets both the Markdown content as well as HTML and JSX from the MDX Posts
import { MDXRenderer } from 'gatsby-plugin-mdx'
 
// Webpack will resolve the .js extension and it is optional to use the .js extension
import Header from '../components/header';
import Menu from '../components/menu';
import Bottom from '../components/bottom'; 

import {
  container,
  tempTagsNavLinks,
  tempTagsNavLinkItem,
  tempTagsNavLinkText
 } from '../components/layout.module.css'


const Tags = ({ pageContext, data }) => {
	
	const { title } = useSiteMetadata()
	
    const { tag } = pageContext
    const { edges, totalCount } = data.allMdx
	
    const tagHeader = `${totalCount} project${
          totalCount === 1 ? "" : "s"
        } tagged with "${tag}"`
    
	return (
       
     	  <div className={container}>
		   		    
			<Header />
            <Menu />	
		    <title>{title}</title>	
			
            <h4>{tagHeader}</h4>
			            
			<ul className={tempTagsNavLinks}>
			
                {edges.map(({ node }) => {
                   
                    const { title } = node.frontmatter
					const { date } = node.frontmatter
					
                    return (
                           
						   <li className={tempTagsNavLinkItem} key={node.fields.slug}>
						                              
							 <Link className={tempTagsNavLinkText} to={node.fields.slug}>
                                 {title} 
                             </Link> 
							
							<br /><br /> 
							{date} 
														
							<br />
							<MDXRenderer>{node.body}</MDXRenderer>
							<br />
							
							<hr />
							 
						</li>
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
		
        allMdx: PropTypes.shape({
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
              date(formatString: "DD-MMMM-YYYY")
            }
		    body
        }
      }
    }
  }
`