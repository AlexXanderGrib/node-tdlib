[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / businessAwayMessageSettings$Input

# Type Alias: businessAwayMessageSettings$Input

> **businessAwayMessageSettings$Input**: `object`

Version of [businessAwayMessageSettings](businessAwayMessageSettings-1.md) for method parameters.

Describes settings for messages that are automatically sent by a Telegram Business account when it is away

## Type declaration

### \_

> `readonly` **\_**: `"businessAwayMessageSettings"`

### offline\_only?

> `readonly` `optional` **offline\_only**: [`Bool$Input`](Bool$Input.md)

True, if the messages must not be sent if the account was online in the last 10 minutes

### recipients?

> `readonly` `optional` **recipients**: [`businessRecipients$Input`](businessRecipients$Input-1.md)

Chosen recipients of the away messages

### schedule?

> `readonly` `optional` **schedule**: [`BusinessAwayMessageSchedule$Input`](BusinessAwayMessageSchedule$Input.md)

Settings used to check whether the current user is away

### shortcut\_id?

> `readonly` `optional` **shortcut\_id**: [`int32`](int32-1.md)

Unique quick reply shortcut identifier for the away messages

## Defined in

dist/generated/types.d.ts:6711
