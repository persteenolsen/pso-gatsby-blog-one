import * as React from 'react'
import { useSiteMetadata } from "../hooks/use-site-metadata"
import logoreact from "../../static/images-pages/react.png"

import {
  container,
  heading,
  } from '../components/layout.module.css'
  
// Webpack will resolve the .js extension and it is optional to use the .js extension
import Header from '../components/header';
import Menu from '../components/menu';
import Bottom from '../components/bottom';


const HomePage = () => {
	
	const { title } = useSiteMetadata()
	 
    return (
	
        <div className={container}>
            
            <Header />
            <Menu />			
				
			   <title>Welcome</title>
			
			   <h1 className={heading}>{title}</h1>
			
			   <img src={logoreact} alt="React" />
			
            <Bottom />			
       	   
	   </div>
    )
}

export default HomePage