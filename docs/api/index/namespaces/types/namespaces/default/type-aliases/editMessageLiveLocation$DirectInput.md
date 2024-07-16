[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / editMessageLiveLocation$DirectInput

# Type Alias: editMessageLiveLocation$DirectInput

> **editMessageLiveLocation$DirectInput**: `object`

Edits the message content of a live location. Messages can be edited for a limited period of time specified in the live location.

- Returns the edited message after the edit is completed on the server side. Can be used only if message.can_be_edited == true

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

The chat the message belongs to

### heading?

> `readonly` `optional` **heading**: [`int32`](int32-1.md)

The new direction in which the location moves, in degrees; 1-360. Pass 0 if unknown

### live\_period?

> `readonly` `optional` **live\_period**: [`int32`](int32-1.md)

New time relative to the message send date, for which the location can be updated, in seconds. If 0x7FFFFFFF specified, then the location can be updated forever.

- Otherwise, must not exceed the current live_period by more than a day, and the live location expiration date must remain in the next 90 days. Pass 0 to keep the current live_period

### location?

> `readonly` `optional` **location**: [`location$Input`](location$Input-1.md) \| `null`

New location content of the message; pass null to stop sharing the live location

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Identifier of the message

### proximity\_alert\_radius?

> `readonly` `optional` **proximity\_alert\_radius**: [`int32`](int32-1.md)

The new maximum distance for proximity alerts, in meters (0-100000). Pass 0 if the notification is disabled

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

The new message reply markup; pass null if none; for bots only

## Defined in

dist/generated/types.d.ts:78879
