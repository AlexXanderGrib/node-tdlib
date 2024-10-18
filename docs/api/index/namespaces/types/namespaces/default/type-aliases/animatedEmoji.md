[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / animatedEmoji

# Type Alias: animatedEmoji

> **animatedEmoji**: `object`

Describes an animated or custom representation of an emoji

## Type declaration

### \_

> **\_**: `"animatedEmoji"`

### fitzpatrick\_type

> **fitzpatrick\_type**: [`int32`](int32.md)

Emoji modifier fitzpatrick type; 0-6; 0 if none

### sound

> **sound**: [`file`](file.md) \| `null`

File containing the sound to be played when the sticker is clicked; may be null. The sound is encoded with the Opus codec, and stored inside an OGG container

### sticker

> **sticker**: [`sticker`](sticker.md) \| `null`

Sticker for the emoji; may be null if yet unknown for a custom emoji. If the sticker is a custom emoji, then it can have arbitrary format

### sticker\_height

> **sticker\_height**: [`int32`](int32.md)

Expected height of the sticker, which can be used if the sticker is null

### sticker\_width

> **sticker\_width**: [`int32`](int32.md)

Expected width of the sticker, which can be used if the sticker is null

## Defined in

dist/generated/types.d.ts:5421
