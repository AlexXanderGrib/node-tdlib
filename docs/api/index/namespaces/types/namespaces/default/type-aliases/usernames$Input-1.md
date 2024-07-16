[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / usernames$Input

# Type Alias: usernames$Input

> **usernames$Input**: `object`

Version of [usernames](usernames-1.md) for method parameters.

Describes usernames assigned to a user, a supergroup, or a channel

## Type declaration

### \_

> `readonly` **\_**: `"usernames"`

### active\_usernames?

> `readonly` `optional` **active\_usernames**: [`vector$Input`](vector$Input.md)\<`string`\>

List of active usernames; the first one must be shown as the primary username. The order of active usernames can be changed with reorderActiveUsernames, reorderBotActiveUsernames or reorderSupergroupActiveUsernames

### disabled\_usernames?

> `readonly` `optional` **disabled\_usernames**: [`vector$Input`](vector$Input.md)\<`string`\>

List of currently disabled usernames; the username can be activated with toggleUsernameIsActive, toggleBotUsernameIsActive, or toggleSupergroupUsernameIsActive

### editable\_username?

> `readonly` `optional` **editable\_username**: `string`

The active username, which can be changed with setUsername or setSupergroupUsername. Information about other active usernames can be received using getCollectibleItemInfo

## Defined in

dist/generated/types.d.ts:9134
