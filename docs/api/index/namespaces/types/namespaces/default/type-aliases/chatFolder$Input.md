[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatFolder$Input

# Type Alias: chatFolder$Input

> **chatFolder$Input**: `object`

Version of [chatFolder](chatFolder.md) for method parameters.

Represents a folder for user chats

## Type declaration

### \_

> `readonly` **\_**: `"chatFolder"`

### color\_id?

> `readonly` `optional` **color\_id**: [`int32`](int32.md)

The identifier of the chosen color for the chat folder icon; from -1 to 6. If -1, then color is disabled. Can't be changed if folder tags are disabled or the current user doesn't have Telegram Premium subscription

### exclude\_archived?

> `readonly` `optional` **exclude\_archived**: [`Bool$Input`](Bool$Input.md)

True, if archived chats need to be excluded

### exclude\_muted?

> `readonly` `optional` **exclude\_muted**: [`Bool$Input`](Bool$Input.md)

True, if muted chats need to be excluded

### exclude\_read?

> `readonly` `optional` **exclude\_read**: [`Bool$Input`](Bool$Input.md)

True, if read chats need to be excluded

### excluded\_chat\_ids?

> `readonly` `optional` **excluded\_chat\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53.md)\>

The chat identifiers of always excluded chats in the folder. There can be up to getOption("chat_folder_chosen_chat_count_max") always excluded non-secret chats and the same number of secret chats, but the limit can be increased with Telegram Premium

### icon?

> `readonly` `optional` **icon**: [`chatFolderIcon$Input`](chatFolderIcon$Input.md) \| `null`

The chosen icon for the chat folder; may be null. If null, use getChatFolderDefaultIconName to get default icon name for the folder

### include\_bots?

> `readonly` `optional` **include\_bots**: [`Bool$Input`](Bool$Input.md)

True, if bots need to be included

### include\_channels?

> `readonly` `optional` **include\_channels**: [`Bool$Input`](Bool$Input.md)

True, if channels need to be included

### include\_contacts?

> `readonly` `optional` **include\_contacts**: [`Bool$Input`](Bool$Input.md)

True, if contacts need to be included

### include\_groups?

> `readonly` `optional` **include\_groups**: [`Bool$Input`](Bool$Input.md)

True, if basic groups and supergroups need to be included

### include\_non\_contacts?

> `readonly` `optional` **include\_non\_contacts**: [`Bool$Input`](Bool$Input.md)

True, if non-contact users need to be included

### included\_chat\_ids?

> `readonly` `optional` **included\_chat\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53.md)\>

The chat identifiers of always included chats in the folder. There can be up to getOption("chat_folder_chosen_chat_count_max") pinned and always included non-secret chats and the same number of secret chats, but the limit can be increased with Telegram Premium

### is\_shareable?

> `readonly` `optional` **is\_shareable**: [`Bool$Input`](Bool$Input.md)

True, if at least one link has been created for the folder

### pinned\_chat\_ids?

> `readonly` `optional` **pinned\_chat\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53.md)\>

The chat identifiers of pinned chats in the folder. There can be up to getOption("chat_folder_chosen_chat_count_max") pinned and always included non-secret chats and the same number of secret chats, but the limit can be increased with Telegram Premium

### title?

> `readonly` `optional` **title**: `string`

The title of the folder; 1-12 characters without line feeds

## Defined in

dist/generated/types.d.ts:16108
