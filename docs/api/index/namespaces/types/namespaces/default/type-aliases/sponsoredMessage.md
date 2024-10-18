[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sponsoredMessage

# Type Alias: sponsoredMessage

> **sponsoredMessage**: `object`

Describes a sponsored message

## Type declaration

### \_

> **\_**: `"sponsoredMessage"`

### accent\_color\_id

> **accent\_color\_id**: [`int32`](int32.md)

Identifier of the accent color for title, button text and message background

### additional\_info

> **additional\_info**: `string`

If non-empty, additional information about the sponsored message to be shown along with the message

### background\_custom\_emoji\_id

> **background\_custom\_emoji\_id**: [`int64`](int64.md)

Identifier of a custom emoji to be shown on the message background; 0 if none

### button\_text

> **button\_text**: `string`

Text for the message action button

### can\_be\_reported

> **can\_be\_reported**: [`Bool`](Bool.md)

True, if the message can be reported to Telegram moderators through reportChatSponsoredMessage

### content

> **content**: [`MessageContent`](MessageContent.md)

Content of the message. Currently, can be only of the types messageText, messageAnimation, messagePhoto, or messageVideo

### is\_recommended

> **is\_recommended**: [`Bool`](Bool.md)

True, if the message needs to be labeled as "recommended" instead of "sponsored"

### message\_id

> **message\_id**: [`int53`](int53.md)

Message identifier; unique for the chat to which the sponsored message belongs among both ordinary and sponsored messages

### sponsor

> **sponsor**: [`messageSponsor`](messageSponsor.md)

Information about the sponsor of the message

### title

> **title**: `string`

Title of the sponsored message

## Defined in

dist/generated/types.d.ts:14987
