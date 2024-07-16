[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageProximityAlertTriggered

# Type Alias: messageProximityAlertTriggered

> **messageProximityAlertTriggered**: `object`

A user in the chat came within proximity alert range

## Type declaration

### \_

> **\_**: `"messageProximityAlertTriggered"`

### distance

> **distance**: [`int32`](int32-1.md)

The distance between the users

### traveler\_id

> **traveler\_id**: [`MessageSender`](MessageSender.md)

The identifier of a user or chat that triggered the proximity alert

### watcher\_id

> **watcher\_id**: [`MessageSender`](MessageSender.md)

The identifier of a user or chat that subscribed for the proximity alert

## Defined in

dist/generated/types.d.ts:28419
