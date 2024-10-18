[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sponsoredMessage$Input

# Type Alias: sponsoredMessage$Input

> **sponsoredMessage$Input**: `object`

Version of [sponsoredMessage](sponsoredMessage.md) for method parameters.

Describes a sponsored message

## Type declaration

### \_

> `readonly` **\_**: `"sponsoredMessage"`

### accent\_color\_id?

> `readonly` `optional` **accent\_color\_id**: [`int32`](int32.md)

Identifier of the accent color for title, button text and message background

### additional\_info?

> `readonly` `optional` **additional\_info**: `string`

If non-empty, additional information about the sponsored message to be shown along with the message

### background\_custom\_emoji\_id?

> `readonly` `optional` **background\_custom\_emoji\_id**: [`int64$Input`](int64$Input.md)

Identifier of a custom emoji to be shown on the message background; 0 if none

### button\_text?

> `readonly` `optional` **button\_text**: `string`

Text for the message action button

### can\_be\_reported?

> `readonly` `optional` **can\_be\_reported**: [`Bool$Input`](Bool$Input.md)

True, if the message can be reported to Telegram moderators through reportChatSponsoredMessage

### content?

> `readonly` `optional` **content**: [`MessageContent$Input`](MessageContent$Input.md)

Content of the message. Currently, can be only of the types messageText, messageAnimation, messagePhoto, or messageVideo

### is\_recommended?

> `readonly` `optional` **is\_recommended**: [`Bool$Input`](Bool$Input.md)

True, if the message needs to be labeled as "recommended" instead of "sponsored"

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Message identifier; unique for the chat to which the sponsored message belongs among both ordinary and sponsored messages

### sponsor?

> `readonly` `optional` **sponsor**: [`messageSponsor$Input`](messageSponsor$Input.md)

Information about the sponsor of the message

### title?

> `readonly` `optional` **title**: `string`

Title of the sponsored message

## Defined in

dist/generated/types.d.ts:15045
