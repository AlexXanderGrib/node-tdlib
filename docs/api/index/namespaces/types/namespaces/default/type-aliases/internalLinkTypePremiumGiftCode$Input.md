[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypePremiumGiftCode$Input

# Type Alias: internalLinkTypePremiumGiftCode$Input

> **internalLinkTypePremiumGiftCode$Input**: `object`

Version of [internalLinkTypePremiumGiftCode](internalLinkTypePremiumGiftCode.md) for method parameters.

The link is a link with a Telegram Premium gift code. Call checkPremiumGiftCode with the given code to process the link.

- If the code is valid and the user wants to apply it, then call applyPremiumGiftCode

## Type declaration

### \_

> `readonly` **\_**: `"internalLinkTypePremiumGiftCode"`

### code?

> `readonly` `optional` **code**: `string`

The Telegram Premium gift code

## Defined in

dist/generated/types.d.ts:49788
