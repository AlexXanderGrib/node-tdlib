[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setMessageSenderBlockList$Input

# Type Alias: setMessageSenderBlockList$Input

> **setMessageSenderBlockList$Input**: `object`

Changes the block list of a message sender. Currently, only users and supergroup chats can be blocked

## Type declaration

### \_

> `readonly` **\_**: `"setMessageSenderBlockList"`

### block\_list?

> `readonly` `optional` **block\_list**: [`BlockList$Input`](BlockList$Input.md) \| `null`

New block list for the message sender; pass null to unblock the message sender

### sender\_id?

> `readonly` `optional` **sender\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Identifier of a message sender to block/unblock

## Defined in

dist/generated/types.d.ts:94406
