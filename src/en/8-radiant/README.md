---
isOriginal: true
icon: ubuntu
category:
  - Radiant
  - Home
---

# 8.Randiant AllStars

Based on the `GhostShip` model, it provides pluggable business scenarios and combined functions.

## 8.1.Basic Usage

When a project uses a component as dependency, the component features are automatically activated,
such as spring config, database tables.

Creating tables are dangerous operations and disabled by default, depending on the RevisionFitness of faceless-flywave.

* Use faceless-flywave as dependency, suggest scope=test
* Set spring.wings.faceless.flywave.enabled.module=true
* Start the springboot app in the current project, suggest scope=test

## 8.2.Related Projects

* [Tiny Task](./8a-tinytask.md) - Tasks based on database that can be started and stopped
* [Tiny Task Properties](./8b-prop-tinytask.md) - Properties of the Tiny Task
* [Tiny Mail](./8c-tinymail.md) - Mails based on database with some transactional features
* [Tiny Mail Properties](./8d-prop-tinymail.md) - Properties of the Tiny Mail
