
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
  container,
  categoriesNavLinks,
  categoriesNavLinkItem,
  categoriesNavLinkText
 } from '../components/layout.module.css'


const Categories = ({ pageContext, data }) => {
	
	const { title } = useSiteMetadata()
	
    const { category } = pageContext
    const { edges, totalCount } = data.allMdx
	
    const categoryHeader = `${totalCount} post${
        totalCount === 1 ? "" : "s"
        } categorized with "${category}"`
    
	return (
       
     	  <div className={container}>
		   		    
			<Header />
            <Menu />
			
		    <title>{title}</title>	
			
            <h3>{categoryHeader}</h3>
			
            <ul className={categoriesNavLinks}>
               
   			    {edges.map(({ node }) => {
                    
                    const { title } = node.frontmatter
					const { date } = node.frontmatter
										
                    return (
   						
						  <li className={categoriesNavLinkItem}>
                            
 							 <Link className={categoriesNavLinkText} to={node.fields.slug}>
                                  <h3>{title}</h3> 
                             </Link> 
                            							 
							 {date} 
							 <br /><br />
							
							{ node.excerpt }
                            
							<br /><br />
							<hr />
							
						</li>
                     )
                 })}
				 
             </ul>
						
			<Bottom />
			
        </div>
    )
}

Categories.propTypes = {
	
    pageContext: PropTypes.shape({
        category: PropTypes.string.isRequired,
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
export default Categories

export const pageQuery = graphql`

  query($category: String) {
	  
     allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
             excerpt(pruneLength: 50)
             fields {
                 slug
             }
            frontmatter {
            title
            date(formatString: "DD-MMMM-YYYY")
			
          }
        }
      }
    }
  }
`