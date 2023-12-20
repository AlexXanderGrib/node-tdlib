[TDLib](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / StageUser

# Interface: StageUser

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).StageUser

## Hierarchy

- [`StageAuthenticate`](index._internal_.StageAuthenticate.md)

  ↳ **`StageUser`**

## Implemented by

- [`Authenticator`](../classes/index.Authenticator.md)

## Table of contents

### Methods

- [authenticate](index._internal_.StageUser.md#authenticate)
- [code](index._internal_.StageUser.md#code)
- [email](index._internal_.StageUser.md#email)
- [emailCode](index._internal_.StageUser.md#emailcode)
- [password](index._internal_.StageUser.md#password)
- [register](index._internal_.StageUser.md#register)

## Methods

### authenticate

▸ **authenticate**(`options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`AuthenticateOptions`](../modules/index._internal_.md#authenticateoptions) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[StageAuthenticate](index._internal_.StageAuthenticate.md).[authenticate](index._internal_.StageAuthenticate.md#authenticate)

#### Defined in

dist/auth.d.ts:28

___

### code

▸ **code**(`email`): [`StageUser`](index._internal_.StageUser.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `email` | [`Waiter`](../modules/index._internal_.md#waiter)<`string`, [info: authenticationCodeInfo]\> |

#### Returns

[`StageUser`](index._internal_.StageUser.md)

#### Defined in

dist/auth.d.ts:32

___

### email

▸ **email**(`email`): [`StageUser`](index._internal_.StageUser.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `email` | [`Waiter`](../modules/index._internal_.md#waiter)<`string`, []\> |

#### Returns

[`StageUser`](index._internal_.StageUser.md)

#### Defined in

dist/auth.d.ts:31

___

### emailCode

▸ **emailCode**(`email`): [`StageUser`](index._internal_.StageUser.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `email` | [`Waiter`](../modules/index._internal_.md#waiter)<`string`, [info: emailAddressAuthenticationCodeInfo]\> |

#### Returns

[`StageUser`](index._internal_.StageUser.md)

#### Defined in

dist/auth.d.ts:33

___

### password

▸ **password**(`password`): [`StageUser`](index._internal_.StageUser.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | [`Waiter`](../modules/index._internal_.md#waiter)<`string`, [hint: string]\> |

#### Returns

[`StageUser`](index._internal_.StageUser.md)

#### Defined in

dist/auth.d.ts:34

___

### register

▸ **register**(`data`): [`StageUser`](index._internal_.StageUser.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`Waiter`](../modules/index._internal_.md#waiter)<[`registerUser$DirectInput`](../modules/index.types.default.md#registeruser$directinput), [tos: termsOfService]\> |

#### Returns

[`StageUser`](index._internal_.StageUser.md)

#### Defined in

dist/auth.d.ts:35
