[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / readDatePrivacySettings$Input

# Type Alias: readDatePrivacySettings$Input

> **readDatePrivacySettings$Input**: `object`

Version of [readDatePrivacySettings](readDatePrivacySettings.md) for method parameters.

Contains privacy settings for message read date in private chats. Read dates are always shown to the users that can see online status of the current user regardless of this setting

## Type declaration

### \_

> `readonly` **\_**: `"readDatePrivacySettings"`

### show\_read\_date?

> `readonly` `optional` **show\_read\_date**: [`Bool$Input`](Bool$Input.md)

True, if message read date is shown to other users in private chats. If false and the current user isn't a Telegram Premium user, then they will not be able to see other's message read date

## Defined in

dist/generated/types.d.ts:47862
