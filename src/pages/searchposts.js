
import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"


import {
  container,
  heading
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
          excerpt(pruneLength: 200)
          id
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

    const filteredData = posts.filter( post => {
    
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

      <title>View Tags</title>
			
		  <h1 className={heading}>{title}</h1>

      <h2 style={{ textAlign: `left` }}>Type to filter the Posts...</h2>

      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          aria-label="Search"
          placeholder="Type here to filter the posts..."
          onChange={handleInputChange}
        />
      </div>

      {posts.map(({ node }) => {

        const { excerpt } = node

        const { slug } = node.fields
        const { tags, title, date } = node.frontmatter

        return (

          <article key={slug}>
           
            <header>
              <h2>
                <Link to={slug}>{title}</Link>
              </h2>

              <p>{date}</p>
            </header>

            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: tags || excerpt,
                }}
              />
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

