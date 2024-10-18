[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / removeAllFilesFromDownloads$Input

# Type Alias: removeAllFilesFromDownloads$Input

> **removeAllFilesFromDownloads$Input**: `object`

Removes all files from the file download list

## Type declaration

### \_

> `readonly` **\_**: `"removeAllFilesFromDownloads"`

### delete\_from\_cache?

> `readonly` `optional` **delete\_from\_cache**: [`Bool$Input`](Bool$Input.md)

Pass true to delete the file from the TDLib file cache

### only\_active?

> `readonly` `optional` **only\_active**: [`Bool$Input`](Bool$Input.md)

Pass true to remove only active downloads, including paused

### only\_completed?

> `readonly` `optional` **only\_completed**: [`Bool$Input`](Bool$Input.md)

Pass true to remove only completed downloads

## Defined in

dist/generated/types.d.ts:91780
