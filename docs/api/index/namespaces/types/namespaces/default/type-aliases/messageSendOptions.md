[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageSendOptions

# Type Alias: messageSendOptions

> **messageSendOptions**: `object`

Options to be used when a message is sent

## Type declaration

### \_

> **\_**: `"messageSendOptions"`

### disable\_notification

> **disable\_notification**: [`Bool`](Bool.md)

Pass true to disable notification for the message

### effect\_id

> **effect\_id**: [`int64`](int64.md)

Identifier of the effect to apply to the message; pass 0 if none; applicable only to sendMessage and sendMessageAlbum in private chats

### from\_background

> **from\_background**: [`Bool`](Bool.md)

Pass true if the message is sent from the background

### only\_preview

> **only\_preview**: [`Bool`](Bool.md)

Pass true to get a fake message instead of actually sending them

### protect\_content

> **protect\_content**: [`Bool`](Bool.md)

Pass true if the content of the message must be protected from forwarding and saving; for bots only

### scheduling\_state

> **scheduling\_state**: [`MessageSchedulingState`](MessageSchedulingState.md) \| `null`

Message scheduling state; pass null to send message immediately. Messages sent to a secret chat, live location messages and self-destructing messages can't be scheduled

### sending\_id

> **sending\_id**: [`int32`](int32.md)

Non-persistent identifier, which will be returned back in messageSendingStatePending object and can be used to match sent messages and corresponding updateNewMessage updates

### update\_order\_of\_installed\_sticker\_sets

> **update\_order\_of\_installed\_sticker\_sets**: [`Bool`](Bool.md)

Pass true if the user explicitly chosen a sticker or a custom emoji from an installed sticker set; applicable only to sendMessage and sendMessageAlbum

## Defined in

dist/generated/types.d.ts:29951
