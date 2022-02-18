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
						 <Link className={navLinkText} to="/about">About</Link>
				     </li>
										 
					  <li className={navLinkItem}>
						 <Link className={navLinkText} to="/">Categories</Link>
				     </li>
					 					 
					  <li className={navLinkItem}>
						 <Link className={navLinkText} to="/listtags">Tags</Link>
				     </li>
					 
					<li className={navLinkItem}>
						 <Link className={navLinkText} to="/listposts">View all Posts</Link>
				    </li>
					<li className={navLinkItem}>
						 <Link className={navLinkText} to="/blog">View Posts by Pagnition</Link>
				    </li>
					 <li className={navLinkItem}>
						<Link className={navLinkText} to="/searchposts">Search in all Posts</Link>
				     </li>
					 
					 
					 
			    </ul>
			</nav>
			
      </div>
   
  );
}


