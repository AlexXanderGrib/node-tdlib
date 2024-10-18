[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatFolder

# Type Alias: chatFolder

> **chatFolder**: `object`

Represents a folder for user chats

## Type declaration

### \_

> **\_**: `"chatFolder"`

### color\_id

> **color\_id**: [`int32`](int32.md)

The identifier of the chosen color for the chat folder icon; from -1 to 6. If -1, then color is disabled. Can't be changed if folder tags are disabled or the current user doesn't have Telegram Premium subscription

### exclude\_archived

> **exclude\_archived**: [`Bool`](Bool.md)

True, if archived chats need to be excluded

### exclude\_muted

> **exclude\_muted**: [`Bool`](Bool.md)

True, if muted chats need to be excluded

### exclude\_read

> **exclude\_read**: [`Bool`](Bool.md)

True, if read chats need to be excluded

### excluded\_chat\_ids

> **excluded\_chat\_ids**: [`vector`](vector.md)\<[`int53`](int53.md)\>

The chat identifiers of always excluded chats in the folder. There can be up to getOption("chat_folder_chosen_chat_count_max") always excluded non-secret chats and the same number of secret chats, but the limit can be increased with Telegram Premium

### icon

> **icon**: [`chatFolderIcon`](chatFolderIcon.md) \| `null`

The chosen icon for the chat folder; may be null. If null, use getChatFolderDefaultIconName to get default icon name for the folder

### include\_bots

> **include\_bots**: [`Bool`](Bool.md)

True, if bots need to be included

### include\_channels

> **include\_channels**: [`Bool`](Bool.md)

True, if channels need to be included

### include\_contacts

> **include\_contacts**: [`Bool`](Bool.md)

True, if contacts need to be included

### include\_groups

> **include\_groups**: [`Bool`](Bool.md)

True, if basic groups and supergroups need to be included

### include\_non\_contacts

> **include\_non\_contacts**: [`Bool`](Bool.md)

True, if non-contact users need to be included

### included\_chat\_ids

> **included\_chat\_ids**: [`vector`](vector.md)\<[`int53`](int53.md)\>

The chat identifiers of always included chats in the folder. There can be up to getOption("chat_folder_chosen_chat_count_max") pinned and always included non-secret chats and the same number of secret chats, but the limit can be increased with Telegram Premium

### is\_shareable

> **is\_shareable**: [`Bool`](Bool.md)

True, if at least one link has been created for the folder

### pinned\_chat\_ids

> **pinned\_chat\_ids**: [`vector`](vector.md)\<[`int53`](int53.md)\>

The chat identifiers of pinned chats in the folder. There can be up to getOption("chat_folder_chosen_chat_count_max") pinned and always included non-secret chats and the same number of secret chats, but the limit can be increased with Telegram Premium

### title

> **title**: `string`

The title of the folder; 1-12 characters without line feeds

## Defined in

dist/generated/types.d.ts:16025
