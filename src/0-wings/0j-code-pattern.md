---
isOriginal: true
icon: code
category:
  - WingsGod
  - Standard
---

# 0J.Code Pattern

Collection of common code patterns in Wings coding practices.

## 0J01.Comments in Config/Script

There are 2 types of comment in Config (`*.properties`) and Script (`*.sh`) according to their purpose.

* Toggle code, related to functionality. Use single comments like `#`.
* Just doc, unrelated to functionality. Use double comments, like `##`.

The benefits of this rule are,

* Clearly identifies the purpose of the comments
* Functional code can be toggled quickly, e.g, shortcuts or column editing
* Avoid double comments to be turned on by mistake
