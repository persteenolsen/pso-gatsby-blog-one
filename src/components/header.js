import React from "react"
import { Link } from 'gatsby'
import logo from "../../static/favicon.ico"  

import {
  navLinks,
  navLinkItem,
  navLinkText
} from '../components/layout.module.css'


export default function Header() {
  return (
       
      <div>
	  		<ul className={navLinks}>
				
				<li className={navLinkItem}>
			         <Link className={navLinkText} to="/"> <img src={logo} alt="Logo" /></Link>
				</li>
					 					 
			</ul>
			
			
      </div>
   
  );
}


