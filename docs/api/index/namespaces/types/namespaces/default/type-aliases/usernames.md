[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / usernames

# Type Alias: usernames

> **usernames**: `object`

Describes usernames assigned to a user, a supergroup, or a channel

## Type declaration

### \_

> **\_**: `"usernames"`

### active\_usernames

> **active\_usernames**: [`vector`](vector.md)\<`string`\>

List of active usernames; the first one must be shown as the primary username. The order of active usernames can be changed with reorderActiveUsernames, reorderBotActiveUsernames or reorderSupergroupActiveUsernames

### disabled\_usernames

> **disabled\_usernames**: [`vector`](vector.md)\<`string`\>

List of currently disabled usernames; the username can be activated with toggleUsernameIsActive, toggleBotUsernameIsActive, or toggleSupergroupUsernameIsActive

### editable\_username

> **editable\_username**: `string`

The active username, which can be changed with setUsername or setSupergroupUsername. Information about other active usernames can be received using getCollectibleItemInfo

## Defined in

dist/generated/types.d.ts:9547
