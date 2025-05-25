---
title: .NET 8 REST API doing Authentication by JWT and Refresh Tokens
date: 2024-05-05
published: true
categories:
  - .NET
  - REST API
  - Angular
  - C#
  - SQLite
tags:
  - dot-net
  - angular
  - c#
  - rest-api
  - sqlite  
---


Angular client towards a REST API by .NET 8 with C# using JWT and Refresh Tokens for Authentication

Traditional webhosting is used for this Application

<ul>

<li>
<a href="https://angular.jwt.refresh.auth.persteenolsen.com" target="_blank" title="Angular + Web API in .NET 8 doing Auth">Try the demo</a>
</li>


</ul>

<p>The Web API was made without the ASP.NET Core Identity using custom JWT middleware</p>


<ul>
<li>
<a href="https://github.com/persteenolsen/dotnet-8-jwt-refresh-auth-api" target="_blank">The Web API at GitHub</a>
</li>


<li>
<a href="https://github.com/persteenolsen/angular-jwt-refresh-auth-client" target="_blank">The Angular Client at GitHub</a>
</li>
</ul>


<p>Functionality of the Web App</p>
<ul>

<li>JWT authentication with Refresh Tokens</li>
<li>Refresh token rotation</li>
<li>Revoked token reuse detection</li>


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

</ul>

<p>By using JWT + Refresh Tokens the security will be improved. The JWT can have a reduced time to live and therefor less likely to be stolen</p>
