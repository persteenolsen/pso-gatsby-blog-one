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
			         <Link className={headerNavLinkText} to="/"> 
					   <img className={imageMe} src={me} alt="Me" />
					 </Link>
				</li>
				
				<li className={headerNavLinkItem}>
				    <Link className={headerNavLinkText} to="/myinfo">Per Steen Olsen</Link>
				</li>
				
			</ul>
				
      </div>
   
  );
}


