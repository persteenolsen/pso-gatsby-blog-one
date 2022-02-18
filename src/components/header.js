import React from "react"
import { Link } from 'gatsby'
import logo from "/static/images-components/favicon.ico"  

import {
  headerNavLinks,
  headerNavLinkItem,
  headerNavLinkText
} from '../components/layout.module.css'


export default function Header() {
  return (
       
      <div>
	  		<ul className={headerNavLinks}>
				
				<li className={headerNavLinkItem}>
			         <Link className={headerNavLinkText} to="/"> <img src={logo} alt="Logo" /></Link>
				</li>
				
				 <li className={headerNavLinkItem}>
				     <br />
					 <Link className={headerNavLinkText} to="/myinfo">Per Steen Olsen</Link>
				 </li>
					 					 
			</ul>
			
			
      </div>
   
  );
}


