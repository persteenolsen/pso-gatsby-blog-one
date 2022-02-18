import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash';
//import { MDXRenderer } from 'gatsby-plugin-mdx'

import {
  container,
  heading,
  postTagsNavLinks,
  postTagsNavLinkItem,
  postTagsNavLinkText,
  postCategoriesNavLinks,
  postCategoriesNavLinkItem,
  postCategoriesNavLinkText
  
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
              excerpt(pruneLength: 150)
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

        <title>View Posts by scolling down the List</title>

        <h1 className={heading}>{data.site.siteMetadata.title}</h1>
		       
	    <div>View Posts by scrolling down the List...</div>

      </div>


      <div>
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (

          <div key={id}>

            <Link to={fields.slug}>
              <h4>{frontmatter.title}</h4>
            </Link>

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
                    #{tag}
                  </Link>
                </li>

              ))}

            </ul>


            <p>{excerpt}</p>

			<hr />
			
          </div>

        ))}

        ... <br />
      
		  
      </div>
     
      <Bottom />

    </div>
  )
}

export default ListPosts