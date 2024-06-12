[TDLib](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Authenticator

# Class: Authenticator

[index](../modules/index.md).Authenticator

**`Export`**

Authenticator

**`Implements`**

**`Implements`**

**`Implements`**

**`Implements`**

## Implements

- `StageTDLibParameters`
- `StageSelect`
- `StageAuthenticate`
- `StageUser`

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

• **new Authenticator**(): [`Authenticator`](index.Authenticator.md)

Creates an instance of Authenticator.

#### Returns

[`Authenticator`](index.Authenticator.md)

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

▸ **authenticate**(`options?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `AuthenticateOptions` |

#### Returns

`Promise`\<`void`\>

{Promise<void>}

**`Throws`**

if underlying method call throws

**`Throws`**

if authentication state changes to closed before authentication completes

**`Throws`**

whatever is reason of cancellation token

**`Memberof`**

Authenticator

#### Implementation of

StageAuthenticate.authenticate

#### Defined in

dist/auth.d.ts:85

___

### code

▸ **code**(`code`): `StageUser`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `Waiter`\<`string`, [info: authenticationCodeInfo]\> |

#### Returns

`StageUser`

{StageUser}

**`Memberof`**

Authenticator

#### Implementation of

StageUser.code

#### Defined in

dist/auth.d.ts:126

___

### email

▸ **email**(`email`): `StageUser`

#### Parameters

| Name | Type |
| :------ | :------ |
| `email` | `Waiter`\<`string`, []\> |

#### Returns

`StageUser`

{StageUser}

**`Memberof`**

Authenticator

#### Implementation of

StageUser.email

#### Defined in

dist/auth.d.ts:118

___

### emailCode

▸ **emailCode**(`emailCode`): `StageUser`

#### Parameters

| Name | Type |
| :------ | :------ |
| `emailCode` | `Waiter`\<`string`, [info: emailAddressAuthenticationCodeInfo]\> |

#### Returns

`StageUser`

{StageUser}

**`Memberof`**

Authenticator

#### Implementation of

StageUser.emailCode

#### Defined in

dist/auth.d.ts:134

___

### password

▸ **password**(`password`): `StageUser`

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `Waiter`\<`string`, [hint: string]\> |

#### Returns

`StageUser`

{StageUser}

**`Memberof`**

Authenticator

#### Implementation of

StageUser.password

#### Defined in

dist/auth.d.ts:142

___

### phone

▸ **phone**(`phone`, `settings?`): `StageUser`

#### Parameters

| Name | Type |
| :------ | :------ |
| `phone` | `Waiter`\<`string`, []\> |
| `settings?` | `Waiter`\<[`phoneNumberAuthenticationSettings$Input`](../modules/index.types.default.md#phonenumberauthenticationsettings$input-1), []\> |

#### Returns

`StageUser`

{StageUser}

**`Memberof`**

Authenticator

#### Implementation of

StageSelect.phone

#### Defined in

dist/auth.d.ts:110

___

### register

▸ **register**(`data`): `StageUser`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Waiter`\<[`registerUser$DirectInput`](../modules/index.types.default.md#registeruser$directinput), [tos: termsOfService]\> |

#### Returns

`StageUser`

{StageUser}

**`Memberof`**

Authenticator

#### Implementation of

StageUser.register

#### Defined in

dist/auth.d.ts:150

___

### tdlibParameters

▸ **tdlibParameters**(`parameters`): `StageSelect`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `Waiter`\<[`setTdlibParameters$DirectInput`](../modules/index.types.default.md#settdlibparameters$directinput), []\> |

#### Returns

`StageSelect`

{StageSelect}

**`Memberof`**

Authenticator

#### Implementation of

StageTDLibParameters.tdlibParameters

#### Defined in

dist/auth.d.ts:93

___

### token

▸ **token**(`token`): `StageAuthenticate`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `Waiter`\<`string`, []\> |

#### Returns

`StageAuthenticate`

{StageSelect}

**`Memberof`**

Authenticator

#### Implementation of

StageSelect.token

#### Defined in

dist/auth.d.ts:101

___

### create

▸ **create**(`client`): `StageTDLibParameters`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](index.Client.md) |

#### Returns

`StageTDLibParameters`

{StageTDLibParameters}

**`Static`**

**`Memberof`**

Authenticator

#### Defined in

dist/auth.d.ts:56
