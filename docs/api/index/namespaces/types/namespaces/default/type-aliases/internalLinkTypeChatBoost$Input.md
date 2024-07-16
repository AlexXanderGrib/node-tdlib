[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypeChatBoost$Input

# Type Alias: internalLinkTypeChatBoost$Input

> **internalLinkTypeChatBoost$Input**: `object`

Version of [internalLinkTypeChatBoost](internalLinkTypeChatBoost.md) for method parameters.

The link is a link to boost a Telegram chat. Call getChatBoostLinkInfo with the given URL to process the link.

- If the chat is found, then call getChatBoostStatus and getAvailableChatBoostSlots to get the current boost status and check whether the chat can be boosted.

- If the user wants to boost the chat and the chat can be boosted, then call boostChat

## Type declaration

### \_

> `readonly` **\_**: `"internalLinkTypeChatBoost"`

### url?

> `readonly` `optional` **url**: `string`

URL to be passed to getChatBoostLinkInfo

## Defined in

dist/generated/types.d.ts:47684
