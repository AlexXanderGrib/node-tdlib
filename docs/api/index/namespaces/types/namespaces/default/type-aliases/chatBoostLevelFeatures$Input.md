[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatBoostLevelFeatures$Input

# Type Alias: chatBoostLevelFeatures$Input

> **chatBoostLevelFeatures$Input**: `object`

Version of [chatBoostLevelFeatures](chatBoostLevelFeatures.md) for method parameters.

Contains a list of features available on a specific chat boost level

## Type declaration

### \_

> `readonly` **\_**: `"chatBoostLevelFeatures"`

### accent\_color\_count?

> `readonly` `optional` **accent\_color\_count**: [`int32`](int32.md)

Number of custom colors for background of empty chat photo, replies to messages and link previews

### can\_disable\_sponsored\_messages?

> `readonly` `optional` **can\_disable\_sponsored\_messages**: [`Bool$Input`](Bool$Input.md)

True, if sponsored messages can be disabled in the chat

### can\_recognize\_speech?

> `readonly` `optional` **can\_recognize\_speech**: [`Bool$Input`](Bool$Input.md)

True, if speech recognition can be used for video note and voice note messages by all users

### can\_set\_background\_custom\_emoji?

> `readonly` `optional` **can\_set\_background\_custom\_emoji**: [`Bool$Input`](Bool$Input.md)

True, if custom emoji for reply header and link preview background can be set

### can\_set\_custom\_background?

> `readonly` `optional` **can\_set\_custom\_background**: [`Bool$Input`](Bool$Input.md)

True, if custom background can be set in the chat for all users

### can\_set\_custom\_emoji\_sticker\_set?

> `readonly` `optional` **can\_set\_custom\_emoji\_sticker\_set**: [`Bool$Input`](Bool$Input.md)

True, if custom emoji sticker set can be set for the chat

### can\_set\_emoji\_status?

> `readonly` `optional` **can\_set\_emoji\_status**: [`Bool$Input`](Bool$Input.md)

True, if emoji status can be set

### can\_set\_profile\_background\_custom\_emoji?

> `readonly` `optional` **can\_set\_profile\_background\_custom\_emoji**: [`Bool$Input`](Bool$Input.md)

True, if custom emoji for profile background can be set

### chat\_theme\_background\_count?

> `readonly` `optional` **chat\_theme\_background\_count**: [`int32`](int32.md)

Number of chat theme backgrounds that can be set as chat background

### custom\_emoji\_reaction\_count?

> `readonly` `optional` **custom\_emoji\_reaction\_count**: [`int32`](int32.md)

Number of custom emoji reactions that can be added to the list of available reactions

### level?

> `readonly` `optional` **level**: [`int32`](int32.md)

Target chat boost level

### profile\_accent\_color\_count?

> `readonly` `optional` **profile\_accent\_color\_count**: [`int32`](int32.md)

Number of custom colors for profile photo background

### story\_per\_day\_count?

> `readonly` `optional` **story\_per\_day\_count**: [`int32`](int32.md)

Number of stories that the chat can publish daily

### title\_color\_count?

> `readonly` `optional` **title\_color\_count**: [`int32`](int32.md)

Number of custom colors for chat title

## Defined in

dist/generated/types.d.ts:35175
