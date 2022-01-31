import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useSiteMetadata } from "../hooks/use-site-metadata"
import logo from "../../static/favicon.ico"  

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

export const query = graphql
    `
    query PostsByID($id: String!) {
        mdx(
            id: { eq: $id }
        ){
            body
            frontmatter {
                title
                date(formatString: "YYYY MMMM Do")
            }
        }
    }
`
    
const PostPageTemplate = ({ data }) => {
	
	const { title } = useSiteMetadata()
    const { frontmatter, body } = data.mdx
	
    return (
        <div className={container}>
		    <img src={logo} alt="Logo" />
			<br /><br />
			
			<nav>
				 <ul className={navLinks}>
				     <li className={navLinkItem}>
			             <Link className={navLinkText} to="/">Back to Home</Link>
				     </li>
			    </ul>
			</nav>
				
			
			<title>{title}</title>	
			<h1 className={heading}>{title}</h1>
			
			<h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <MDXRenderer>{body}</MDXRenderer>
			
			<h2>Hi there! I'm the proud creator of this site, which I built with Gatsby.</h2>
			
        </div>
    )
}
export default PostPageTemplate