import * as React from 'react'
import { navigate, graphql, Link } from 'gatsby'


import {
  container,
  heading,
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
              excerpt(pruneLength: 250)
              frontmatter {
                title
                date(formatString: "DD-MMMM-YYYY")
				tags
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
                        <h1>{frontmatter.title}</h1>
                    </Link>
                    <p>{frontmatter.date}</p>
						
                    <p>{excerpt}</p>
					
                    <div style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingBottom: '2%',
                        fontSize: 12,
                        color: 'grey',
                      }}>	
				
				   {frontmatter.tags.map((tag) => {
							 
                    return [
                      
					  <div
                          key={tag}
                          variant="outlined"
                          onClick={event => { navigate(`/tag/${ tag.toLowerCase() }`) }}
                          style={{
                                 marginRight: '2.5%',
                                 marginLeft: '2.5%',
                                 cursor: 'pointer',
                                 whiteSpace: 'nowrap'
                           }}
                         >
                         <p>
                           {tag}
                         </p>
						
                      </div>
                     ]
					 
                    })}
						
                   </div>
				</div>
					
               ))}
            </div>
			
		 <Bottom />
						
        </div>
    )
}

export default ListPosts