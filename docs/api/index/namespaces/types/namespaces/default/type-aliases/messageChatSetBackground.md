[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageChatSetBackground

# Type Alias: messageChatSetBackground

> **messageChatSetBackground**: `object`

A new background was set in the chat

## Type declaration

### \_

> **\_**: `"messageChatSetBackground"`

### background

> **background**: [`chatBackground`](chatBackground-1.md)

The new background

### old\_background\_message\_id

> **old\_background\_message\_id**: [`int53`](int53-1.md)

Identifier of the message with a previously set same background; 0 if none. Can be an identifier of a deleted message

### only\_for\_self

> **only\_for\_self**: [`Bool`](Bool.md)

True, if the background was set only for self

## Defined in

dist/generated/types.d.ts:27157
