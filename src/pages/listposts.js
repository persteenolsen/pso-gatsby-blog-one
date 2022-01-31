import * as React from 'react'
import { graphql, Link } from 'gatsby'
import logo from "../../static/favicon.ico" 

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from '../components/layout.module.css'


export const query = graphql
`
    query SITE_INDEX_QUERY {
        site {
            siteMetadata {
              title
              description
            }
          }
          allMdx(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {published: {eq: true}}}) {
            nodes {
              id
              excerpt(pruneLength: 250)
              frontmatter {
                title
                date
              }
              fields {
                slug
              }
            }
          }
    }
`

const ListPosts = ({ data }) => {
	
    return (
	
        <div className={container}>
            <div>
			    
				<img src={logo} alt="Logo" />
				<br /><br />
				
				<nav>
				   <ul className={navLinks}>
             
				        <li className={navLinkItem}>
			               <Link className={navLinkText} to="/about">About me</Link>
                </li>
                <li className={navLinkItem}>
						         <Link className={navLinkText} to="/">Back to Home</Link>
				       </li>
				   
				  </ul>
				</nav>
				
				<title>Welcome to the {data.site.siteMetadata.title}</title>	
				 
				<h1 className={heading}>Welcome to the {data.site.siteMetadata.title}</h1>
                <p>{data.site.siteMetadata.description}</p>
							
				 
            </div>

            <div>
                {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
                    <div key={id}>
                    <Link to={fields.slug}>
                        <h1>{frontmatter.title}</h1>
                    </Link>
                        <p>{frontmatter.date}</p>
                        <p>{excerpt}</p>
                    </div>
                ))}
            </div>
			
			 <h2>Hi there! I'm the proud creator of this site, which I built with Gatsby.</h2>
        </div>
    )
}

export default ListPosts