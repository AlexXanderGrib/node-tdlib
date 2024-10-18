[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getSupergroupMembers$Input

# Type Alias: getSupergroupMembers$Input

> **getSupergroupMembers$Input**: `object`

Returns information about members or banned users in a supergroup or channel. Can be used only if supergroupFullInfo.can_get_members == true; additionally, administrator privileges may be required for some filters

## Type declaration

### \_

> `readonly` **\_**: `"getSupergroupMembers"`

### filter?

> `readonly` `optional` **filter**: [`SupergroupMembersFilter$Input`](SupergroupMembersFilter$Input.md) \| `null`

The type of users to return; pass null to use supergroupMembersFilterRecent

### limit?

> `readonly` `optional` **limit**: [`int32`](int32.md)

The maximum number of users to be returned; up to 200

### offset?

> `readonly` `optional` **offset**: [`int32`](int32.md)

Number of users to skip

### supergroup\_id?

> `readonly` `optional` **supergroup\_id**: [`int53`](int53.md)

Identifier of the supergroup or channel

## Defined in

dist/generated/types.d.ts:99360
