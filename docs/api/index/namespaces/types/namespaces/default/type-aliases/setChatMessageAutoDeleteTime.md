[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setChatMessageAutoDeleteTime

# Type Alias: setChatMessageAutoDeleteTime()

> **setChatMessageAutoDeleteTime**: (`parameters`) => [`Ok`](Ok-1.md)

Changes the message auto-delete or self-destruct (for secret chats) time in a chat. Requires change_info administrator right in basic groups, supergroups and channels

- Message auto-delete time can't be changed in a chat with the current user (Saved Messages) and the chat 777000 (Telegram).

## Parameters

• **parameters**: [`setChatMessageAutoDeleteTime$Input`](setChatMessageAutoDeleteTime$Input.md)

[setChatMessageAutoDeleteTime$Input](setChatMessageAutoDeleteTime$Input.md)

## Returns

[`Ok`](Ok-1.md)

[Ok](Ok-1.md)

## Defined in

dist/generated/types.d.ts:87674
