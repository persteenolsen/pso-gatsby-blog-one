import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash';

import {
  container,
  heading,
  postTagsNavLinks,
  postTagsNavLinkItem,
  postTagsNavLinkText,
  categoriesNavLinks,
  categoriesNavLinkItem,
  categoriesNavLinkText
  } from '../components/layout.module.css'
  
 
// Webpack will resolve the .js extension and it is optional to use the .js extension
import Header from '../components/header';
import Menu from '../components/menu';
import Bottom from '../components/bottom';

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
              excerpt(pruneLength: 50)
              frontmatter {
                title
                date(formatString: "DD-MMMM-YYYY")
				tags
				categories
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
			   	
               <Header />
               <Menu />
				
			   	<title>{data.site.siteMetadata.title}</title>	
				 
			   	<h1 className={heading}>{data.site.siteMetadata.title}</h1>
                <p>{data.site.siteMetadata.description}</p>
							
				 
            </div>

			
            <div>
                {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
								  				   
                    <div key={id}>
										
                    <Link to={fields.slug}>
                        <h2>{frontmatter.title}</h2>
                    </Link>

                    <p>{frontmatter.date}</p>
					
					
				      <ul className={categoriesNavLinks}>
			   
                      {frontmatter.categories.map(category => (
				 
                        <li className={categoriesNavLinkItem} key={category}>
                           <Link className={categoriesNavLinkText} to={`/category/${kebabCase(category)}/`}>
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
					
					
                  <p>{excerpt}</p>				
					
				</div>

               ))}
			   
			   ... <br />
			   
            </div>
			
		 <Bottom />
						
        </div>
    )
}

export default ListPosts