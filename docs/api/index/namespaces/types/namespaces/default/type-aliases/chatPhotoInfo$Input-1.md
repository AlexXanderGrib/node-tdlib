[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatPhotoInfo$Input

# Type Alias: chatPhotoInfo$Input

> **chatPhotoInfo$Input**: `object`

Version of [chatPhotoInfo](chatPhotoInfo-1.md) for method parameters.

Contains basic information about the photo of a chat

## Type declaration

### \_

> `readonly` **\_**: `"chatPhotoInfo"`

### big?

> `readonly` `optional` **big**: [`file$Input`](file$Input-1.md)

A big (640x640) chat photo variant in JPEG format. The file can be downloaded only before the photo is changed

### has\_animation?

> `readonly` `optional` **has\_animation**: [`Bool$Input`](Bool$Input.md)

True, if the photo has animated variant

### is\_personal?

> `readonly` `optional` **is\_personal**: [`Bool$Input`](Bool$Input.md)

True, if the photo is visible only for the current user

### minithumbnail?

> `readonly` `optional` **minithumbnail**: [`minithumbnail$Input`](minithumbnail$Input-1.md) \| `null`

Chat photo minithumbnail; may be null

### small?

> `readonly` `optional` **small**: [`file$Input`](file$Input-1.md)

A small (160x160) chat photo variant in JPEG format. The file can be downloaded only before the photo is changed

## Defined in

dist/generated/types.d.ts:6122
