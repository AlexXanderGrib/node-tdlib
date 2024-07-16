[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / storageStatisticsByChat$Input

# Type Alias: storageStatisticsByChat$Input

> **storageStatisticsByChat$Input**: `object`

Version of [storageStatisticsByChat](storageStatisticsByChat-1.md) for method parameters.

Contains the storage usage statistics for a specific chat

## Type declaration

### \_

> `readonly` **\_**: `"storageStatisticsByChat"`

### by\_file\_type?

> `readonly` `optional` **by\_file\_type**: [`vector$Input`](vector$Input.md)\<[`storageStatisticsByFileType$Input`](storageStatisticsByFileType$Input-1.md)\>

Statistics split by file types

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier; 0 if none

### count?

> `readonly` `optional` **count**: [`int32`](int32-1.md)

Total number of files in the chat

### size?

> `readonly` `optional` **size**: [`int53`](int53-1.md)

Total size of the files in the chat, in bytes

## Defined in

dist/generated/types.d.ts:49271
