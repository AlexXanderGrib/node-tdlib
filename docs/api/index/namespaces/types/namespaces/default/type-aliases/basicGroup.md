[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / basicGroup

# Type Alias: basicGroup

> **basicGroup**: `object`

Represents a basic group of 0-200 users (must be upgraded to a supergroup to accommodate more than 200 users)

## Type declaration

### \_

> **\_**: `"basicGroup"`

### id

> **id**: [`int53`](int53.md)

Group identifier

### is\_active

> **is\_active**: [`Bool`](Bool.md)

True, if the group is active

### member\_count

> **member\_count**: [`int32`](int32.md)

Number of members in the group

### status

> **status**: [`ChatMemberStatus`](ChatMemberStatus.md)

Status of the current user in the group

### upgraded\_to\_supergroup\_id

> **upgraded\_to\_supergroup\_id**: [`int53`](int53.md)

Identifier of the supergroup to which this group was upgraded; 0 if none

## Defined in

dist/generated/types.d.ts:11673
