---
title: User story
category: Projects
---

When starting a project, it is important to define the Product backlog. This is commonly populated from the tasks covered by user stories. To write relevant user stories it is necessary to follow these point.

1. Understand your target users and outline them in **Personas**
2. Derive **Epics** from **Persona** goals
3. Break **Epics** into **User stories**

Let's briefly outline each of the components.

## How to write Personas

Supporting [goal-direct design](http://www.dubberly.com/articles/alan-cooper-and-the-goal-directed-design-process.html), and a key component for success, personas create tangible and reliable end users. It answers the question "*Who are we building things for?*" and follows:

1. **Profile**: detail who is this persona
2. **Roles**: define its roles, both in the professional and personal life
3. **Goals**: what is this persona trying to achieve
4. **Challenges**: what are the challenges this persona would be facing to achieve their goals

For example:

1. *Jenny is a stay at home mum working part time at a day care centre. She is 33 years old and has a bachelor in social work. She is an avid user of online shopping website (Amazon, etc.) and social network about mode, food and travels (mainly Pinterest and Facebook).*
2. *She is a shopper.*
3. *She wants to do her shopping quickly and get all of the information about the products she is buying.*
4. *She is often not able to look for specific information about products to ensure they are safe for her children and day care kids. She also does not have a lot of time for herself and does not like to spend time on check out.*

It is important to keep in mind:

1. They are **distinct**.
2. They are **recognizable**.
3. They are **complete** (not just a keyword).
4. They are **iterative** and can (and should) change over time.

For more extensive explanations you can have a look at the [Smashing Magzine look at personas](https://www.smashingmagazine.com/2014/08/a-closer-look-at-personas-part-1/).

## What is an Epic?

Broad ideas explaining product functionality independent from the details. Epics are not user stories, they only outline the high level functionality.

For example:  

  *"Provide option to shoppers to buy items online."*

You can break down an Epic into several user stories, the inverse being not possible.

## How to write a user story

User stories follow a simple 3-part format answering the fundamental questions (who, what and why):

1. **As a** [persona]
2. **I want to** [do something]
3. **so that I can** [achieve a goal]

These user stories are validate by acceptance criteria which define the boundaries of a user story

For example:

* **User story**  
  *"As a shopper, I want to add items to my cart so I can manage my order before I check out."*

* **Acceptance criteria**
  * The number of items in the cart is displayed
  * The number of items in the cart is calculated with each item added, removed or updated
  * The current order amount is displayed

Keep in mind that user stories and acceptance criteria are what we use to test and validate software; getting them right is key to a successful delivery.

## Dos and don'ts

**Definitely do**:

* Frame stories from an end user point of view, never from a manager or developer angle  
  Good: As an admin user I want secure login so that I can use admin functions safely  
  Bad: As a project manager I want better security so that the product is secure
* Start big (Personas) and funnel down (user stories and acceptance criteria)
* Make things visible to everyone.
* Anybody can write the user stories and everybody should, your dev team should start to think in terms of user stories.
* Follow the INVEST acronym (Independent, Negotiable, Valuable, Estimable, Small, Testable).

And **do not**:

* Write user stories for a user not a persona.
* Describe how to implement. Stories should focus on what to implement.
* Make non-descriptive, verbose or over-detailed stories, keep it brief.
* Have multiple components in a user story, smaller stories are easier to define clearly and your team can estimate them more accurately.
* Take user stories as a requirement, they are designed to support not define them. Raw requirements should be covered in acceptance criteria.

For (far) more details and tips on this, we strongly recommend you have a look at [Best Agile user story from Alexander Cowan](http://www.alexandercowan.com/best-agile-user-story/).
