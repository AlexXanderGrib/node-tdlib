[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getStorageStatistics$DirectInput

# Type Alias: getStorageStatistics$DirectInput

> **getStorageStatistics$DirectInput**: `object`

Returns storage usage statistics. Can be called before authorization

## Type declaration

### chat\_limit?

> `readonly` `optional` **chat\_limit**: [`int32`](int32-1.md)

The maximum number of chats with the largest storage usage for which separate statistics need to be returned. All other chats will be grouped in entries with chat_id == 0. If the chat info database is not used, the chat_limit is ignored and is always set to 0

## Defined in

dist/generated/types.d.ts:98804
