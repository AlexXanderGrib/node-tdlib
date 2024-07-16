[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / toggleSupergroupCanHaveSponsoredMessages$DirectInput

# Type Alias: toggleSupergroupCanHaveSponsoredMessages$DirectInput

> **toggleSupergroupCanHaveSponsoredMessages$DirectInput**: `object`

Toggles whether sponsored messages are shown in the channel chat; requires owner privileges in the channel. The chat must have at least chatBoostFeatures.min_sponsored_message_disable_boost_level boost level to disable sponsored messages

## Type declaration

### can\_have\_sponsored\_messages?

> `readonly` `optional` **can\_have\_sponsored\_messages**: [`Bool$Input`](Bool$Input.md)

The new value of can_have_sponsored_messages

### supergroup\_id?

> `readonly` `optional` **supergroup\_id**: [`int53`](int53-1.md)

The identifier of the channel

## Defined in

dist/generated/types.d.ts:96341
