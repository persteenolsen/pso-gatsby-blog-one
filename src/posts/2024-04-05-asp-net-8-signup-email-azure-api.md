---
title: .NET 8 REST API Membership system + Email verification - Azure and GH Pages 
date: 2025-05-26
published: true
categories:
  - .NET
  - REST API
  - Angular
  - Tests
  - C#
  - MS SQL
  - Azure
  - DevOps
  - GitHub Pages
tags:
  - dot-net
  - angular
  - ef-core
  - ms-sql
  - Jasmine
  - Karma
  - swagger
  - c#
  - ms-sql
  - devops
  - rest-api
---


.NET 8 REST API at Azure with C# using Entity Framework Core + MS SQL consuming an Angular 14 Client at GH Pages - serving as a Membership System

<p>Note: Due to the resource limitations of the Microsoft Azure Free App Service Plan, the initial load time will be up to 30 seconds!</p>

Unit Testing:
<ul>
<li>Karma + Jasmine - Used with the Angular Client</li>
</ul>

<p><a href="https://persteenolsen.github.io/angular-14-example-gh-pages" target="_blank" title="Angular 14 + RESTful Web API in .NET 8 Membership System">Try the demo...</a></p>

<ul>

<li>
<a href="https://github.com/persteenolsen/angular-14-example-gh-pages" target="_blank">The Angular Client at GitHub</a>
</li>
<li>
The source code of the Web API is hosted at Azure Repos / Private access only
</li>

</ul>

<p>The Web API was made without the ASP.NET Core Identity using custom JWT middleware</p>

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
<li>C#</li>
<li>The .NET 8 Web API is hosted at Azure App Service</li>
<li>DevOps by Azure App Service + Repos for the .NET 8 Web API</li>
<li>The Angular Client is hosted at GH Pages</li>
<li>DevOps by GitHub Actions + Pages for the Angular Client</li>
<li>MS SQL as the Database for both Dev + Prod</li>
<li>CORS Policy implemented by .NET</li>
<li>JWT Token for access secure routes</li>
<li>Refresh Token by HTTP only Cookie to generate new JWT Tokens</li>
<li>Swagger API documentation with routes</li>
</ul>


