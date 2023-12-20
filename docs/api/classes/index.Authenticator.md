[TDLib](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Authenticator

# Class: Authenticator

[index](../modules/index.md).Authenticator

**`Export`**

**`Implements`**

**`Implements`**

**`Implements`**

**`Implements`**

## Implements

- [`StageTDLibParameters`](../interfaces/index._internal_.StageTDLibParameters.md)
- [`StageSelect`](../interfaces/index._internal_.StageSelect.md)
- [`StageAuthenticate`](../interfaces/index._internal_.StageAuthenticate.md)
- [`StageUser`](../interfaces/index._internal_.StageUser.md)

## Table of contents

### Constructors

- [constructor](index.Authenticator.md#constructor)

### Properties

- [\_client](index.Authenticator.md#_client)
- [\_handleUpdate](index.Authenticator.md#_handleupdate)
- [\_state](index.Authenticator.md#_state)

### Methods

- [authenticate](index.Authenticator.md#authenticate)
- [code](index.Authenticator.md#code)
- [email](index.Authenticator.md#email)
- [emailCode](index.Authenticator.md#emailcode)
- [password](index.Authenticator.md#password)
- [phone](index.Authenticator.md#phone)
- [register](index.Authenticator.md#register)
- [tdlibParameters](index.Authenticator.md#tdlibparameters)
- [token](index.Authenticator.md#token)
- [create](index.Authenticator.md#create)

## Constructors

### constructor

• `Private` **new Authenticator**()

Creates an instance of Authenticator.

**`Memberof`**

Authenticator

#### Defined in

dist/auth.d.ts:64

## Properties

### \_client

• `Private` `Readonly` **\_client**: `any`

#### Defined in

dist/auth.d.ts:57

___

### \_handleUpdate

• `Private` **\_handleUpdate**: `any`

**`Param`**

**`Param`**

**`Memberof`**

Authenticator

#### Defined in

dist/auth.d.ts:74

___

### \_state

• `Private` `Readonly` **\_state**: `any`

#### Defined in

dist/auth.d.ts:58

## Methods

### authenticate

▸ **authenticate**(`options?`): `Promise`<`void`\>

**`Throws`**

if underlying method call throws

**`Throws`**

if authentication state changes to closed before authentication completes

**`Throws`**

whatever is reason of cancellation token

**`Memberof`**

Authenticator

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`AuthenticateOptions`](../modules/index._internal_.md#authenticateoptions) |

#### Returns

`Promise`<`void`\>

{Promise<void>}

#### Implementation of

[StageUser](../interfaces/index._internal_.StageUser.md).[authenticate](../interfaces/index._internal_.StageUser.md#authenticate)

#### Defined in

dist/auth.d.ts:85

___

### code

▸ **code**(`code`): [`StageUser`](../interfaces/index._internal_.StageUser.md)

**`Memberof`**

Authenticator

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | [`Waiter`](../modules/index._internal_.md#waiter)<`string`, [info: authenticationCodeInfo]\> |

#### Returns

[`StageUser`](../interfaces/index._internal_.StageUser.md)

{StageUser}

#### Implementation of

[StageUser](../interfaces/index._internal_.StageUser.md).[code](../interfaces/index._internal_.StageUser.md#code)

#### Defined in

dist/auth.d.ts:126

___

### email

▸ **email**(`email`): [`StageUser`](../interfaces/index._internal_.StageUser.md)

**`Memberof`**

Authenticator

#### Parameters

| Name | Type |
| :------ | :------ |
| `email` | [`Waiter`](../modules/index._internal_.md#waiter)<`string`, []\> |

#### Returns

[`StageUser`](../interfaces/index._internal_.StageUser.md)

{StageUser}

#### Implementation of

[StageUser](../interfaces/index._internal_.StageUser.md).[email](../interfaces/index._internal_.StageUser.md#email)

#### Defined in

dist/auth.d.ts:118

___

### emailCode

▸ **emailCode**(`emailCode`): [`StageUser`](../interfaces/index._internal_.StageUser.md)

**`Memberof`**

Authenticator

#### Parameters

| Name | Type |
| :------ | :------ |
| `emailCode` | [`Waiter`](../modules/index._internal_.md#waiter)<`string`, [info: emailAddressAuthenticationCodeInfo]\> |

#### Returns

[`StageUser`](../interfaces/index._internal_.StageUser.md)

{StageUser}

#### Implementation of

[StageUser](../interfaces/index._internal_.StageUser.md).[emailCode](../interfaces/index._internal_.StageUser.md#emailcode)

#### Defined in

dist/auth.d.ts:134

___

### password

▸ **password**(`password`): [`StageUser`](../interfaces/index._internal_.StageUser.md)

**`Memberof`**

Authenticator

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | [`Waiter`](../modules/index._internal_.md#waiter)<`string`, [hint: string]\> |

#### Returns

[`StageUser`](../interfaces/index._internal_.StageUser.md)

{StageUser}

#### Implementation of

[StageUser](../interfaces/index._internal_.StageUser.md).[password](../interfaces/index._internal_.StageUser.md#password)

#### Defined in

dist/auth.d.ts:142

___

### phone

▸ **phone**(`phone`, `settings?`): [`StageUser`](../interfaces/index._internal_.StageUser.md)

**`Memberof`**

Authenticator

#### Parameters

| Name | Type |
| :------ | :------ |
| `phone` | [`Waiter`](../modules/index._internal_.md#waiter)<`string`, []\> |
| `settings?` | [`Waiter`](../modules/index._internal_.md#waiter)<[`phoneNumberAuthenticationSettings$Input`](../modules/index.types.default.md#phonenumberauthenticationsettings$input-1), []\> |

#### Returns

[`StageUser`](../interfaces/index._internal_.StageUser.md)

{StageUser}

#### Implementation of

[StageSelect](../interfaces/index._internal_.StageSelect.md).[phone](../interfaces/index._internal_.StageSelect.md#phone)

#### Defined in

dist/auth.d.ts:110

___

### register

▸ **register**(`data`): [`StageUser`](../interfaces/index._internal_.StageUser.md)

**`Memberof`**

Authenticator

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`Waiter`](../modules/index._internal_.md#waiter)<[`registerUser$DirectInput`](../modules/index.types.default.md#registeruser$directinput), [tos: termsOfService]\> |

#### Returns

[`StageUser`](../interfaces/index._internal_.StageUser.md)

{StageUser}

#### Implementation of

[StageUser](../interfaces/index._internal_.StageUser.md).[register](../interfaces/index._internal_.StageUser.md#register)

#### Defined in

dist/auth.d.ts:150

___

### tdlibParameters

▸ **tdlibParameters**(`parameters`): [`StageSelect`](../interfaces/index._internal_.StageSelect.md)

**`Memberof`**

Authenticator

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`Waiter`](../modules/index._internal_.md#waiter)<[`setTdlibParameters$DirectInput`](../modules/index.types.default.md#settdlibparameters$directinput), []\> |

#### Returns

[`StageSelect`](../interfaces/index._internal_.StageSelect.md)

{StageSelect}

#### Implementation of

[StageTDLibParameters](../interfaces/index._internal_.StageTDLibParameters.md).[tdlibParameters](../interfaces/index._internal_.StageTDLibParameters.md#tdlibparameters)

#### Defined in

dist/auth.d.ts:93

___

### token

▸ **token**(`token`): [`StageAuthenticate`](../interfaces/index._internal_.StageAuthenticate.md)

**`Memberof`**

Authenticator

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`Waiter`](../modules/index._internal_.md#waiter)<`string`, []\> |

#### Returns

[`StageAuthenticate`](../interfaces/index._internal_.StageAuthenticate.md)

{StageSelect}

#### Implementation of

[StageSelect](../interfaces/index._internal_.StageSelect.md).[token](../interfaces/index._internal_.StageSelect.md#token)

#### Defined in

dist/auth.d.ts:101

___

### create

▸ `Static` **create**(`client`): [`StageTDLibParameters`](../interfaces/index._internal_.StageTDLibParameters.md)

**`Static`**

**`Memberof`**

Authenticator

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](index.Client.md) |

#### Returns

[`StageTDLibParameters`](../interfaces/index._internal_.StageTDLibParameters.md)

{StageTDLibParameters}

#### Defined in

dist/auth.d.ts:56
