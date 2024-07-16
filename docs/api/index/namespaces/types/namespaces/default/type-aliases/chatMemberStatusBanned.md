[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatMemberStatusBanned

# Type Alias: chatMemberStatusBanned

> **chatMemberStatusBanned**: `object`

The user or the chat was banned (and hence is not a member of the chat). Implies the user can't return to the chat, view messages, or be used as a participant identifier to join a video chat of the chat

## Type declaration

### \_

> **\_**: `"chatMemberStatusBanned"`

### banned\_until\_date

> **banned\_until\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the user will be unbanned; 0 if never. If the user is banned for more than 366 days or for less than 30 seconds from the current time, the user is considered to be banned forever. Always 0 in basic groups

## Defined in

dist/generated/types.d.ts:10075
