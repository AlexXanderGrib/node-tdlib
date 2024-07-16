[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchFileDownloads$Input

# Type Alias: searchFileDownloads$Input

> **searchFileDownloads$Input**: `object`

Searches for files in the file download list or recently downloaded files from the list

## Type declaration

### \_

> `readonly` **\_**: `"searchFileDownloads"`

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of files to be returned

### offset?

> `readonly` `optional` **offset**: `string`

Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results

### only\_active?

> `readonly` `optional` **only\_active**: [`Bool$Input`](Bool$Input.md)

Pass true to search only for active downloads, including paused

### only\_completed?

> `readonly` `optional` **only\_completed**: [`Bool$Input`](Bool$Input.md)

Pass true to search only for completed downloads

### query?

> `readonly` `optional` **query**: `string`

Query to search for; may be empty to return all downloaded files

## Defined in

dist/generated/types.d.ts:89453
