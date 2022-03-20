import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

import {
  container,
  heading,
  } from '../components/layout.module.css'
  
 
// Webpack will resolve the .js extension and it is optional to use the .js extension
import Header from '../components/header';
import Menu from '../components/menu';
import Bottom from '../components/bottom';

const About = () => {
	
    const { title } = useSiteMetadata()
	
    return (
	
        <div className={container}>
		    
            <Header />			
			<Menu />				
			
			   <title>About this site</title>
			
			   <h2 className={heading}>{title}</h2>
							      
                - A static site using Gatsby with Markdown files being the Posts which refers to Projects in this Blog. React and GraphQL are used in most of the modules creating the Blog. 
                <br/> <br/>
				
                <b>Last Updated</b>  <br />
                - 20-03-2022 <br /> <br />
                				
                <b>Main functionality</b> <br />

                - The content of the Blog can be updated by Foresty CMS<br/>                
                - The Posts of the Blog refers to Projects must be created in Markdown or Mdx<br />
				- View the Projects by scrolling down the List<br />
                - View the Projects by searching / filtering the Title or Tags <br />
				- View the Projects by pagnition <br />
				- A Category can have one or more Projects because a Projects need to belong to at least one Category<br />
				- One or more Tags can be added to each Projects<br />
				- A Page showing all Categories found in the list of Projects the number of Posts in which the Category appear<br />		
				- A Page showing all Tags found in the list of Projects and the number of Projects in which the Tag appear<br />				
                - GraphQL - A query language<br />
				- Routing by Gatsby and React <br />
				- Custom 404 Error page<br />
				- Serving static assets like images, styles and fonts <br />
				- Support for older Browsers including IE 11<br /><br />
				
				<b>The Gatsby Blog</b> <br />

                - Gatsby<br />
                - Forestry CMS<br />           
                - React <br />
				- JavaScript <br />
                - HTML <br />
                - CSS <br /> <br />
								
			    <b>Node.js Version</b><br/>
				- Node 14.17 <br />	<br />
				
                <b>Module Bundler</b> <br />
                
                - Webpack is used under the hood <br /> <br />
				               
				                				
                <b>Security</b> <br />
             
                - The use of HTTPS<br />
				- The security of Gatsby being a static site 
				<br /> <br />
								
				<b>Hosting</b> <br />
                - The application is hosted at Gatsby Cloud <br /> <br />
             

                <b>Text Editor</b> <br />
             
			    - Visual Studio Code <br />
            			 
           
		    <Bottom />
			 
        </div>
    )
}

export default About