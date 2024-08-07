[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getMapThumbnailFile$Input

# Type Alias: getMapThumbnailFile$Input

> **getMapThumbnailFile$Input**: `object`

Returns information about a file with a map thumbnail in PNG format. Only map thumbnail files with size less than 1MB can be downloaded

## Type declaration

### \_

> `readonly` **\_**: `"getMapThumbnailFile"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of a chat in which the thumbnail will be shown. Use 0 if unknown

### height?

> `readonly` `optional` **height**: [`int32`](int32-1.md)

Map height in pixels before applying scale; 16-1024

### location?

> `readonly` `optional` **location**: [`location$Input`](location$Input-1.md)

Location of the map center

### scale?

> `readonly` `optional` **scale**: [`int32`](int32-1.md)

Map scale; 1-3

### width?

> `readonly` `optional` **width**: [`int32`](int32-1.md)

Map width in pixels before applying scale; 16-1024

### zoom?

> `readonly` `optional` **zoom**: [`int32`](int32-1.md)

Map zoom level; 13-20

## Defined in

dist/generated/types.d.ts:100354
