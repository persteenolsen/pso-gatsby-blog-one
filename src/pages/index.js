import * as React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from "../hooks/use-site-metadata"
import logoreact from "../../static/react.png"
import logo from "../../static/favicon.ico" 

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from '../components/layout.module.css'


const HomePage = () => {
	
	const { title } = useSiteMetadata()
	 
    return (
	
        <div className={container}>
            <div>
			    
				<img src={logo} alt="Logo" />
				<br /><br />
				
				<nav>
				   <ul className={navLinks}>
				        <li className={navLinkItem}>
			               <Link className={navLinkText} to="/about">About me</Link>
						</li>
						<li>
						   <Link className={navLinkText} to="/listposts">View Posts</Link>
				       </li>
				   
				  </ul>
				</nav>
								
				
			<title>Welcome</title>
			
			<h1 className={heading}>{title}</h1>
			
			<img src={logoreact} alt="React" />
			
			<h2>Hi there! I'm the proud creator of this site, which I built with Gatsby.</h2>
			 
        </div>
	   
	   </div>
    )
}

export default HomePage