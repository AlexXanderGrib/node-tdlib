[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / deviceTokenApplePushVoIP$Input

# Type Alias: deviceTokenApplePushVoIP$Input

> **deviceTokenApplePushVoIP$Input**: `object`

Version of [deviceTokenApplePushVoIP](deviceTokenApplePushVoIP.md) for method parameters.

A token for Apple Push Notification service VoIP notifications

## Type declaration

### \_

> `readonly` **\_**: `"deviceTokenApplePushVoIP"`

### device\_token?

> `readonly` `optional` **device\_token**: `string`

Device token; may be empty to deregister a device

### encrypt?

> `readonly` `optional` **encrypt**: [`Bool$Input`](Bool$Input.md)

True, if push notifications must be additionally encrypted

### is\_app\_sandbox?

> `readonly` `optional` **is\_app\_sandbox**: [`Bool$Input`](Bool$Input.md)

True, if App Sandbox is enabled

## Defined in

dist/generated/types.d.ts:44490
