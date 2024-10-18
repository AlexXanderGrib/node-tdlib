[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / profilePhoto

# Type Alias: profilePhoto

> **profilePhoto**: `object`

Describes a user profile photo

## Type declaration

### \_

> **\_**: `"profilePhoto"`

### big

> **big**: [`file`](file.md)

A big (640x640) user profile photo. The file can be downloaded only before the photo is changed

### has\_animation

> **has\_animation**: [`Bool`](Bool.md)

True, if the photo has animated variant

### id

> **id**: [`int64`](int64.md)

Photo identifier; 0 for an empty photo. Can be used to find a photo in a list of user profile photos

### is\_personal

> **is\_personal**: [`Bool`](Bool.md)

True, if the photo is visible only for the current user

### minithumbnail

> **minithumbnail**: [`minithumbnail`](minithumbnail.md) \| `null`

User profile photo minithumbnail; may be null

### small

> **small**: [`file`](file.md)

A small (160x160) user profile photo. The file can be downloaded only before the photo is changed

## Defined in

dist/generated/types.d.ts:6061
