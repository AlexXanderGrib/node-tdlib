[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getLoginUrl$DirectInput

# Type Alias: getLoginUrl$DirectInput

> **getLoginUrl$DirectInput**: `object`

Returns an HTTP URL which can be used to automatically authorize the user on a website after clicking an inline button of type inlineKeyboardButtonTypeLoginUrl.

- Use the method getLoginUrlInfo to find whether a prior user confirmation is needed. If an error is returned, then the button must be handled as an ordinary URL button

## Type declaration

### allow\_write\_access?

> `readonly` `optional` **allow\_write\_access**: [`Bool$Input`](Bool$Input.md)

Pass true to allow the bot to send messages to the current user

### button\_id?

> `readonly` `optional` **button\_id**: [`int53`](int53-1.md)

Button identifier

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier of the message with the button

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Message identifier of the message with the button

## Defined in

dist/generated/types.d.ts:82371
