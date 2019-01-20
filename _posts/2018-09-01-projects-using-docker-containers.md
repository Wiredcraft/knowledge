---
title: Projects using Docker containers
category: DevOps
---

Docker containers offer a wide range of benefit, allowing to QA, deploy with the exact same versions on dev / staging / prod.

Containers need to be built, hosted and shared between the various environments and benefit from having a centralized architecture.

## Requirements

You need the following set and available:

- Project's Pipelines instance + admin access (see [[Pipelines]])
- A server capable of running Docker containers

## Steps

- Add the project to Wiredcraft Docker registry:
    - Create a project
    - Create users for that project
    - Update permissions of current users to access the new project
    - (optional) Set replication to China
- Configure the project's Pipelines: 
    - (optional) Add secret file to read data from the vault
    - Add the pipelines to build the containers
    - Add the pipelines to deploy the containers on the remote servers
    - (optional) Add Webhook support for auto-build / auto-deploy
    
Sit down and relax (or start coding!); you can now enjoy your platform being updated automatically (via webhook) or triggered manually by a simple button.

## Sample pipelines

TBD

## Extra notes to include

- `{cust}-build`: R/W to registry US - `{cust}` to be replaced by the real customer name
- `{cust}-deploy`: R/O from registry US + CN
- `sync`: R/W on all projects - used only for replication
- `{cust}` should also match the pipelines name
- `https://pipelines-{cust}.service.wiredcraft.com/keys`: must be included to the `wcladmin` user (or other user)

