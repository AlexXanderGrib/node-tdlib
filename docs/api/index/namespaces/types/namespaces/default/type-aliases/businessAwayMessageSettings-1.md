[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / businessAwayMessageSettings

# Type Alias: businessAwayMessageSettings

> **businessAwayMessageSettings**: `object`

Describes settings for messages that are automatically sent by a Telegram Business account when it is away

## Type declaration

### \_

> **\_**: `"businessAwayMessageSettings"`

### offline\_only

> **offline\_only**: [`Bool`](Bool.md)

True, if the messages must not be sent if the account was online in the last 10 minutes

### recipients

> **recipients**: [`businessRecipients`](businessRecipients-1.md)

Chosen recipients of the away messages

### schedule

> **schedule**: [`BusinessAwayMessageSchedule`](BusinessAwayMessageSchedule.md)

Settings used to check whether the current user is away

### shortcut\_id

> **shortcut\_id**: [`int32`](int32-1.md)

Unique quick reply shortcut identifier for the away messages

## Defined in

dist/generated/types.d.ts:6683
