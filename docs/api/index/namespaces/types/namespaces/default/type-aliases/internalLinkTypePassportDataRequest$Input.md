[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypePassportDataRequest$Input

# Type Alias: internalLinkTypePassportDataRequest$Input

> **internalLinkTypePassportDataRequest$Input**: `object`

Version of [internalLinkTypePassportDataRequest](internalLinkTypePassportDataRequest.md) for method parameters.

The link contains a request of Telegram passport data. Call getPassportAuthorizationForm with the given parameters to process the link if the link was received from outside of the application; otherwise, ignore it

## Type declaration

### \_

> `readonly` **\_**: `"internalLinkTypePassportDataRequest"`

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53.md)

User identifier of the service's bot; the corresponding user may be unknown yet

### callback\_url?

> `readonly` `optional` **callback\_url**: `string`

An HTTP URL to open once the request is finished, canceled, or failed with the parameters tg_passport=success, tg_passport=cancel, or tg_passport=error&error=... respectively.

- If empty, then onActivityResult method must be used to return response on Android, or the link tgbot{bot_user_id}://passport/success or tgbot{bot_user_id}://passport/cancel must be opened otherwise

### nonce?

> `readonly` `optional` **nonce**: `string`

Unique request identifier provided by the service

### public\_key?

> `readonly` `optional` **public\_key**: `string`

Service's public key

### scope?

> `readonly` `optional` **scope**: `string`

Telegram Passport element types requested by the service

## Defined in

dist/generated/types.d.ts:49652
