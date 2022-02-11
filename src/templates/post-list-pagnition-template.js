import { kebabCase } from 'lodash';
import React from 'react';
import { graphql, Link } from 'gatsby';


import {
  container,
  heading,
  pageNavigation,
  pageNavigationSpace,
  pageNavigationLink,
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

const BlogPage = ({ data, pageContext }) => {

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
      </div>

      <div className="post-list">
        
        {posts.map(post => (
		
          <div key={post.node.id} className="post-list__item">
           
            <div className="post-list__content">
			
              <h2>{post.node.frontmatter.title}</h2>
			  
              {post.node.frontmatter.tags ? (
               
			   <div className="tags-container">
                  <ul className="taglist">
                    {post.node.frontmatter.tags.map(tag => (
                      <li key={tag + `tag`}>
                        <Link to={`/tag/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
			  
              <p>{post.node.frontmatter.date}</p>
              <div className="post-list__excerpt">
                <p>{post.node.excerpt}</p>
              </div>
			  
              <Link className="button button--small" to={post.node.fields.slug}>
                Read More
              </Link>
			  
            </div>
          </div>
        ))}
		
      </div>
	  
     <br/>
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
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
           
          }
        }
      }
    }
  }
`