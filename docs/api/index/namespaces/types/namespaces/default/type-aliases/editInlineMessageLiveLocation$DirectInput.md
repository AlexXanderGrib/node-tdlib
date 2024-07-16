[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / editInlineMessageLiveLocation$DirectInput

# Type Alias: editInlineMessageLiveLocation$DirectInput

> **editInlineMessageLiveLocation$DirectInput**: `object`

Edits the content of a live location in an inline message sent via a bot; for bots only

## Type declaration

### heading?

> `readonly` `optional` **heading**: [`int32`](int32-1.md)

The new direction in which the location moves, in degrees; 1-360. Pass 0 if unknown

### inline\_message\_id?

> `readonly` `optional` **inline\_message\_id**: `string`

Inline message identifier

### live\_period?

> `readonly` `optional` **live\_period**: [`int32`](int32-1.md)

New time relative to the message send date, for which the location can be updated, in seconds. If 0x7FFFFFFF specified, then the location can be updated forever.

- Otherwise, must not exceed the current live_period by more than a day, and the live location expiration date must remain in the next 90 days. Pass 0 to keep the current live_period

### location?

> `readonly` `optional` **location**: [`location$Input`](location$Input-1.md) \| `null`

New location content of the message; pass null to stop sharing the live location

### proximity\_alert\_radius?

> `readonly` `optional` **proximity\_alert\_radius**: [`int32`](int32-1.md)

The new maximum distance for proximity alerts, in meters (0-100000). Pass 0 if the notification is disabled

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

The new message reply markup; pass null if none

## Defined in

dist/generated/types.d.ts:79214
