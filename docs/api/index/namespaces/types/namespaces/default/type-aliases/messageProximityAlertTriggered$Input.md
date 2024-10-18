[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageProximityAlertTriggered$Input

# Type Alias: messageProximityAlertTriggered$Input

> **messageProximityAlertTriggered$Input**: `object`

Version of [messageProximityAlertTriggered](messageProximityAlertTriggered.md) for method parameters.

A user in the chat came within proximity alert range

## Type declaration

### \_

> `readonly` **\_**: `"messageProximityAlertTriggered"`

### distance?

> `readonly` `optional` **distance**: [`int32`](int32.md)

The distance between the users

### traveler\_id?

> `readonly` `optional` **traveler\_id**: [`MessageSender$Input`](MessageSender$Input.md)

The identifier of a user or chat that triggered the proximity alert

### watcher\_id?

> `readonly` `optional` **watcher\_id**: [`MessageSender$Input`](MessageSender$Input.md)

The identifier of a user or chat that subscribed for the proximity alert

## Defined in

dist/generated/types.d.ts:29316
