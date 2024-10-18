[**TDLib**](../../README.md) • **Docs**

***

[TDLib](../../modules.md) / [index](../README.md) / Authenticator

# Class: Authenticator

## Export

Authenticator

## Implements

## Implements

## Implements

## Implements

## Implements

- `StageTDLibParameters`
- `StageSelect`
- `StageAuthenticate`
- `StageUser`

## Constructors

### new Authenticator()

> `private` **new Authenticator**(): [`Authenticator`](Authenticator.md)

Creates an instance of Authenticator.

#### Returns

[`Authenticator`](Authenticator.md)

#### Memberof

Authenticator

#### Defined in

dist/auth.d.ts:63

## Properties

### \_client

> `private` `readonly` **\_client**: `any`

#### Defined in

dist/auth.d.ts:56

***

### \_handleUpdate

> `private` **\_handleUpdate**: `any`

#### Param

#### Param

#### Returns

{Promise<void>}

#### Memberof

Authenticator

#### Defined in

dist/auth.d.ts:73

***

### \_state

> `private` `readonly` **\_state**: `any`

#### Defined in

dist/auth.d.ts:57

## Methods

### authenticate()

> **authenticate**(`options`?): `Promise`\<`void`\>

#### Parameters

• **options?**: `AuthenticateOptions`

#### Returns

`Promise`\<`void`\>

{Promise<void>}

#### Throws

if underlying method call throws

#### Throws

if authentication state changes to closed before authentication completes

#### Throws

whatever is reason of cancellation token

#### Memberof

Authenticator

#### Implementation of

`StageAuthenticate.authenticate`

#### Defined in

dist/auth.d.ts:84

***

### code()

> **code**(`code`): `StageUser`

#### Parameters

• **code**: `Waiter`\<`string`, [[`authenticationCodeInfo`](../namespaces/types/namespaces/default/type-aliases/authenticationCodeInfo.md)]\>

#### Returns

`StageUser`

{StageUser}

#### Memberof

Authenticator

#### Implementation of

`StageUser.code`

#### Defined in

dist/auth.d.ts:125

***

### email()

> **email**(`email`): `StageUser`

#### Parameters

• **email**: `Waiter`\<`string`, []\>

#### Returns

`StageUser`

{StageUser}

#### Memberof

Authenticator

#### Implementation of

`StageUser.email`

#### Defined in

dist/auth.d.ts:117

***

### emailCode()

> **emailCode**(`emailCode`): `StageUser`

#### Parameters

• **emailCode**: `Waiter`\<`string`, [[`emailAddressAuthenticationCodeInfo`](../namespaces/types/namespaces/default/type-aliases/emailAddressAuthenticationCodeInfo.md)]\>

#### Returns

`StageUser`

{StageUser}

#### Memberof

Authenticator

#### Implementation of

`StageUser.emailCode`

#### Defined in

dist/auth.d.ts:133

***

### password()

> **password**(`password`): `StageUser`

#### Parameters

• **password**: `Waiter`\<`string`, [`string`]\>

#### Returns

`StageUser`

{StageUser}

#### Memberof

Authenticator

#### Implementation of

`StageUser.password`

#### Defined in

dist/auth.d.ts:141

***

### phone()

> **phone**(`phone`, `settings`?): `StageUser`

#### Parameters

• **phone**: `Waiter`\<`string`, []\>

• **settings?**: `Waiter`\<[`phoneNumberAuthenticationSettings$Input`](../namespaces/types/namespaces/default/type-aliases/phoneNumberAuthenticationSettings$Input.md), []\>

#### Returns

`StageUser`

{StageUser}

#### Memberof

Authenticator

#### Implementation of

`StageSelect.phone`

#### Defined in

dist/auth.d.ts:109

***

### register()

> **register**(`data`): `StageUser`

#### Parameters

• **data**: `Waiter`\<[`registerUser$DirectInput`](../namespaces/types/namespaces/default/type-aliases/registerUser$DirectInput.md), [[`termsOfService`](../namespaces/types/namespaces/default/type-aliases/termsOfService.md)]\>

#### Returns

`StageUser`

{StageUser}

#### Memberof

Authenticator

#### Implementation of

`StageUser.register`

#### Defined in

dist/auth.d.ts:149

***

### tdlibParameters()

> **tdlibParameters**(`parameters`): `StageSelect`

#### Parameters

• **parameters**: `Waiter`\<[`setTdlibParameters$DirectInput`](../namespaces/types/namespaces/default/type-aliases/setTdlibParameters$DirectInput.md), []\>

#### Returns

`StageSelect`

{StageSelect}

#### Memberof

Authenticator

#### Implementation of

`StageTDLibParameters.tdlibParameters`

#### Defined in

dist/auth.d.ts:92

***

### token()

> **token**(`token`): `StageAuthenticate`

#### Parameters

• **token**: `Waiter`\<`string`, []\>

#### Returns

`StageAuthenticate`

{StageSelect}

#### Memberof

Authenticator

#### Implementation of

`StageSelect.token`

#### Defined in

dist/auth.d.ts:100

***

### create()

> `static` **create**(`client`): `StageTDLibParameters`

#### Parameters

• **client**: [`Client`](Client.md)

#### Returns

`StageTDLibParameters`

{StageTDLibParameters}

#### Static

#### Memberof

Authenticator

#### Defined in

dist/auth.d.ts:55
