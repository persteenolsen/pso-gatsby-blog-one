import React from "react"
import { Link } from 'gatsby'
import me from "/static/images-components/persteenolsen.jpg" 

import {
  imageMe,
  headerNavLinks,
  headerNavLinkItem,
  headerNavLinkText
} from '../components/layout.module.css'


export default function Header() {
  return (
       
      <div>
	  		<ul className={headerNavLinks}>
				
				<li className={headerNavLinkItem}>
			         <Link className={headerNavLinkText} to="/"> 
					   <img className={imageMe} src={me} alt="Me" />
					 </Link>
				</li>
				
				<li className={headerNavLinkItem}>
				     <br /> <br />
					 <Link className={headerNavLinkText} to="/myinfo">Per Steen Olsen</Link>
				</li>
					 					 
			</ul>
			
			
      </div>
   
  );
}


