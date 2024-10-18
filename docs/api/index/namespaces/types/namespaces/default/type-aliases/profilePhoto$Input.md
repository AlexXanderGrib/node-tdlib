[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / profilePhoto$Input

# Type Alias: profilePhoto$Input

> **profilePhoto$Input**: `object`

Version of [profilePhoto](profilePhoto.md) for method parameters.

Describes a user profile photo

## Type declaration

### \_

> `readonly` **\_**: `"profilePhoto"`

### big?

> `readonly` `optional` **big**: [`file$Input`](file$Input.md)

A big (640x640) user profile photo. The file can be downloaded only before the photo is changed

### has\_animation?

> `readonly` `optional` **has\_animation**: [`Bool$Input`](Bool$Input.md)

True, if the photo has animated variant

### id?

> `readonly` `optional` **id**: [`int64$Input`](int64$Input.md)

Photo identifier; 0 for an empty photo. Can be used to find a photo in a list of user profile photos

### is\_personal?

> `readonly` `optional` **is\_personal**: [`Bool$Input`](Bool$Input.md)

True, if the photo is visible only for the current user

### minithumbnail?

> `readonly` `optional` **minithumbnail**: [`minithumbnail$Input`](minithumbnail$Input.md) \| `null`

User profile photo minithumbnail; may be null

### small?

> `readonly` `optional` **small**: [`file$Input`](file$Input.md)

A small (160x160) user profile photo. The file can be downloaded only before the photo is changed

## Defined in

dist/generated/types.d.ts:6099
