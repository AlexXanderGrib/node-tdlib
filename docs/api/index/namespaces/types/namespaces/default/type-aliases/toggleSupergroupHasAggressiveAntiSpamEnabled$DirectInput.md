[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / toggleSupergroupHasAggressiveAntiSpamEnabled$DirectInput

# Type Alias: toggleSupergroupHasAggressiveAntiSpamEnabled$DirectInput

> **toggleSupergroupHasAggressiveAntiSpamEnabled$DirectInput**: `object`

Toggles whether aggressive anti-spam checks are enabled in the supergroup. Can be called only if supergroupFullInfo.can_toggle_aggressive_anti_spam == true

## Type declaration

### has\_aggressive\_anti\_spam\_enabled?

> `readonly` `optional` **has\_aggressive\_anti\_spam\_enabled**: [`Bool$Input`](Bool$Input.md)

The new value of has_aggressive_anti_spam_enabled

### supergroup\_id?

> `readonly` `optional` **supergroup\_id**: [`int53`](int53.md)

The identifier of the supergroup, which isn't a broadcast group

## Defined in

dist/generated/types.d.ts:99196
