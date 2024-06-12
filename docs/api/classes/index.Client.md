[TDLib](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Client

# Class: Client

[index](../modules/index.md).Client

**`Export`**

Client

## Table of contents

### Constructors

- [constructor](index.Client.md#constructor)

### Properties

- [\_adapter](index.Client.md#_adapter)
- [\_client](index.Client.md#_client)
- [\_requests](index.Client.md#_requests)
- [\_state](index.Client.md#_state)
- [\_thread](index.Client.md#_thread)
- [\_updates](index.Client.md#_updates)
- [api](index.Client.md#api)
- [syncApi](index.Client.md#syncapi)

### Accessors

- [tdlibOptions](index.Client.md#tdliboptions)
- [updates](index.Client.md#updates)

### Methods

- [destroy](index.Client.md#destroy)
- [execute](index.Client.md#execute)
- [invoke](index.Client.md#invoke)
- [pause](index.Client.md#pause)
- [start](index.Client.md#start)
- [execute](index.Client.md#execute-1)

## Constructors

### constructor

• **new Client**(`adapter`): [`Client`](index.Client.md)

Creates an instance of Client.

#### Parameters

| Name | Type |
| :------ | :------ |
| `adapter` | `TDLib` |

#### Returns

[`Client`](index.Client.md)

**`Memberof`**

Client

#### Defined in

dist/client.d.ts:65

## Properties

### \_adapter

• `Private` `Readonly` **\_adapter**: `any`

#### Defined in

dist/client.d.ts:58

___

### \_client

• `Private` `Readonly` **\_client**: `any`

#### Defined in

dist/client.d.ts:55

___

### \_requests

• `Private` `Readonly` **\_requests**: `any`

#### Defined in

dist/client.d.ts:56

___

### \_state

• `Private` **\_state**: `any`

#### Defined in

dist/client.d.ts:59

___

### \_thread

• `Private` **\_thread**: `any`

**`Memberof`**

Client

#### Defined in

dist/client.d.ts:108

___

### \_updates

• `Private` `Readonly` **\_updates**: `any`

#### Defined in

dist/client.d.ts:57

___

### api

• `Readonly` **api**: [`$AsyncApi`](index.types.default._AsyncApi.md)

#### Defined in

dist/client.d.ts:66

___

### syncApi

• `Readonly` **syncApi**: [`$SyncApi`](index.types.default._SyncApi.md)

#### Defined in

dist/client.d.ts:67

## Accessors

### tdlibOptions

• `get` **tdlibOptions**(): [`TDLibOptions`](index.TDLibOptions.md)

#### Returns

[`TDLibOptions`](index.TDLibOptions.md)

**`See`**

https://core.telegram.org/tdlib/options

**`Memberof`**

Client

#### Defined in

dist/client.d.ts:115

___

### updates

• `get` **updates**(): `Observable`\<[`Update`](../modules/index.types.default.md#update)\>

#### Returns

`Observable`\<[`Update`](../modules/index.types.default.md#update)\>

**`Memberof`**

Client

#### Defined in

dist/client.d.ts:123

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

**`Memberof`**

Client

#### Defined in

dist/client.d.ts:144

___

### execute

▸ **execute**\<`T`\>(`method`, `parameters`): `ReturnType`\<[`$SyncApi`](index.types.default._SyncApi.md)[`T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`$SyncApi`](index.types.default._SyncApi.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `T` |
| `parameters` | `OmitType`\<`Parameters`\<[`$MethodsDict`](../modules/index.types.default.md#$methodsdict)[`T`]\>[``0``]\> |

#### Returns

`ReturnType`\<[`$SyncApi`](index.types.default._SyncApi.md)[`T`]\>

{Promise<ReturnType<$SyncApi[T]>>}

**`Throws`**

- [TDError](index.TDError.md)

**`Memberof`**

Client

#### Defined in

dist/client.d.ts:101

___

### invoke

▸ **invoke**\<`T`\>(`method`, `parameters`): `Promise`\<`ReturnType`\<[`$MethodsDict`](../modules/index.types.default.md#$methodsdict)[`T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`$AsyncApi`](index.types.default._AsyncApi.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `T` |
| `parameters` | `Parameters`\<[`$AsyncApi`](index.types.default._AsyncApi.md)[`T`]\>[``0``] |

#### Returns

`Promise`\<`ReturnType`\<[`$MethodsDict`](../modules/index.types.default.md#$methodsdict)[`T`]\>\>

{Promise<ReturnType<$AsyncApi[T]>>}

**`Throws`**

- [TDError](index.TDError.md)

**`Memberof`**

Client

#### Defined in

dist/client.d.ts:78

___

### pause

▸ **pause**(): `this`

#### Returns

`this`

**`Memberof`**

Client

#### Defined in

dist/client.d.ts:137

___

### start

▸ **start**(): `this`

#### Returns

`this`

**`Memberof`**

Client

#### Defined in

dist/client.d.ts:130

___

### execute

▸ **execute**\<`T`\>(`executor`, `method`, `parameters`): `ReturnType`\<[`$SyncApi`](index.types.default._SyncApi.md)[`T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`$SyncApi`](index.types.default._SyncApi.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `executor` | [`Client`](index.Client.md) \| `TDLib` |
| `method` | `T` |
| `parameters` | `Parameters`\<[`$SyncApi`](index.types.default._SyncApi.md)[`T`]\>[``0``] |

#### Returns

`ReturnType`\<[`$SyncApi`](index.types.default._SyncApi.md)[`T`]\>

{Promise<ReturnType<$SyncMethodsDict[T]>>}

**`Throws`**

- [TDError](index.TDError.md)

**`Memberof`**

Client

#### Defined in

dist/client.d.ts:90
