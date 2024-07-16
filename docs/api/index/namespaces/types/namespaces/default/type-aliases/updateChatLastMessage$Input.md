[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateChatLastMessage$Input

# Type Alias: updateChatLastMessage$Input

> **updateChatLastMessage$Input**: `object`

Version of [updateChatLastMessage](updateChatLastMessage.md) for method parameters.

The last message of a chat was changed

## Type declaration

### \_

> `readonly` **\_**: `"updateChatLastMessage"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### last\_message?

> `readonly` `optional` **last\_message**: [`message$Input`](message$Input-1.md) \| `null`

The new last message in the chat; may be null if the last message became unknown. While the last message is unknown, new messages can be added to the chat without corresponding updateNewMessage update

### positions?

> `readonly` `optional` **positions**: [`vector$Input`](vector$Input.md)\<[`chatPosition$Input`](chatPosition$Input-1.md)\>

The new chat positions in the chat lists

## Defined in

dist/generated/types.d.ts:53404
