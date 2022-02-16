import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash';

import {
  container,
  heading,
  tagsNavLinks,
  tagsNavLinkItem,
  tagsNavLinkText
} from '../components/layout.module.css'


// Webpack will resolve the .js extension and it is optional to use the .js extension
import Header from '../components/header';
import Menu from '../components/menu';
import Bottom from '../components/bottom';


export const pageQuery = graphql
  `
  query {
        allMdx(limit: 2000) {
          group(field: frontmatter___tags) {
          fieldValue
          totalCount
      }
    }
  }
`


const ListTags = ({ data }) => {

  const { title } = useSiteMetadata()
  const allTags = data.allMdx.group;

  return (

    <div className={container}>

     <Header />
     <Menu />

     <title>View Tags</title>

     <h1 className={heading}>{title}</h1>
      
	 <div>View Posts by browsing the Tags...</div>
	   
      <ul className={tagsNavLinks}>

        {allTags.map(tag => (

          <li className={tagsNavLinkItem} key={tag.fieldValue}>
            <Link className={tagsNavLinkText} to={`/tag/${kebabCase(tag.fieldValue)}/`}>
              <h3>#{tag.fieldValue} ({tag.totalCount})</h3>
            </Link>
          </li>

        ))}

      </ul>

      <Bottom />

    </div>
  )
}

export default ListTags