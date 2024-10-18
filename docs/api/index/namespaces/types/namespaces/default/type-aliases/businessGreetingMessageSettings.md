[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / businessGreetingMessageSettings

# Type Alias: businessGreetingMessageSettings

> **businessGreetingMessageSettings**: `object`

Describes settings for greeting messages that are automatically sent by a Telegram Business account as response to incoming messages in an inactive private chat

## Type declaration

### \_

> **\_**: `"businessGreetingMessageSettings"`

### inactivity\_days

> **inactivity\_days**: [`int32`](int32.md)

The number of days after which a chat will be considered as inactive; currently, must be on of 7, 14, 21, or 28

### recipients

> **recipients**: [`businessRecipients`](businessRecipients.md)

Chosen recipients of the greeting messages

### shortcut\_id

> **shortcut\_id**: [`int32`](int32.md)

Unique quick reply shortcut identifier for the greeting messages

## Defined in

dist/generated/types.d.ts:6803
