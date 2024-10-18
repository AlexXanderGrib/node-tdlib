[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / addSavedAnimation$DirectInput

# Type Alias: addSavedAnimation$DirectInput

> **addSavedAnimation$DirectInput**: `object`

Manually adds a new animation to the list of saved animations. The new animation is added to the beginning of the list. If the animation was already in the list, it is removed first.

- Only non-secret video animations with MIME type "video/mp4" can be added to the list

## Type declaration

### animation?

> `readonly` `optional` **animation**: [`InputFile$Input`](InputFile$Input.md)

The animation file to be added. Only animations known to the server (i.e., successfully sent via a message) can be added to the list

## Defined in

dist/generated/types.d.ts:96139
