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
						 <Link className={navLinkText} to="/listcategories">Categories</Link>
				     </li>
					 					 
					  <li className={navLinkItem}>
						 <Link className={navLinkText} to="/listtags">Tags</Link>
				     </li>
					 
					 <li className={navLinkItem}>
						 <Link className={navLinkText} to="/listposts">View Posts</Link>
				    </li>
					<li className={navLinkItem}>
						 <Link className={navLinkText} to="/blog">View Posts by pagnition</Link>
				    </li>
					 <li className={navLinkItem}>
						<Link className={navLinkText} to="/searchposts">Search Posts</Link>
				     </li>
					 
					 
					 
			    </ul>
			</nav>
			
      </div>
   
  );
}


