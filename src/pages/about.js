import React from "react"
import { Link } from 'gatsby'
import { useSiteMetadata } from "../hooks/use-site-metadata"

import me from "../../static/persteenolsen.jpg"
import logo from "../../static/favicon.ico"  

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from '../components/layout.module.css'

const About = () => {
	
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
					 <li className={navLinkItem}>
						 <Link className={navLinkText} to="/listposts">View Posts</Link>
				     </li>
			    </ul>
			</nav>
				
			
			<title>About me</title>
			
			<h1 className={heading}>{title}</h1>
						
            <p><b>Web Developer</b></p>
             
			<img src={me} alt="Me" />
             
			<h2>Hi there! I'm the proud creator of this site, which I built with Gatsby.</h2>
			 
        </div>
    )
}

export default About