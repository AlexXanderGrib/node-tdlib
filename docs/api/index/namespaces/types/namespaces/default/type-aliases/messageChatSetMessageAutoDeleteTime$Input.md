[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageChatSetMessageAutoDeleteTime$Input

# Type Alias: messageChatSetMessageAutoDeleteTime$Input

> **messageChatSetMessageAutoDeleteTime$Input**: `object`

Version of [messageChatSetMessageAutoDeleteTime](messageChatSetMessageAutoDeleteTime.md) for method parameters.

The auto-delete or self-destruct timer for messages in the chat has been changed

## Type declaration

### \_

> `readonly` **\_**: `"messageChatSetMessageAutoDeleteTime"`

### from\_user\_id?

> `readonly` `optional` **from\_user\_id**: [`int53`](int53.md)

If not 0, a user identifier, which default setting was automatically applied

### message\_auto\_delete\_time?

> `readonly` `optional` **message\_auto\_delete\_time**: [`int32`](int32.md)

New value auto-delete or self-destruct time, in seconds; 0 if disabled

## Defined in

dist/generated/types.d.ts:28003
