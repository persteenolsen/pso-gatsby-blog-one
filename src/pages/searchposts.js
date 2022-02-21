
import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { kebabCase } from 'lodash';

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


export const pageQuery = graphql
  `
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(pruneLength: 50)
          id
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
  }
`

const BlogIndex = props => {

  const { title } = useSiteMetadata()
  const { data } = props
  const allPosts = data.allMdx.edges

  const emptyQuery = ""

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {

    const query = event.target.value
    const { data } = props
    const posts = data.allMdx.edges || []

    const filteredData = posts.filter(post => {

      const { title, tags } = post.node.frontmatter
      return (

        //  description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags &&
          tags
            .join("")
            .toLowerCase()
            .includes(query.toLowerCase()))
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (

    <div className={container}>

      <Header />
      <Menu />

      <title>Search the Projects</title>

      <h2 className={heading}>{title}</h2>

                  
	  <div>Filter the Projects by Title or Tags...</div>
	  <br />
		
      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          aria-label="Search"
          placeholder="Type here to filter the Projects by Title or Tags..."
          onChange={handleInputChange}
        />
      </div>

      {posts.map(({ node }) => {

        //  const { excerpt } = node
        const { slug } = node.fields
        const { title, date } = node.frontmatter

        return (

          <article key={slug}>

            <header>
              <h4>
                <Link to={slug}>{title}</Link>
              </h4>

              <p>{date}</p>
            </header>

            <section>
              <ul className={postCategoriesNavLinks}>
                {node.frontmatter.categories.map(category => (
                  <li className={postCategoriesNavLinkItem} key={category}>
                    <Link className={postCategoriesNavLinkText} to={`/category/${kebabCase(category)}/`}>
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <ul className={postTagsNavLinks}>
                {node.frontmatter.tags.map(tag => (
                  <li className={postTagsNavLinkItem} key={tag}>
                    <Link className={postTagsNavLinkText} to={`/tag/${kebabCase(tag)}/`}>
                      #{tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <hr />
          </article>
        )
      })}

      <Bottom />

    </div>
  )
}

export default BlogIndex

