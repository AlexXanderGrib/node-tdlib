[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatFolderInfo

# Type Alias: chatFolderInfo

> **chatFolderInfo**: `object`

Contains basic information about a chat folder

## Type declaration

### \_

> **\_**: `"chatFolderInfo"`

### color\_id

> **color\_id**: [`int32`](int32.md)

The identifier of the chosen color for the chat folder icon; from -1 to 6. If -1, then color is disabled

### has\_my\_invite\_links

> **has\_my\_invite\_links**: [`Bool`](Bool.md)

True, if the chat folder has invite links created by the current user

### icon

> **icon**: [`chatFolderIcon`](chatFolderIcon.md)

The chosen or default icon for the chat folder

### id

> **id**: [`int32`](int32.md)

Unique chat folder identifier

### is\_shareable

> **is\_shareable**: [`Bool`](Bool.md)

True, if at least one link has been created for the folder

### title

> **title**: `string`

The title of the folder; 1-12 characters without line feeds

## Defined in

dist/generated/types.d.ts:16189
