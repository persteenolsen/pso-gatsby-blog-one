---
title: Python and Django Website using MariaDB hosted at Azure App Service serving a Demo
date: 2025-11-09
published: true
categories:
  - Python
  - Django
  - Azure
  - MariaDB
  - DevOps
  - MVC
tags:
  - python
  - django
  - azure
  - mariadb
  - devops
  - mvc
---

Python Django and MariaDB Website serving a simple Demo hosted at Azure App Service which have a free plan as well as plans for scaling up if needed. The Website uses DevOps by GitHub Actions + Azure App Service

<p>Note: Due to the resource limitations of the Microsoft Azure Free App Service Plan, the initial load time can be up to 1 minute. A white screen or 503 status code may happen too. Just try again after few minutes or a bit later until the Website loads</p>

<a href="https://pso-django-demo.azurewebsites.net" target="_blank" title="Django Website at Azure App Service">Try the demo...</a>

Django is using the architectural pattern Model-View-Template (MVT) which is a derivation of the pattern Model View Control (MVC) 

This Django Website is serving static content - secured by HTTPS

CI / CD by commit the code change from VS Code + GitHub Actions + Azure App Service

<a href="https://github.com/persteenolsen/django-azure-demo" target="_blank">The source code at GitHub</a>
