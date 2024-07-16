[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / quickReplyMessage

# Type Alias: quickReplyMessage

> **quickReplyMessage**: `object`

Describes a message that can be used for quick reply

## Type declaration

### \_

> **\_**: `"quickReplyMessage"`

### can\_be\_edited

> **can\_be\_edited**: [`Bool`](Bool.md)

True, if the message can be edited

### content

> **content**: [`MessageContent`](MessageContent.md)

Content of the message

### id

> **id**: [`int53`](int53-1.md)

Unique message identifier among all quick replies

### media\_album\_id

> **media\_album\_id**: [`int64`](int64-1.md)

Unique identifier of an album this message belongs to; 0 if none. Only audios, documents, photos and videos can be grouped together in albums

### reply\_markup

> **reply\_markup**: [`ReplyMarkup`](ReplyMarkup.md) \| `null`

Inline keyboard reply markup for the message; may be null if none

### reply\_to\_message\_id

> **reply\_to\_message\_id**: [`int53`](int53-1.md)

The identifier of the quick reply message to which the message replies; 0 if none

### sending\_state

> **sending\_state**: [`MessageSendingState`](MessageSendingState.md) \| `null`

The sending state of the message; may be null if the message isn't being sent and didn't fail to be sent

### via\_bot\_user\_id

> **via\_bot\_user\_id**: [`int53`](int53-1.md)

If non-zero, the user identifier of the bot through which this message was sent

## Defined in

dist/generated/types.d.ts:33463
