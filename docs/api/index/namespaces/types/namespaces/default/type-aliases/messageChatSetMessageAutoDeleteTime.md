[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageChatSetMessageAutoDeleteTime

# Type Alias: messageChatSetMessageAutoDeleteTime

> **messageChatSetMessageAutoDeleteTime**: `object`

The auto-delete or self-destruct timer for messages in the chat has been changed

## Type declaration

### \_

> **\_**: `"messageChatSetMessageAutoDeleteTime"`

### from\_user\_id

> **from\_user\_id**: [`int53`](int53-1.md)

If not 0, a user identifier, which default setting was automatically applied

### message\_auto\_delete\_time

> **message\_auto\_delete\_time**: [`int32`](int32-1.md)

New value auto-delete or self-destruct time, in seconds; 0 if disabled

## Defined in

dist/generated/types.d.ts:27225
