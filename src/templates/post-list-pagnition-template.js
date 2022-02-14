import { kebabCase } from 'lodash';
import React from 'react';
import { graphql, Link } from 'gatsby';

import { useSiteMetadata } from "../hooks/use-site-metadata"


import {
  container,
  heading,
  pageNavigation,
  pageNavigationSpace,
  pageNavigationLink,
  postCategoriesNavLinks,
  postCategoriesNavLinkItem,
  postCategoriesNavLinkText,
  postTagsNavLinks,
  postTagsNavLinkItem,
  postTagsNavLinkText,
 
} from '../components/layout.module.css'


// Webpack will resolve the .js extension and it is optional to use the .js extension
import Header from '../components/header';
import Menu from '../components/menu';
import Bottom from '../components/bottom';

const BlogPage = ({ data, pageContext }) => {
  
  const { title } = useSiteMetadata()
  
  const posts = data.allMdx.edges;
  const { currentPage, numPages } = pageContext;
  const pathPrefix = '/blog';
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1
      ? `${pathPrefix}/`
      : `${pathPrefix}/${(currentPage - 1).toString()}`;
  const nextPage = `${pathPrefix}/${(currentPage + 1).toString()}`;

  return (

    <div className={container}>

      <div>
        		 
        <Header />
        <Menu />
		
		<title>View Posts by pagnition</title>
		<h1 className={heading}>{title}</h1>
				   
		<div>View Posts by the navigation at the bottom of the Page...</div>
		
      </div>

      <div>

        {posts.map(post => (

          <div key={post.node.id} >

            <div>
              
			  <Link to={post.node.fields.slug}>
                  <h2>{post.node.frontmatter.title}</h2>
			  </Link>
			  
			  <p>{post.node.frontmatter.date}</p>
			  
			  <ul className={postCategoriesNavLinks}>

                {post.node.frontmatter.categories.map(category => (

                <li className={postCategoriesNavLinkItem} key={category}>
                  <Link className={postCategoriesNavLinkText} to={`/category/${kebabCase(category)}/`}>
                    {category}
                  </Link>
                </li>

              ))}

              </ul>
			  
			  
              {post.node.frontmatter.tags ? (

                <div>
                  <ul className={postTagsNavLinks}>
                    {post.node.frontmatter.tags.map(tag => (
                      <li className={postTagsNavLinkItem} key={tag + `tag`}>
                        <Link className={postTagsNavLinkText} to={`/tag/${kebabCase(tag)}/`}> #{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              						  
              <div>
                <p>{post.node.excerpt}</p>
              </div>

              <Link to={post.node.fields.slug}>
                Read More
              </Link>

            </div>
          </div>
        ))}

      </div>

      <br />
      <hr />

      <div className={pageNavigation}>

        {!isFirst && (
          <Link className={pageNavigationLink} to={prevPage} rel="prev">
            Previous Page
          </Link>
        )}

        <div className={pageNavigationSpace}></div>

        {Array.from({ length: numPages }, (_, i) => (
          <Link className={pageNavigationLink}
            key={`pagination-number${i + 1}`}
            to={`${pathPrefix}/${i === 0 ? '' : i + 1}`}
          >
            {i + 1}
          </Link>

        ))}

        <div className={pageNavigationSpace}></div>

        {!isLast && (
          <Link className={pageNavigationLink} to={nextPage} rel="next">
            Next Page
          </Link>
        )}
      </div>

      <hr />
      <br />
      <Bottom />

    </div>
  );
};

export default BlogPage;

// Get all markdown files, in descending order by date, and grab the id, excerpt, slug, date, and title
export const pageQuery = graphql
  `
  query($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 50)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
			categories           
          }
        }
      }
    }
  }
`