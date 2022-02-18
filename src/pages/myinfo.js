import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

import melisboa from "/static/images-pages/miradouro-lisboa.jpg"

import {
  imageMeLisboa,
  container,
  heading
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
				
               <h4>Per Steen Olsen</h4>				
               <p>Web Developer</p>
			   <p>Denmark</p>
			   
			   <img className={imageMeLisboa} src={melisboa} alt="Me in Lisboa" />
			   
			   
			   <p>In my spare time I like to run, and I have been a member of a running club for many years</p>
             
               <p>I like to travel and have been to many countries and in recent years, mainly in Portugal where I have lived for several periods</p>

               			   
		    <Bottom />
			 
        </div>
    )
}

export default MyInfo