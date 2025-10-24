---
title: Python and Django Website using MySQL hosted at Azure App Service serving a Blog
date: 2025-10-22
published: true
categories:
  - Python
  - Azure
  - MySQL
  - DevOps
  - MVC
tags:
  - python
  - django
  - azure
  - mysql
  - devops
  - mvc
---

Python Django and MySQL Website serving a simple Blog hosted at Azure App Service which have a free plan as well as plans for scaling up if needed. The Website uses DevOps by GitHub Actions + Azure App Service

<p>Note: Due to the resource limitations of the Microsoft Azure Free App Service Plan, the initial load time will be up to 1 minute. A white screen or 503 Status code may happen too, and you can just try again a bit later</p>

<a href="https://pso-django.azurewebsites.net" target="_blank" title="Django Website at Azure App Service">Try the demo...</a>

Django is using the architectural pattern Model-View-Template (MVT) which is a derivation of the pattern Model View Control (MVC) 

This Django Website is serving static content - secured by HTTPS
A simple Blog demonstrates how to use Models by the Django Admin and display the Posts by the Frontend

The files models.py and views.py are splitted up for showing how to scale the folder structure if the Django Website should grow with a lot of views and models

CI / CD by commit the code change from VS Code + GitHub Actions + Azure App Service

<a href="https://github.com/persteenolsen/django-azure" target="_blank">The source code at GitHub</a>
