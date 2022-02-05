import React from "react"
import { Link } from 'gatsby'

import {
  navLinks,
  navLinkItem,
  navLinkText
} from '../components/layout.module.css'


export default function Menu() {
  return (
       
      <div>
	      	<nav>
				 <ul className={navLinks}>
				     <li className={navLinkItem}>
			             <Link className={navLinkText} to="/">Home</Link>
					 </li>
					   <li className={navLinkItem}>
						 <Link className={navLinkText} to="/about">About this App</Link>
				     </li>
					  <li className={navLinkItem}>
						 <Link className={navLinkText} to="/myinfo">Per Steen Olsen</Link>
				     </li>
					 <li className={navLinkItem}>
						 <Link className={navLinkText} to="/listposts">View Posts</Link>
				     </li>
					  <li className={navLinkItem}>
						 <Link className={navLinkText} to="/listtags">View Tags</Link>
				     </li>
					 
			    </ul>
			</nav>
			
      </div>
   
  );
}


