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


const Page404 = () => {
	
    const { title } = useSiteMetadata()
	
    return (
	
        <div className={container}>
		   
		   <Header />
		   <Menu />
		  						
			<title>404 - Page not found</title>	
			
			<h1 className={heading}>{title}</h1>
			           		
            404 - Page not found
            			 
          <Bottom />
			
        </div>
    )
}

export default Page404