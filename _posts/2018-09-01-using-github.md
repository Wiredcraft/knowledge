---
title: Using GitHub
category: Development
sticky: true
---

**We use [GitHub for pretty much everything](https://wiredcraft.com/blog/github-for-everything/)** for mainly two reasons;

1. **It enforces the same workflow and discipline** on all aspects of our company, from code to sales.
1. **It reduces friction** for our (overwhelmingly technical) team to access and take part in anything we do (especially recruitment).

## A few gotchas

- **Write proper issues & comments**; we've [written about it before](https://wiredcraft.com/blog/how-we-write-our-github-issues/). Always give context and clear next steps to your messages.
- **Assignee, labels and milestones**; take the time to properly label your issues, assign them to somebody on the team (if you're not sure assign it to yourself or the SCRUM master) and tie it up to a milestone.
- **Mentions**; we often end up a comment or issue with `/cc` followed by mentions of people we feel should be included in the thread.
- **Meaningful commit messages**; avoid things like `updated stuff`. You want to make it easy for others to review your changes.
- **Always have a README**; we always add a `README.md` file at the root of our repositories to explain what it is and potentially give further instructions (installation, deployment, todo list...).
- **Check your notifications**; most likely the first thing you should do when you https://github.com/notifications/participating

## Our GitHub workflow

Our worflow is a tad more complex than the [GitHub flow](https://guides.github.com/introduction/flow/), but not as much as [Atlassian's feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).

- "There are some work done to the master branch (or say the branch my branch/fork is based on) and I want to include the changes" or "There are some work done to the master branch and I got conflict with my PR now" - see QA

## Labels

We use the [SANE Github labels formula](https://medium.com/@dave_lunny/sane-github-labels-c5d2e6004b63#.6zxtq53hf) helping to highlight the status, type and priority of each issue.

**Development stage**

These labels represent the current stage of development of the issue.

Label | Description
------ | ------
![24](https://cloud.githubusercontent.com/assets/561834/20116396/59de72f2-a5fc-11e6-8ddd-1a54b2649cb9.png) | Issue is not yet acted on
![23](https://cloud.githubusercontent.com/assets/561834/20116395/59da31b0-a5fc-11e6-811d-68b14b4199ea.png) | Issue is currently ongoing
![22](https://cloud.githubusercontent.com/assets/561834/20116394/59d3881a-a5fc-11e6-8285-b859f63ed86c.png) | Issue is currently in review
![21](https://cloud.githubusercontent.com/assets/561834/20116393/59bf8b1c-a5fc-11e6-8f15-500116ed51f7.png) | Issue is done
![31](https://cloud.githubusercontent.com/assets/561834/20116397/59ecaa16-a5fc-11e6-9375-8b1a28de6cea.png) | Issue is ongoing QA by WCL
![32](https://cloud.githubusercontent.com/assets/561834/20116398/59f3b838-a5fc-11e6-8926-f4f48b5ae2cc.png) | Issue is ongoing QA by Clients

**Type**

These labels represent the current type of the issue.

Label | Description
------ | ------
![54](https://cloud.githubusercontent.com/assets/561834/20116402/5a0f2726-a5fc-11e6-9d2b-7e3c11a0cd09.png) | The issue is a question about a feature
![53](https://cloud.githubusercontent.com/assets/561834/20116401/5a0a05fc-a5fc-11e6-9cde-af20c62d2585.png) | The issue is a bug to an existing feature
![52](https://cloud.githubusercontent.com/assets/561834/20209961/7332d2be-a7f7-11e6-9582-09980f1f4827.png) | The issue is a task to be implemented
![51](https://cloud.githubusercontent.com/assets/561834/20116399/59f97610-a5fc-11e6-9eb5-a8ff472735d4.png) | The issue is an enhancement to an existing feature

**Priority**

These labels represent the current priority of the issue.

Label | Description
------ | ------
![15](https://cloud.githubusercontent.com/assets/561834/20116392/59bc2d50-a5fc-11e6-8e3c-9b8219dcf257.png) | The issue is of low priority
![14](https://cloud.githubusercontent.com/assets/561834/20116390/59bb4c8c-a5fc-11e6-91b9-9db79fd60091.png) | The issue is of medium priority
![13](https://cloud.githubusercontent.com/assets/561834/20116389/59baf98a-a5fc-11e6-9647-d318b331c54c.png) | The issue is of high priority
![12](https://cloud.githubusercontent.com/assets/561834/20116388/59b8a400-a5fc-11e6-969e-904a9b624912.png) | The issue is of critical priority and should be resolved as soon as possible
![11](https://cloud.githubusercontent.com/assets/561834/20116391/59bb8544-a5fc-11e6-8536-9f902d0b13fd.png) | The issue is currently blocking the development of the features
