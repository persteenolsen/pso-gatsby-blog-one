---
title: .NET 8 REST API Membership system + Email verification  
date: 2024-10-13
published: true
categories:
  - .NET
  - REST API
  - Angular
  - Tests
  - C#
  - SQLite
tags:
  - dot-net
  - angular
  - ef-core
  - sqlite
  - Jasmine
  - Karma
  - swagger
  - c#
  - rest-api
  - sqlite
---


.NET 8 REST API with C# using Entity Framework Core + SQLite consuming an Angular 14 Client - serving as a Membership System

Unit Testing:
<ul>
<li>Karma + Jasmine - Used with the Angular Client</li>
</ul>

<p><a href="https://angular.signup.email.client.persteenolsen.com" target="_blank" title="Angular 14 + Web API in .NET 8 Membership System">Try the demo...</a></p>

<ul>

<li>
<a href="https://github.com/persteenolsen/dotnet-8-signup-email-api" target="_blank">The Web API .NET 8 at GitHub</a>
</li>

<li>
<a href="https://github.com/persteenolsen/angular-14-signup-email-client" target="_blank">The Angular Client at GitHub</a>
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
<li>The .NET 8 Web API is hosted at a traditional Webhotel</li>
<li>The Angular Client is hosted at a traditional Webhotel</li>
<li>SQLite as the Database for both Dev + Prod</li>
<li>CORS Policy implemented by .NET</li>
<li>JWT Token for access secure routes</li>
<li>Refresh Token by HTTP only Cookie to generate new JWT Tokens</li>
<li>Swagger API documentation with routes</li>
</ul>