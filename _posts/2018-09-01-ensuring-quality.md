---
title: Ensuring quality
category: Projects
latest_date: 2018-12-01
latest_author: hunvreus
---

The goal of QA is to defend the quality of the deliverables (and as the reste of the team to get things done). This is ensured through:

1. **Inclusion** of the QA team in all relevant projects meetings (daily scrum).
2. **Continuous testing** of the functionalities.
3. **Validation** based on acceptance criteria.

### First steps as a QA team

The QA team should start the sprints with:

1. Test cases preparation.
2. Test case execution.
3. Test case dodcumentation.

### Continuous testings

Continuous testing is implemented at various stages:

* **Unit testing**: tests of the smaller component of the system (*e.g.* [QUnit](https://qunitjs.com/)).
* **Integration testing**: exercise an entire subsystem and ensure that a set of components play nicely together (*e.g.* [Travis CI](https://travis-ci.com/)).
* **Acceptance testing**: follow acceptance criteria from user story (*e.g.* [Cucumber](https://cucumber.io/)).
* **Functional testing**: verify end-to-end scenarios that your users will engage in.
* **System Testing / Regression Testing / UAT**:

Depending on your development workflow or requirements additional tests can be (and should be) implemented, such as regressions testing, system testing, load testing, smoke testing or UATs.

### Passing QA

The QA is considered successful when:

* Acceptance criteria are met.
* Code is reviewed by another development team member.
* Test cases are written.
* Unit tests and UI automation tasks are written.

### Dos and don’ts
**Definitely do**

* Remove ambiguity from user stories (ensure every user story is testable and includes acceptance criteria).
* Don’t ignore non-functional testing such as performance and security.
* Do both functional and non-functional testing from the very start of the project.
* Manage testers Day-to-Day.
* Identify the tests up-front before the User Story is implemented (if you do not know how to test, how can you).

**Do not**

* Exclude of QA team.
* Wait for the sprint to be finalize to start tests.
* Rely on manual testing.
* Trying to be predictive rather than adaptive.
