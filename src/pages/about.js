import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

import {
    container,
    heading,
} from '../components/layout.module.css'


// Webpack will resolve the .js extension and it is optional to use the .js extension
import Header from '../components/header';
import Menu from '../components/menu';
import Bottom from '../components/bottom';

const About = () => {

    const { title } = useSiteMetadata()

    return (

        <div className={container}>

            <Header />
            <Menu />

            <title>About this Blog</title>

            <h2 className={heading}>{title}</h2>

           	<b>The purpose of this Blog</b>
			<ul>
            <li>To get experience with Gatsby React GraphQL and Git based CMS systems</li>
            <li>Comparing different technologies with focus on login systems</li>
            <li>Showing the Web Projects I am building by a fast and secure Blog</li>
			<li>Help other developers building Web Projects by fork or download from my GitHub</li>
            <li>Let the readers of the Blog get to know me as well as my IT background</li>
            </ul>
                        
            <b>The static part of the Blog was last updated</b>
            <ul>
			<li>02-12-2022</li>
			</ul>
			

            <b>Decription</b>
			<ul>
			<li>
            A static site using Gatsby with Markdown files being the Posts which refers to Projects in this Blog. React and GraphQL are used in most of the modules creating the Blog
			</li>
			</ul>
            

            <b>Types of Tests performed making this Blog and the Web Projects</b>
			<ul>
			<li>Usability Tests to involve the future Users of the Blog and Projects with the goal of satisfied Users</li>
            <li>End-to-end Tests or Functional Tests for making sure that the workflows work as expected. The authentication of a User could be an example</li>
            <li>Integration Tests across several units to achieve their goals</li>
            <li>Unit Test for testing functions or classes by supplying input and making sure the output is as expected</li>
            </ul>


            <b>Main functionality</b>
            <ul>
            <li>The content of the Blog can be updated by Foresty CMS, GitHub or VS Code</li>
            <li>The Posts of the Blog refers to Projects must be created in Markdown or Mdx</li>
            <li>View the Projects by scrolling down the List</li>
            <li>View the Projects by searching / filtering the Title or Tags</li>
            <li>View the Projects by Pagination</li>
            <li>A Category can have one or more Projects because a Project needs to belong to at least one Category</li>
            <li>One or more Tags can be added to each Project</li>
            <li>A Page showing all Categories found in the Projects and the number of Projects in which the Category appear</li>
            <li>A Page showing all Tags found in the Projects and the number of Projects in which the Tag appear</li>
            <li>GraphQL - A query language</li>
            <li>Routing by Gatsby and React</li>
            <li>Custom 404 Error page</li>
            <li>Serving static assets like images, styles and fonts</li>
            <li>Support for older Browsers including IE 11</li>
            </ul>
			
            <b>The Gatsby Blog</b>
            <ul>
            <li>Gatsby</li>
            <li>Forestry CMS</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            </ul>
			 
            <b>Node.js Version</b>
			<ul>
            <li>Node 14.17</li>
            </ul>
			
            <b>Module Bundler</b>
			<ul>
             <li>Webpack is used under the hood</li>
            </ul>

            <b>Security</b>
			<ul>
            <li>The use of HTTPS</li>
            <li>The security of Gatsby being a static site</li>
            </ul>

            <b>Hosting</b>
			<ul>
			<li>The application is hosted at Gatsby Cloud</li>
			</ul>
			

            <b>Text Editor</b>
			<ul>
			<li>Visual Studio Code</li>
			</ul>

            <Bottom />

        </div>
    )
}

export default About
