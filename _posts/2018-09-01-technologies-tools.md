---
title: Technologies & tools
category: Development
sticky: true
weight: -10
---

**As with most things at Wiredcraft, you are strongly encouraged to challenge our way of doing things**. Developers regularly introduce new languages, frameworks or platforms. If you feel strongly about a technology or a tool, speak up. You only need to convince people on your team of its benefits and maintainability.

With that being said, we often make the following choices based on past experience;

## Technologies

- **We usually build micro-services and APIs with [Node.js](https://nodejs.org/en/)**, often with the [Loopback](http://loopback.io) framework. We're also increasingly relying on [Golang](https://golang.org/).
- **We build Web front-ends with [React](https://facebook.github.io/react/)**, usually using [Redux](http://redux.js.org/). We've also used [AngularJS](https://angularjs.org/).
- **For data or DevOps related work (scrapper, data science, ...) we usually pick [Python](https://www.python.org/)**, with [Flask](http://flask.pocoo.org/) if we need a lightweight API or [Django](https://www.djangoproject.com/) when we need CRUD or ACL.
- **For native mobile apps, we prefer [Kotlin](https://kotlinlang.org) and [Swift](https://developer.apple.com/swift/)**. We've experimented with [React Native](https://facebook.github.io/react-native/) as well.
- **For data visualizations, [D3.js](https://d3js.org/) & [Mapbox.js](https://www.mapbox.com/mapbox.js/api/v2.4.0/) are usually enough** but we sometimes use additional libraries like [Chartist.js](https://gionkunz.github.io/chartist-js/)
- **For data storage, we usually go with [CouchDB](http://couchdb.apache.org), [CouchBase](http://couchbase.com), [PostgreSQL](https://www.postgresql.org/), [Elasticsearch](https://www.elastic.co/products/elasticsearch) or [Redis](http://redis.io)** depending on the use case. Usually CouchDB for NoSQL, or CouchBase if we need to scale, PostgreSQL for relational data, Elasticsearch for full-text search and reporting, and Redis for caching or simple key/value storage (e.g. sessions).
- **We benchmark performances with [Locust](http://locust.io/) or [ApacheBench](https://httpd.apache.org/docs/2.4/programs/ab.html)**.
- **For asynchronous messaging, we usually go for [RabbitMQ](https://rabbitmq.com) or [NSQ](http://nsq.io)**.


## Tools & Services

*To access and/or manage some of these tools, you'll need to be invited to our [LastPass](http://lastpass.com) company account.*

- **[GitHub](http://github.com/Wiredcraft)**; all code and tasks live there ([we actually use GitHub for pretty much anything from DevOps to recruitment](https://wiredcraft.com/blog/github-for-everything/)).
- **[TravisCI](https://travis-ci.com/) & [Coveralls](https://coveralls.io/)**; to run our tests and check on test coverage.
- **[HockeyApp](https://www.hockeyapp.net/features/)**; to deliver mobile apps for testing.
- **[Fabric](https://get.fabric.io)/[Crashlytics](http://try.crashlytics.com/) & [Google Analytics](https://analytics.google.com/)**; for crash and usage tracking (mostly for mobile apps).
- **[Docker Hub](https://hub.docker.com/)**; for hosting our Docker images.
