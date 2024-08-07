[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / businessGreetingMessageSettings$Input

# Type Alias: businessGreetingMessageSettings$Input

> **businessGreetingMessageSettings$Input**: `object`

Version of [businessGreetingMessageSettings](businessGreetingMessageSettings-1.md) for method parameters.

Describes settings for greeting messages that are automatically sent by a Telegram Business account as response to incoming messages in an inactive private chat

## Type declaration

### \_

> `readonly` **\_**: `"businessGreetingMessageSettings"`

### inactivity\_days?

> `readonly` `optional` **inactivity\_days**: [`int32`](int32-1.md)

The number of days after which a chat will be considered as inactive; currently, must be on of 7, 14, 21, or 28

### recipients?

> `readonly` `optional` **recipients**: [`businessRecipients$Input`](businessRecipients$Input-1.md)

Chosen recipients of the greeting messages

### shortcut\_id?

> `readonly` `optional` **shortcut\_id**: [`int32`](int32-1.md)

Unique quick reply shortcut identifier for the greeting messages

## Defined in

dist/generated/types.d.ts:6760
