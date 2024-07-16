[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatPhotoInfo

# Type Alias: chatPhotoInfo

> **chatPhotoInfo**: `object`

Contains basic information about the photo of a chat

## Type declaration

### \_

> **\_**: `"chatPhotoInfo"`

### big

> **big**: [`file`](file-1.md)

A big (640x640) chat photo variant in JPEG format. The file can be downloaded only before the photo is changed

### has\_animation

> **has\_animation**: [`Bool`](Bool.md)

True, if the photo has animated variant

### is\_personal

> **is\_personal**: [`Bool`](Bool.md)

True, if the photo is visible only for the current user

### minithumbnail

> **minithumbnail**: [`minithumbnail`](minithumbnail-1.md) \| `null`

Chat photo minithumbnail; may be null

### small

> **small**: [`file`](file-1.md)

A small (160x160) chat photo variant in JPEG format. The file can be downloaded only before the photo is changed

## Defined in

dist/generated/types.d.ts:6089
