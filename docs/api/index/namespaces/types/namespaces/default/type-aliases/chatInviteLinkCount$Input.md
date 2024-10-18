[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatInviteLinkCount$Input

# Type Alias: chatInviteLinkCount$Input

> **chatInviteLinkCount$Input**: `object`

Version of [chatInviteLinkCount](chatInviteLinkCount.md) for method parameters.

Describes a chat administrator with a number of active and revoked chat invite links

## Type declaration

### \_

> `readonly` **\_**: `"chatInviteLinkCount"`

### invite\_link\_count?

> `readonly` `optional` **invite\_link\_count**: [`int32`](int32.md)

Number of active invite links

### revoked\_invite\_link\_count?

> `readonly` `optional` **revoked\_invite\_link\_count**: [`int32`](int32.md)

Number of revoked invite links

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53.md)

Administrator's user identifier

## Defined in

dist/generated/types.d.ts:11178
