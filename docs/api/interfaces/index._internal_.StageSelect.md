[TDLib](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / StageSelect

# Interface: StageSelect

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).StageSelect

## Implemented by

- [`Authenticator`](../classes/index.Authenticator.md)

## Table of contents

### Methods

- [phone](index._internal_.StageSelect.md#phone)
- [token](index._internal_.StageSelect.md#token)

## Methods

### phone

▸ **phone**(`phone`, `settings?`): [`StageUser`](index._internal_.StageUser.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `phone` | [`Waiter`](../modules/index._internal_.md#waiter)<`string`, []\> |
| `settings?` | [`Waiter`](../modules/index._internal_.md#waiter)<[`phoneNumberAuthenticationSettings$Input`](../modules/index.types.default.md#phonenumberauthenticationsettings$input-1), []\> |

#### Returns

[`StageUser`](index._internal_.StageUser.md)

#### Defined in

dist/auth.d.ts:25

___

### token

▸ **token**(`token`): [`StageAuthenticate`](index._internal_.StageAuthenticate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`Waiter`](../modules/index._internal_.md#waiter)<`string`, []\> |

#### Returns

[`StageAuthenticate`](index._internal_.StageAuthenticate.md)

#### Defined in

dist/auth.d.ts:24
