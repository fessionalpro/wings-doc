---
isOriginal: true
icon: geometry
category:
  - WingsGod
  - Model
---

# 0G.GhostShip Model

WingsBoot basic architectural idea is to do the model vertically and overlay the function horizontally.
The codename has bean called CruiseModel, later in the Dota series, changed to GhostShip, more wings a little

## 0G.1.Aboard to the sea (GoSea)

Chinglish says, `Go And Sea`，`Let's Me See Sea`

In my experience with startups, almost everything is lacking and nothing is certain.
The entire team is in the same boat, trying to survive and explore at sea, while trying not to get lost or sink.

## 0G.2.Vertical Model (Floor)

The business architecture and model, program architecture and model, have strict boundaries and dependency requirements.
Usually, from the bottom to the top like a building floor, they are called Floor-N (N is a natural number)

### Unidirectional Call, Avoid Crossing

Usually, the upper layer can invoke the same layer or the lower layer, but not vice versa. For example,
in the structure of Dao/Ser/Mvc:

* Service can call Dao and Service, but should avoid calling back. ^SHOULD^
* Controller can call Service, but must not be called back. ^MUST^
* Controller should not call Dao. ^SHOULD^

### Unidirectional Flow, Event Sourcing

Data flow and business flow require unidirectional flow. In the case of turbulent flow,
unambiguous events should be propagated and tracked.

For example, data flows from the bottom up, while business flows from the top down.

## 0G.3.Horizontal Functions (Layer)

Functions or modules can combine, inherit, overlay or filter to provide appropriate services to the outside world.
Usually, from the inside to the outside, they are called Layer-N (N is a natural number)
