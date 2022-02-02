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
			
			   <title>About this App</title>
			
			   <h1 className={heading}>{title}</h1>
				
			      
                - A Gatsby Markdown Blog made as a static Site
                <br/> <br/>
				
                <b>Last Updated</b>  <br />
                - 02-02-2022 <br /> <br />
                				
                <b>Main functionality</b> <br />
                
                - Upgraded from Node 12.16 to Node 14.17 <br />				
			    - Showing some of the power Gatsby <br />
				- GraphQL => A query language<br />
				- Markdown used in the Posts of the Blog<br />
                - Routing by Gatsby and React <br />
				- Custom 404 Error page<br />
				- Serving static assets like images, styles and fonts <br />
				- Support for the IE 11 Browser<br /><br />
						                  
			   
                <b>Module Bundler</b> <br />
                
                - Webpack is used under the hood <br /> <br />
				
                
				<b>The Gatsby Blog</b> <br />
                            
                - React <br />
				- JavaScript <br />
                - HTML <br />
                - CSS <br /> <br />
				
				                				
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