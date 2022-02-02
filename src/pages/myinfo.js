import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

import me from "../../static/images-pages/persteenolsen.jpg"

import {
  container,
  heading,
  } from '../components/layout.module.css'
  
 
// Webpack will resolve the .js extension and it is optional to use the .js extension
import Header from '../components/header';
import Menu from '../components/menu';
import Bottom from '../components/bottom';

const MyInfo = () => {
	
    const { title } = useSiteMetadata()
	
    return (
	
        <div className={container}>
		    
            <Header />			
			<Menu />				
			
			   <title>About me</title>
			
			   <h1 className={heading}>{title}</h1>
						
               <p>Web Developer</p>
             
			   <img src={me} alt="Me" />
           
		    <Bottom />
			 
        </div>
    )
}

export default MyInfo