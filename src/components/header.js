import React from "react"
import { Link } from 'gatsby'
import me from "/static/images-components/persteenolsen.jpg" 

import {
  imageMe,
  headerNavLinks,
  headerNavLinkItem,
  headerNavLinkText,
  containerHeader
} from '../components/layout.module.css'


export default function Header() {
  return (
       
      <div className={containerHeader}>
	  
	  		<ul className={headerNavLinks}>
				
				<li className={headerNavLinkItem}>
			         <Link className={headerNavLinkText} to="/myinfo"> 
					   <img className={imageMe} src={me} alt="Me" />
					 </Link>
				</li>
				
				<li className={headerNavLinkItem}>
				    <Link className={headerNavLinkText} to="/">Home</Link> 
				    <br /><br />
				    					
					 <a className={headerNavLinkText} href="https://persteenolsen.netlify.app" target="_blank" rel="noopener noreferrer">Web Projects</a>
                      <br /><br />
					  
				     <Link className={headerNavLinkText} to="/posts/2022-05-10-my-cv/">My CV</Link>
				</li>

				
			</ul>
							
      </div>
   
  );
}


