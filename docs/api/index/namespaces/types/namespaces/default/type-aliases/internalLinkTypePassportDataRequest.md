[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypePassportDataRequest

# Type Alias: internalLinkTypePassportDataRequest

> **internalLinkTypePassportDataRequest**: `object`

The link contains a request of Telegram passport data. Call getPassportAuthorizationForm with the given parameters to process the link if the link was received from outside of the application; otherwise, ignore it

## Type declaration

### \_

> **\_**: `"internalLinkTypePassportDataRequest"`

### bot\_user\_id

> **bot\_user\_id**: [`int53`](int53.md)

User identifier of the service's bot; the corresponding user may be unknown yet

### callback\_url

> **callback\_url**: `string`

An HTTP URL to open once the request is finished, canceled, or failed with the parameters tg_passport=success, tg_passport=cancel, or tg_passport=error&error=... respectively.

- If empty, then onActivityResult method must be used to return response on Android, or the link tgbot{bot_user_id}://passport/success or tgbot{bot_user_id}://passport/cancel must be opened otherwise

### nonce

> **nonce**: `string`

Unique request identifier provided by the service

### public\_key

> **public\_key**: `string`

Service's public key

### scope

> **scope**: `string`

Telegram Passport element types requested by the service

## Defined in

dist/generated/types.d.ts:49617
