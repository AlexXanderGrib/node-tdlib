[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatBoostSlot

# Type Alias: chatBoostSlot

> **chatBoostSlot**: `object`

Describes a slot for chat boost

## Type declaration

### \_

> **\_**: `"chatBoostSlot"`

### cooldown\_until\_date

> **cooldown\_until\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) after which the boost can be used for another chat

### currently\_boosted\_chat\_id

> **currently\_boosted\_chat\_id**: [`int53`](int53-1.md)

Identifier of the currently boosted chat; 0 if none

### expiration\_date

> **expiration\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the boost will expire

### slot\_id

> **slot\_id**: [`int32`](int32-1.md)

Unique identifier of the slot

### start\_date

> **start\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the chat was boosted; 0 if none

## Defined in

dist/generated/types.d.ts:34373
