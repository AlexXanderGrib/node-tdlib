[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setSupergroupUnrestrictBoostCount$Input

# Type Alias: setSupergroupUnrestrictBoostCount$Input

> **setSupergroupUnrestrictBoostCount$Input**: `object`

Changes the number of times the supergroup must be boosted by a user to ignore slow mode and chat permission restrictions; requires can_restrict_members administrator right

## Type declaration

### \_

> `readonly` **\_**: `"setSupergroupUnrestrictBoostCount"`

### supergroup\_id?

> `readonly` `optional` **supergroup\_id**: [`int53`](int53-1.md)

Identifier of the supergroup

### unrestrict\_boost\_count?

> `readonly` `optional` **unrestrict\_boost\_count**: [`int32`](int32-1.md)

New value of the unrestrict_boost_count supergroup setting; 0-8. Use 0 to remove the setting

## Defined in

dist/generated/types.d.ts:96135
