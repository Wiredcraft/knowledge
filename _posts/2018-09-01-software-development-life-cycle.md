---
title: Software Development Life Cycle (SDLC)
category: Development
sticky: true
---

A high level outline of it would be as follow:

![](https://d2mxuefqeaa7sj.cloudfront.net/s_BB7A733486134338E9A028069215C95BD5DB54C3C8FF36B0A042C8C2E083F479_1516770246876_image.png)

The cycle is as follow.

### Product management phase *(ongoing process)*

* **Define Requirements** - Define the requirements for the iteration based on the product backlog, sprint backlog, customer and stakeholder feedback.
* **Design and Strategy** - Design UI/UX based on defined requirements and form an initial technical strategy/plan for the project. This step also includes writing user stories for the features.


### Software Development Lifecycle *(recurring loop)*

* **Milestone plan** - Pick the top priority features that are part of this phase of the project and plan them.
* **Development** - Develop software based on defined requirements locally and testing in development environments
* **QA (Quality Assurance) testing** - Continuous internal and external testing based on the user stories and design mockups.
* **Release to staging** - Release stable features to staging server
* **Performance or Security testing** - For large releases we will perform performance testing and security testing, usually in the staging environment.
* **UAT (User Acceptance Testing) and Validation Testing** - UAT often onvolves testing by the people from the intended audience and recording and correcting of any defects which are discovered. Validation testing can be done by the project stakeholders who are familiar with the project scope to ensure product meets the requirements.
* **Release** - Integrate and deliver the working iteration into production
* **Data analysis** - Review the available data points from production environments to analyze the effect of the release (see more in post release section below).

Throughout the cycle the following is continuously performed:

* **Unit testings** - Test the integrated unit to ensure it is producing expected output against given input.  
  We are currently using the following:
  * React - [Jest](https://facebook.github.io/jest/)
  * WeChat - [Jest](https://facebook.github.io/jest/)
  * Nodejs - [Mocha](https://mochajs.org/)
* **Code coverage** - To oultine code not covered by the test suite.  
  We are currently using the following:
  * [Coveralls.io](https://coveralls.io/)
* **CI (Continuous Integration)** - Test if a group of components are combined to produce output.  
  We are currently using the following:
  * [TravisCI](https://travis-ci.com/)
* **CD (Continuous Delivery)** - Automated release process.  
  We are currently using the following:
  * [Pipeline](https://github.com/Wiredcraft/pipelines)
* **Performance** - We test the behavior of the system under heavy load to identify bottlenecks and validate stability.  
  We are currently using the following:
  * [locust.io](https://locust.io/)

### Shipping

* **Tag and Changelog** - Outlining changes for release and providing a link to a specific version of the code.
* **Documentation & updates** - Anything relevant to the released version such as (list non exhaustive):
  * Architecture changes
  * New requirements for deployment
  * Sequence diagrams
  * API documentation
* **Internal & external sign off** - Ensure internal and external kickoff for release.

On top of this, the following are taking place before major production releases:

* **Static code security scans** - To check everything “under the hood” without actually executing the code to detect basic flaws and code sanity.
* **Vulnerability scans** - Scan the apps for security vulnerability such as Cross-site scripting, SQL Injection and insecure server configuration.
* **Regression testing** - Test the new  version to ensure that any change or addition hasn't broken any existing functionality.

For major releases, and to ensure impartiality of the results, we leverage the client’s internal IT team or external vendor (e.g. [Cigital](https://www.cigital.com)).

Note:

* In practice there are multiple smaller loops and feedback channels in each step to allow reacting faster to new circumstances and requirements.


## Post release

Post release we gather, collect and analyze various sources, work it into the requirements of the next iteration or react to it in real time.


* **Customer and stakeholder feedback** - Collect feedback from users and product stakeholders.
* **Analytics** - We collect and report on user behavior (e.g. [Google Analytics](https://analytics.google.com/analytics/web/), [Google Data Studio](https://datastudio.google.com/), [Tableau](https://www.tableau.com/), etc.)
* **User errors** - Automated reports and monitoring on user errors and crashes (e.g. [Fabric.io](http://fabric.io/))
* **System metrics** - Processing system level time-series data and infrastructure monitoring (e.g. [TICK stack](https://www.influxdata.com/time-series-platform/))
* **Log pipeline** - Log collection and analysis (e.g. [ELK stack](https://www.elastic.co/elk-stack))

Additionally for mobile apps.

* **User reviews** - Reviewing rating and comments on major stores (e.g. [AppFollow](https://appfollow.io/) for Google Play and App Store)



### Recommended reads

* [The software development lifecycle](https://medium.com/@shipitgood/the-software-development-lifecycle-d90f4af8514f)
* [The Four Levels of Software Testing](https://www.seguetech.com/the-four-levels-of-software-testing/)
* [Understanding the Agile Software Development Lifecycle and Process Workflow](https://www.smartsheet.com/understanding-agile-software-development-lifecycle-and-process-workflow)

