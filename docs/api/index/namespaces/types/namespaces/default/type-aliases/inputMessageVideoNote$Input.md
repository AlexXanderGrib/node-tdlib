[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageVideoNote$Input

# Type Alias: inputMessageVideoNote$Input

> **inputMessageVideoNote$Input**: `object`

Version of [inputMessageVideoNote](inputMessageVideoNote.md) for method parameters.

A video note message

## Type declaration

### \_

> `readonly` **\_**: `"inputMessageVideoNote"`

### duration?

> `readonly` `optional` **duration**: [`int32`](int32.md)

Duration of the video, in seconds; 0-60

### length?

> `readonly` `optional` **length**: [`int32`](int32.md)

Video width and height; must be positive and not greater than 640

### self\_destruct\_type?

> `readonly` `optional` **self\_destruct\_type**: [`MessageSelfDestructType$Input`](MessageSelfDestructType$Input.md) \| `null`

Video note self-destruct type; may be null if none; pass null if none; private chats only

### thumbnail?

> `readonly` `optional` **thumbnail**: [`inputThumbnail$Input`](inputThumbnail$Input.md) \| `null`

Video thumbnail; may be null if empty; pass null to skip thumbnail uploading

### video\_note?

> `readonly` `optional` **video\_note**: [`InputFile$Input`](InputFile$Input.md)

Video note to be sent

## Defined in

dist/generated/types.d.ts:30758
