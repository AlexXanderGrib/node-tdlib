[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageSendOptions$Input

# Type Alias: messageSendOptions$Input

> **messageSendOptions$Input**: `object`

Version of [messageSendOptions](messageSendOptions-1.md) for method parameters.

Options to be used when a message is sent

## Type declaration

### \_

> `readonly` **\_**: `"messageSendOptions"`

### disable\_notification?

> `readonly` `optional` **disable\_notification**: [`Bool$Input`](Bool$Input.md)

Pass true to disable notification for the message

### effect\_id?

> `readonly` `optional` **effect\_id**: [`int64$Input`](int64$Input-1.md)

Identifier of the effect to apply to the message; pass 0 if none; applicable only to sendMessage and sendMessageAlbum in private chats

### from\_background?

> `readonly` `optional` **from\_background**: [`Bool$Input`](Bool$Input.md)

Pass true if the message is sent from the background

### only\_preview?

> `readonly` `optional` **only\_preview**: [`Bool$Input`](Bool$Input.md)

Pass true to get a fake message instead of actually sending them

### protect\_content?

> `readonly` `optional` **protect\_content**: [`Bool$Input`](Bool$Input.md)

Pass true if the content of the message must be protected from forwarding and saving; for bots only

### scheduling\_state?

> `readonly` `optional` **scheduling\_state**: [`MessageSchedulingState$Input`](MessageSchedulingState$Input.md) \| `null`

Message scheduling state; pass null to send message immediately. Messages sent to a secret chat, live location messages and self-destructing messages can't be scheduled

### sending\_id?

> `readonly` `optional` **sending\_id**: [`int32`](int32-1.md)

Non-persistent identifier, which will be returned back in messageSendingStatePending object and can be used to match sent messages and corresponding updateNewMessage updates

### update\_order\_of\_installed\_sticker\_sets?

> `readonly` `optional` **update\_order\_of\_installed\_sticker\_sets**: [`Bool$Input`](Bool$Input.md)

Pass true if the user explicitly chosen a sticker or a custom emoji from an installed sticker set; applicable only to sendMessage and sendMessageAlbum

## Defined in

dist/generated/types.d.ts:29125
