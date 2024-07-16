[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / quickReplyMessage$Input

# Type Alias: quickReplyMessage$Input

> **quickReplyMessage$Input**: `object`

Version of [quickReplyMessage](quickReplyMessage-1.md) for method parameters.

Describes a message that can be used for quick reply

## Type declaration

### \_

> `readonly` **\_**: `"quickReplyMessage"`

### can\_be\_edited?

> `readonly` `optional` **can\_be\_edited**: [`Bool$Input`](Bool$Input.md)

True, if the message can be edited

### content?

> `readonly` `optional` **content**: [`MessageContent$Input`](MessageContent$Input.md)

Content of the message

### id?

> `readonly` `optional` **id**: [`int53`](int53-1.md)

Unique message identifier among all quick replies

### media\_album\_id?

> `readonly` `optional` **media\_album\_id**: [`int64$Input`](int64$Input-1.md)

Unique identifier of an album this message belongs to; 0 if none. Only audios, documents, photos and videos can be grouped together in albums

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

Inline keyboard reply markup for the message; may be null if none

### reply\_to\_message\_id?

> `readonly` `optional` **reply\_to\_message\_id**: [`int53`](int53-1.md)

The identifier of the quick reply message to which the message replies; 0 if none

### sending\_state?

> `readonly` `optional` **sending\_state**: [`MessageSendingState$Input`](MessageSendingState$Input.md) \| `null`

The sending state of the message; may be null if the message isn't being sent and didn't fail to be sent

### via\_bot\_user\_id?

> `readonly` `optional` **via\_bot\_user\_id**: [`int53`](int53-1.md)

If non-zero, the user identifier of the bot through which this message was sent

## Defined in

dist/generated/types.d.ts:33511
