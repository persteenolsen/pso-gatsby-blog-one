import React from "react"
import { Link } from 'gatsby'

import { useSiteMetadata } from "../hooks/use-site-metadata"
import logo from "../../static/favicon.ico" 

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from '../components/layout.module.css'

const Page404 = () => {
	
    const { title } = useSiteMetadata()
	
    return (
        <div className={container}>
		    <img src={logo} alt="Logo" />
			<br /><br />
			
			<nav>
				 <ul className={navLinks}>
				     <li className={navLinkItem}>
					 
			             <Link className={navLinkText} to="/">Back to Home</Link>
						 
				     </li>
			    </ul>
			</nav>
						
			<title>404 - Page not found</title>	
			
			<h1 className={heading}>{title}</h1>
			           		
            <h2>404 - Page not found</h2>
            			 
            <h2>Hi there! I'm the proud creator of this site, which I built with Gatsby.</h2>
			
        </div>
    )
}

export default Page404