---
title: Node Express REST API Membership system + Email notification - JWT and Refresh Token 
date: 2024-08-17
published: true
categories:
  - Node.js
  - REST API
  - React
  - Azure
  - MySQL
tags:
  - node
  - express
  - react
  - sequelize
  - orm
  - mysql
  - azure
  - rest-api
---


Node Express REST API Role based Membership system with Email Verification and Forgot Password using Sequelize ORM towards a MySQL DB - Authentication by JWT + Refresh Tokens


<p>Note: Due to the resource limitations of the Microsoft Azure Free App Service Plan, the initial load time will be up to 30 seconds!</p>

<ul>


<li><a href="https://users.sequelize.persteenolsen.com" target="_blank" title="Try the demo by a React client">Try the demo...</a></li>

</ul>

Volta was used for Node Version Management switching between Node versions

<ul>

<li><a href="https://github.com/persteenolsen/node-express-sequelize-users-api" target="_blank">The Web API at GitHub</a></li>

<li><a href="https://github.com/persteenolsen/react-sequelize-users-client" target="_blank">React Client at GitHub</a></li>

</ul>


<p>Functionality of the Web App</p>
<ul>

<li>JWT authentication with Refresh Tokens</li>
<li>Refresh token rotation</li>
<li>Revoked token reuse detection</li>
<li>Email sign up and verification</li>
<li>Forgot password and reset password functionality</li>
<li>Role based authorization with two roles "User" and "Admin"</li>
<li>CRUD Account management routes with role based access control</li>


</ul>

<p>Tech used for building the Web App</p>
<ul>
<li>Node.js</li>
<li>Sequelize used to implement the ORM at the Web API</li>
<li>The Node.js Web API is hosted at Azure App Service with the Free App Service Plan</li>
<li>The React Client is hosted at a traditional Webhotel</li>
<li>MySQL as the Database for both Dev + Prod</li>
<li>CORS Policy implemented by Node.js and at Azure</li>
<li>JWT Token for access secure routes</li>
<li>Refresh Token by HTTP only Cookie to generate new JWT Tokens</li>

</ul>




