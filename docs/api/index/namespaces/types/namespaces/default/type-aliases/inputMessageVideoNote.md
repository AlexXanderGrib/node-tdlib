[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageVideoNote

# Type Alias: inputMessageVideoNote

> **inputMessageVideoNote**: `object`

A video note message

## Type declaration

### \_

> **\_**: `"inputMessageVideoNote"`

### duration

> **duration**: [`int32`](int32-1.md)

Duration of the video, in seconds; 0-60

### length

> **length**: [`int32`](int32-1.md)

Video width and height; must be positive and not greater than 640

### self\_destruct\_type

> **self\_destruct\_type**: [`MessageSelfDestructType`](MessageSelfDestructType.md) \| `null`

Video note self-destruct type; may be null if none; pass null if none; private chats only

### thumbnail

> **thumbnail**: [`inputThumbnail`](inputThumbnail-1.md) \| `null`

Video thumbnail; may be null if empty; pass null to skip thumbnail uploading

### video\_note

> **video\_note**: [`InputFile`](InputFile.md)

Video note to be sent

## Defined in

dist/generated/types.d.ts:29851
