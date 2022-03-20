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
						<Link className={navLinkText} to="/about">About this App</Link>
					</li>

					<li className={navLinkItem}>
						<Link className={navLinkText} to="/">Categories</Link>
					</li>

					<li className={navLinkItem}>
						<Link className={navLinkText} to="/listtags">Tags</Link>
					</li>


					<li className={navLinkItem}>
						<Link className={navLinkText} to="/blog">View Projects by Pages</Link>
					</li>


					<li className={navLinkItem}>
						<Link className={navLinkText} to="/listposts">View all Projects</Link>
					</li>

					<li className={navLinkItem}>
						<Link className={navLinkText} to="/searchposts">Search in all Projects</Link>
					</li>


				</ul>
			</nav>

		</div>

	);
}


