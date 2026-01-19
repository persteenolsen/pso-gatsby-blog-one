---
title: .NET 10 REST API doing Authentication by JWT and Refresh Tokens
date: 2026-01-14
published: true
categories:
  - .NET
  - REST API
  - Vue 3
  - Vite
  - C#
  - SQLite
tags:
  - dot-net
  - vue-3
  - vite
  - c#
  - rest-api
  - sqlite  
---


Vue 3 client towards a REST API by .NET 10 with C# using JWT and Refresh Tokens for Authentication

Traditional webhosting is used for this Application

<ul>

<li>
<a href="https://vue.jwt.refresh.auth.persteenolsen.com" target="_blank" title="Vue 3 + Web API in .NET 10 doing Auth">Try the demo</a>
</li>


</ul>

<p>The Web API was made without the ASP.NET Core Identity using custom JWT middleware</p>


<ul>
<li>
<a href="https://github.com/persteenolsen/dotnet-10-jwt-refresh-auth-api" target="_blank">The Web API at GitHub</a>
</li>


<li>
<a href="https://github.com/persteenolsen/vue-jwt-refresh-auth-client" target="_blank">The Vue 3 Client at GitHub</a>
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
<li>The .NET 10 Web API is hosted at a traditional Webhotel</li>
<li>The Vue 3 Client is hosted at a traditional Webhotel</li>
<li>SQLite as the Database for both Dev + Prod</li>
<li>CORS Policy implemented by .NET</li>
<li>JWT Token for access secure routes</li>
<li>Refresh Token by HTTP only Cookie to generate new JWT Tokens</li>

</ul>

<p>By using JWT + Refresh Tokens the security will be improved. The JWT can have a reduced time to live and therefor less likely to be stolen</p>
