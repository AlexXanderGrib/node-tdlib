[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / loginUrlInfoRequestConfirmation$Input

# Type Alias: loginUrlInfoRequestConfirmation$Input

> **loginUrlInfoRequestConfirmation$Input**: `object`

Version of [loginUrlInfoRequestConfirmation](loginUrlInfoRequestConfirmation.md) for method parameters.

An authorization confirmation dialog needs to be shown to the user

## Type declaration

### \_

> `readonly` **\_**: `"loginUrlInfoRequestConfirmation"`

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53.md)

User identifier of a bot linked with the website

### domain?

> `readonly` `optional` **domain**: `string`

A domain of the URL

### request\_write\_access?

> `readonly` `optional` **request\_write\_access**: [`Bool$Input`](Bool$Input.md)

True, if the user must be asked for the permission to the bot to send them messages

### url?

> `readonly` `optional` **url**: `string`

An HTTP URL to be opened

## Defined in

dist/generated/types.d.ts:18557
