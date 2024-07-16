[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / basicGroup$Input

# Type Alias: basicGroup$Input

> **basicGroup$Input**: `object`

Version of [basicGroup](basicGroup-1.md) for method parameters.

Represents a basic group of 0-200 users (must be upgraded to a supergroup to accommodate more than 200 users)

## Type declaration

### \_

> `readonly` **\_**: `"basicGroup"`

### id?

> `readonly` `optional` **id**: [`int53`](int53-1.md)

Group identifier

### is\_active?

> `readonly` `optional` **is\_active**: [`Bool$Input`](Bool$Input.md)

True, if the group is active

### member\_count?

> `readonly` `optional` **member\_count**: [`int32`](int32-1.md)

Number of members in the group

### status?

> `readonly` `optional` **status**: [`ChatMemberStatus$Input`](ChatMemberStatus$Input.md)

Status of the current user in the group

### upgraded\_to\_supergroup\_id?

> `readonly` `optional` **upgraded\_to\_supergroup\_id**: [`int53`](int53-1.md)

Identifier of the supergroup to which this group was upgraded; 0 if none

## Defined in

dist/generated/types.d.ts:11132
