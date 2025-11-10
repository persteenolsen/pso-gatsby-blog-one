---
title: The Git-based Headless CMS called Decap
date: 2025-11-10T15:51:00.000Z
published: true
categories:
  - DevOps
  - Headless CMS
tags:
  - headless-cms
  - git-based-cms
  - netlify-cms
  - decap-cms
  - netlify
  - ci-cd
---

The Git-based Headless CMS called Decap used with my Blog

Note: The Decap CMS was formerly known as Netlify CMS and it keeps most of the features of Netlify CMS

This Blog is using a CI / CD Pipeline as an important concept of DevOps. An Editor of the Blog can use Git-based CMS for content administration while an Administrator or Developer of the Blog can use GitHub as a CMS as well as VS Code

The CI / CD Pipeline was implemented by

* The code of the Blog at GitHub
* The Git-based CMS Decap / GitHub as a CMS / VS Code
* Netlify Cloud which hosts the Blog

A few examples of how it works: 

When a developer makes a change to the code of the Blog and commit the code to GitHub by VS Code or GitHub as a CMS an automated Build will happen. If no errors are detected the created files from that build will be deployed to Netlify Cloud where the Blog is hosted

An Editor saves a Post of the Blog (A Markdown file) by the Decap CMS which starts the build and deployment by a commit to GitHub

In addition to the Headless Git-based CMS, I have experience with the CMS listed below:

* Umbraco based on .NET
* Wagtail based on Python
* Drupal based on PHP
* Wordpress based on PHP
* Type3 based on PHP

