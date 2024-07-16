[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / storageStatisticsByChat

# Type Alias: storageStatisticsByChat

> **storageStatisticsByChat**: `object`

Contains the storage usage statistics for a specific chat

## Type declaration

### \_

> **\_**: `"storageStatisticsByChat"`

### by\_file\_type

> **by\_file\_type**: [`vector`](vector.md)\<[`storageStatisticsByFileType`](storageStatisticsByFileType-1.md)\>

Statistics split by file types

### chat\_id

> **chat\_id**: [`int53`](int53-1.md)

Chat identifier; 0 if none

### count

> **count**: [`int32`](int32-1.md)

Total number of files in the chat

### size

> **size**: [`int53`](int53-1.md)

Total size of the files in the chat, in bytes

## Defined in

dist/generated/types.d.ts:49243
