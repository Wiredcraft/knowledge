---
title: User Acceptance Test (UAT)
category: Projects
---

## Before starting

It is necessary that the following conditions are met:


1. Outline and validate the **User journeys**
2. **Platform code** should be fully developed
3. Ensure the **UAT environment** is ready and stable
4. Depending on the type of UAT, we would need:
  - For Tester - A set of **test cases**, each case covering a specific usage scenario
  - For users - **A script** allowing containment of users without steering them too much in the specifics
5. **Test accounts** for all users involved allowing access to the features behind any authentication
6. If tests are done in a **control environment** it is necessary to ensure **resources are booked** and they fit the targeted **user profile(s)**

## During the session

It is important to:


1. Ensure the good conduct of **UAT execution** by testing case or script
2. **Write down all issues** that arise and gather as much information as possible e.g. device type, OS number, screenshots, gif, user feedback, etc.

## Following the session

Ensure that you work with the team to:

1. **Import all issues** in the preferred tracking tool (e.g. Github ) ensuring to provide at least the following information: 
  - Severity - By decreasing severity: Fatal, Critical, Major, Minor or Enhancement
  - Description - An exhaustive description of the issue encountered
  - Steps To Reproduce - The actual steps to reproduce the issue
  - Actual Result - The current result
  - Expectation Result - The expected result
  - Device - The type of device
  - OS Version - The OS version used
2. The development team will assess, work and deploy a **development fix** for the identified issues
3. **Verify the fix** is valid and **close the issue**

## After the UAT sprint

Make sure to:


1. **Compile an UAT report** with a summary of all issues encountered, severity breakdown, notes on quality, etc.
2. Move **feature change issues** or UI/UX changes to future backlog/phases
3. **Re-assess** the targeted **user profile** if necessary
