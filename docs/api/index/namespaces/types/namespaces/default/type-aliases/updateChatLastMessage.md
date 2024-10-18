[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateChatLastMessage

# Type Alias: updateChatLastMessage

> **updateChatLastMessage**: `object`

The last message of a chat was changed

## Type declaration

### \_

> **\_**: `"updateChatLastMessage"`

### chat\_id

> **chat\_id**: [`int53`](int53.md)

Chat identifier

### last\_message

> **last\_message**: [`message`](message.md) \| `null`

The new last message in the chat; may be null if the last message became unknown. While the last message is unknown, new messages can be added to the chat without corresponding updateNewMessage update

### positions

> **positions**: [`vector`](vector.md)\<[`chatPosition`](chatPosition.md)\>

The new chat positions in the chat lists

## Defined in

dist/generated/types.d.ts:54997
