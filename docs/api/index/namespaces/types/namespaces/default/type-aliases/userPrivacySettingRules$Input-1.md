[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / userPrivacySettingRules$Input

# Type Alias: userPrivacySettingRules$Input

> **userPrivacySettingRules$Input**: `object`

Version of [userPrivacySettingRules](userPrivacySettingRules-1.md) for method parameters.

A list of privacy rules. Rules are matched in the specified order. The first matched rule defines the privacy setting for a given user. If no rule matches, the action is not allowed

## Type declaration

### \_

> `readonly` **\_**: `"userPrivacySettingRules"`

### rules?

> `readonly` `optional` **rules**: [`vector$Input`](vector$Input.md)\<[`UserPrivacySettingRule$Input`](UserPrivacySettingRule$Input.md)\>

A list of rules

## Defined in

dist/generated/types.d.ts:46158
