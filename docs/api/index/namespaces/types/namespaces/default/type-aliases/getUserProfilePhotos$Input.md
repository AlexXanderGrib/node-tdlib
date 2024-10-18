[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getUserProfilePhotos$Input

# Type Alias: getUserProfilePhotos$Input

> **getUserProfilePhotos$Input**: `object`

Returns the profile photos of a user. Personal and public photo aren't returned

## Type declaration

### \_

> `readonly` **\_**: `"getUserProfilePhotos"`

### limit?

> `readonly` `optional` **limit**: [`int32`](int32.md)

The maximum number of photos to be returned; up to 100

### offset?

> `readonly` `optional` **offset**: [`int32`](int32.md)

The number of photos to skip; must be non-negative

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53.md)

User identifier

## Defined in

dist/generated/types.d.ts:94958
