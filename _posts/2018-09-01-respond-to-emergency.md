---
title: Respond to emergency
category: Projects
weigh: -6
---

It is important to respond to emergencies instead of reacting to them. To ensure continuous learning it is important to reflect on the causes of the emergency. Methods to do so are numerous, we usually prefer conducting a 5 Whys.

Using iteratively the question "Why?" is used to determine the root cause of a defect or problem. Each answer forms the basis of the next questions. For example:

1. *Why did the login failed?*  
Because the database was not available.

2. *Why did the database was not available?*  
Because there was too many requests to the database.

3. *Why did the database could not handle the requests loads?*  
Because it was not test loaded.

4. *Why wasn't it load tested?*  
Because it was not part of the tests plan.

5. *Why wasn't it part of the tests plan?*  
Because it was not an acceptance criteria for the user story.

For more details on this, we strongly recommend you have a look at [The 5 Whys Process We Use to Understand the Root of Any Problem](https://open.buffer.com/5-whys-process/)
