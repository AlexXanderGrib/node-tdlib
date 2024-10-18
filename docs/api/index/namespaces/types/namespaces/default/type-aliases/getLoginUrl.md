[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getLoginUrl

# Type Alias: getLoginUrl()

> **getLoginUrl**: (`parameters`) => [`HttpUrl`](HttpUrl-1.md)

Returns an HTTP URL which can be used to automatically authorize the user on a website after clicking an inline button of type inlineKeyboardButtonTypeLoginUrl.

- Use the method getLoginUrlInfo to find whether a prior user confirmation is needed. If an error is returned, then the button must be handled as an ordinary URL button

## Parameters

• **parameters**: [`getLoginUrl$Input`](getLoginUrl$Input.md)

[getLoginUrl$Input](getLoginUrl$Input.md)

## Returns

[`HttpUrl`](HttpUrl-1.md)

[HttpUrl](HttpUrl-1.md)

## Defined in

dist/generated/types.d.ts:84594
