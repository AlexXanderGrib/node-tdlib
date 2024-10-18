[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / notificationSound$Input

# Type Alias: notificationSound$Input

> **notificationSound$Input**: `object`

Version of [notificationSound](notificationSound.md) for method parameters.

Describes a notification sound in MP3 format

## Type declaration

### \_

> `readonly` **\_**: `"notificationSound"`

### data?

> `readonly` `optional` **data**: `string`

Arbitrary data, defined while the sound was uploaded

### date?

> `readonly` `optional` **date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the sound was created

### duration?

> `readonly` `optional` **duration**: [`int32`](int32.md)

Duration of the sound, in seconds

### id?

> `readonly` `optional` **id**: [`int64$Input`](int64$Input.md)

Unique identifier of the notification sound

### sound?

> `readonly` `optional` **sound**: [`file$Input`](file$Input.md)

File containing the sound

### title?

> `readonly` `optional` **title**: `string`

Title of the notification sound

## Defined in

dist/generated/types.d.ts:46987
