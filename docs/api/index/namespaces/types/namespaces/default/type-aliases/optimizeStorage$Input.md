[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / optimizeStorage$Input

# Type Alias: optimizeStorage$Input

> **optimizeStorage$Input**: `object`

Optimizes storage usage, i.e. deletes some files and returns new storage usage statistics. Secret thumbnails can't be deleted

## Type declaration

### \_

> `readonly` **\_**: `"optimizeStorage"`

### chat\_ids?

> `readonly` `optional` **chat\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53.md)\>

If non-empty, only files from the given chats are considered. Use 0 as chat identifier to delete files not belonging to any chat (e.g., profile photos)

### chat\_limit?

> `readonly` `optional` **chat\_limit**: [`int32`](int32.md)

Same as in getStorageStatistics. Affects only returned statistics

### count?

> `readonly` `optional` **count**: [`int32`](int32.md)

Limit on the total number of files after deletion. Pass -1 to use the default limit

### exclude\_chat\_ids?

> `readonly` `optional` **exclude\_chat\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53.md)\>

If non-empty, files from the given chats are excluded. Use 0 as chat identifier to exclude all files not belonging to any chat (e.g., profile photos)

### file\_types?

> `readonly` `optional` **file\_types**: [`vector$Input`](vector$Input.md)\<[`FileType$Input`](FileType$Input.md)\>

If non-empty, only files with the given types are considered. By default, all types except thumbnails, profile photos, stickers and wallpapers are deleted

### immunity\_delay?

> `readonly` `optional` **immunity\_delay**: [`int32`](int32.md)

The amount of time after the creation of a file during which it can't be deleted, in seconds. Pass -1 to use the default value

### return\_deleted\_file\_statistics?

> `readonly` `optional` **return\_deleted\_file\_statistics**: [`Bool$Input`](Bool$Input.md)

Pass true if statistics about the files that were deleted must be returned instead of the whole storage usage statistics. Affects only returned statistics

### size?

> `readonly` `optional` **size**: [`int53`](int53.md)

Limit on the total size of files after deletion, in bytes. Pass -1 to use the default limit

### ttl?

> `readonly` `optional` **ttl**: [`int32`](int32.md)

Limit on the time that has passed since the last time a file was accessed (or creation time for some filesystems). Pass -1 to use the default limit

## Defined in

dist/generated/types.d.ts:101634
