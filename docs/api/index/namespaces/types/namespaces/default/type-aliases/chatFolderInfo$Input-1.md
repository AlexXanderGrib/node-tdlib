[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatFolderInfo$Input

# Type Alias: chatFolderInfo$Input

> **chatFolderInfo$Input**: `object`

Version of [chatFolderInfo](chatFolderInfo-1.md) for method parameters.

Contains basic information about a chat folder

## Type declaration

### \_

> `readonly` **\_**: `"chatFolderInfo"`

### color\_id?

> `readonly` `optional` **color\_id**: [`int32`](int32-1.md)

The identifier of the chosen color for the chat folder icon; from -1 to 6. If -1, then color is disabled

### has\_my\_invite\_links?

> `readonly` `optional` **has\_my\_invite\_links**: [`Bool$Input`](Bool$Input.md)

True, if the chat folder has invite links created by the current user

### icon?

> `readonly` `optional` **icon**: [`chatFolderIcon$Input`](chatFolderIcon$Input-1.md)

The chosen or default icon for the chat folder

### id?

> `readonly` `optional` **id**: [`int32`](int32-1.md)

Unique chat folder identifier

### is\_shareable?

> `readonly` `optional` **is\_shareable**: [`Bool$Input`](Bool$Input.md)

True, if at least one link has been created for the folder

### title?

> `readonly` `optional` **title**: `string`

The title of the folder; 1-12 characters without line feeds

## Defined in

dist/generated/types.d.ts:15635
