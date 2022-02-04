import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useSiteMetadata } from "../hooks/use-site-metadata"
 
// Webpack will resolve the .js extension and it is optional to use the .js extension
import Header from '../components/header';
import Menu from '../components/menu';
import Bottom from '../components/bottom'; 

import {
  container,
  heading,
 } from '../components/layout.module.css'

export const query = graphql
    `
    query PostsByID($id: String!) {
        mdx(
            id: { eq: $id }
        ){
            body
            frontmatter {
                title
                date(formatString: "DD-MMMM-YYYY")
            }
        }
    }
`
    
const PostPageTemplate = ({ data }) => {
	
	const { title } = useSiteMetadata()
    const { frontmatter, body } = data.mdx
	
    return (
	
        <div className={container}>
		    
			<Header />
            <Menu />			
			
			   <title>{title}</title>	
			   <h1 className={heading}>{title}</h1>
			
			   <h1>{frontmatter.title}</h1>
               <p>{frontmatter.date}</p>
               <MDXRenderer>{body}</MDXRenderer>
			
			<Bottom />
			
        </div>
    )
}
export default PostPageTemplate