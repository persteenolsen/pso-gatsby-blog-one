import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'

import {
  container,
  heading,
  categoriesNavLinks,
  categoriesNavLinkItem,
  categoriesNavLinkText
} from '../components/layout.module.css'


// Webpack will resolve the .js extension and it is optional to use the .js extension
import Header from '../components/header';
import Menu from '../components/menu';
import Bottom from '../components/bottom';


export const pageQuery = graphql
  `
  query {
	     allMdx(limit: 2000) {
          group(field: frontmatter___categories) {
          fieldValue
          totalCount
      }
    }
  }
`


const HomePage = ({ data }) => {

  const { title } = useSiteMetadata()
  const allCategories = data.allMdx.group;

  return (

    <div className={container}>

      <Header />
      <Menu />

      <title>View the Projects by Categories</title>

      <h2 className={heading}>{title}</h2>
	  
	  <div>View the Projects by the Categories...</div>
      
	 
      <ul className={categoriesNavLinks}>

          {allCategories.map(category => (

            <li className={categoriesNavLinkItem} key={category.fieldValue}>
              <Link className={categoriesNavLinkText} to={`/category/${kebabCase(category.fieldValue)}/`}>
                {category.fieldValue} ({category.totalCount})
              </Link>
            </li>

           ))}

         </ul>
       		
	   
      <Bottom />

    </div>
  )
}

export default HomePage