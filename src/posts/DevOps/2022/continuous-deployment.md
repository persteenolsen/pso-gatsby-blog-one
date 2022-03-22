---
date: 2022-03-22T14:45:45Z
title: Continuous Deployment
published: true
categories:
- DevOps
tags:
- forestry-cms
- github
- gatsby-cloud
body: ''

---
This Blog is using a Continuous Deployment Pipeline as an important concept of DevOps.

The Continuous Deployment Pipeline is implemented by

* The code of the Blog at GibHub
* Forestry CMS / VS Code
* Gatsby Cloud

When a developer makes a change to the code of the Blog and commit the code to GitHub by VS Code or the CMS an automated Build will happen and if no errors are detected the created files from that build will be deployed to Gatsby Cloud where the Blog is hosted.

An example: A Markdown file was saved by the CMS system which starts the Continuous Deployment Pipeline by a commit to GitHub.