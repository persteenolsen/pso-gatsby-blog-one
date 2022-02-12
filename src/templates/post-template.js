import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { kebabCase } from 'lodash';
 
// Webpack will resolve the .js extension and it is optional to use the .js extension
import Header from '../components/header';
import Menu from '../components/menu';
import Bottom from '../components/bottom'; 

import {
  container,
  heading,
  postCategoriesNavLinks,
  postCategoriesNavLinkItem,
  postCategoriesNavLinkText,
  postTagsNavLinks,
  postTagsNavLinkItem,
  postTagsNavLinkText
 
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
				tags
				categories
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
			
			   <h2>{frontmatter.title}</h2>
               <p>{frontmatter.date}</p>
			   
			    <ul className={postCategoriesNavLinks}>
			   
                 {frontmatter.categories.map(category => (
				 
                     <li className={postCategoriesNavLinkItem} key={category}>
                        <Link className={postCategoriesNavLinkText} to={`/category/${kebabCase(category)}/`}>
                          {category} 
                        </Link>
                    </li>
				
                 ))}
				 
               </ul>	
			   
			   <ul className={postTagsNavLinks}>
			   
                 {frontmatter.tags.map(tag => (
				 
                     <li className={postTagsNavLinkItem} key={tag}>
                        <Link className={postTagsNavLinkText} to={`/tag/${kebabCase(tag)}/`}>
                          # {tag} 
                        </Link>
                    </li>
				
                 ))}
				 
               </ul>		
			   			   
               <MDXRenderer>{body}</MDXRenderer>
			
			<Bottom />
			
        </div>
    )
}
export default PostPageTemplate