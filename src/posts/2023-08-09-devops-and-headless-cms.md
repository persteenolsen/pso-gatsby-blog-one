---
title: DevOps and Headless CMS
date: 2023-08-10T12:50:23.920Z
published: true
categories:
  - DevOps
  - CMS
tags:
  - headless-cms
  - git-based-cms
  - api-driven-cms
  - netlify-cms
  - decap-cms
  - tina-cms
  - strapi-cms
  - netlify
  - ci-cd
---
DevOps and Git-based Headless CMS used with my Blog

Note: The Decap CMS was formerly known as Netlify CMS and seems to keep most / all of the features of Netlify CMS. 

This Blog is using a CI / CD Pipeline as an important concept of DevOps. An Editor of the Blog can use Git-based CMS for content administration while an Administrator or Developer of the Blog can use GitHub as a CMS as well as VS Code.

The CI / CD Pipeline was implemented by

* The code of the Blog at GitHub
* Decap Git-based CMS / GitHub as a CMS / VS Code
* Netlify Cloud which hosts the Blog

A few examples of how it works: 

When a developer makes a change to the code of the Blog and commit the code to GitHub by VS Code or GitHub as a CMS an automated Build will happen and if no errors are detected the created files from that build will be deployed to Netlify Cloud where the Blog is hosted.

An Editor saves a Post of the Blog ( A Markdown file) by the Decap / Netlify CMS system which starts the build and deployment by a commit to GitHub.

In addition to Headless Git-based CMS I have experience with API driven CMS listed below

* Strapi - Based on Node.js

To get more experience with Git based CMS a copy of the Gatsby Blog is hosted and administrated by Gatsby Cloud and Tina CMS using another repository at GitHub.
