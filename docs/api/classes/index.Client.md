[TDLib](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Client

# Class: Client

[index](../modules/index.md).Client

**`Export`**

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

• **new Client**(`adapter`)

Creates an instance of Client.

**`Memberof`**

Client

#### Parameters

| Name | Type |
| :------ | :------ |
| `adapter` | [`TDLib`](../interfaces/index._internal_.TDLib.md) |

#### Defined in

dist/client.d.ts:64

## Properties

### \_adapter

• `Private` `Readonly` **\_adapter**: `any`

#### Defined in

dist/client.d.ts:57

___

### \_client

• `Private` `Readonly` **\_client**: `any`

#### Defined in

dist/client.d.ts:54

___

### \_requests

• `Private` `Readonly` **\_requests**: `any`

#### Defined in

dist/client.d.ts:55

___

### \_state

• `Private` **\_state**: `any`

#### Defined in

dist/client.d.ts:58

___

### \_thread

• `Private` **\_thread**: `any`

**`Memberof`**

Client

#### Defined in

dist/client.d.ts:107

___

### \_updates

• `Private` `Readonly` **\_updates**: `any`

#### Defined in

dist/client.d.ts:56

___

### api

• `Readonly` **api**: [`$AsyncApi`](index.types.default._AsyncApi.md)

#### Defined in

dist/client.d.ts:65

___

### syncApi

• `Readonly` **syncApi**: [`$SyncApi`](index.types.default._SyncApi.md)

#### Defined in

dist/client.d.ts:66

## Accessors

### updates

• `get` **updates**(): [`Observable`](../interfaces/index._internal_.Observable.md)<[`Update`](../modules/index.types.default.md#update)\>

**`Memberof`**

Client

#### Returns

[`Observable`](../interfaces/index._internal_.Observable.md)<[`Update`](../modules/index.types.default.md#update)\>

#### Defined in

dist/client.d.ts:115

## Methods

### destroy

▸ **destroy**(): `void`

**`Memberof`**

Client

#### Returns

`void`

#### Defined in

dist/client.d.ts:136

___

### execute

▸ **execute**<`T`\>(`method`, `parameters`): `ReturnType`<[`$SyncApi`](index.types.default._SyncApi.md)[`T`]\>

**`Throws`**

- [TDError](index.TDError.md)

**`Memberof`**

Client

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`$SyncApi`](index.types.default._SyncApi.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `T` |
| `parameters` | [`OmitType`](../modules/index._internal_.md#omittype)<`Parameters`<[`$MethodsDict`](../modules/index.types.default.md#$methodsdict)[`T`]\>[``0``]\> |

#### Returns

`ReturnType`<[`$SyncApi`](index.types.default._SyncApi.md)[`T`]\>

{Promise<ReturnType<$SyncApi[T]>>}

#### Defined in

dist/client.d.ts:100

___

### invoke

▸ **invoke**<`T`\>(`method`, `parameters`): `Promise`<`ReturnType`<[`$MethodsDict`](../modules/index.types.default.md#$methodsdict)[`T`]\>\>

**`Throws`**

- [TDError](index.TDError.md)

**`Memberof`**

Client

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`$AsyncApi`](index.types.default._AsyncApi.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `T` |
| `parameters` | `Parameters`<[`$AsyncApi`](index.types.default._AsyncApi.md)[`T`]\>[``0``] |

#### Returns

`Promise`<`ReturnType`<[`$MethodsDict`](../modules/index.types.default.md#$methodsdict)[`T`]\>\>

{Promise<ReturnType<$AsyncApi[T]>>}

#### Defined in

dist/client.d.ts:77

___

### pause

▸ **pause**(): [`Client`](index.Client.md)

**`Memberof`**

Client

#### Returns

[`Client`](index.Client.md)

#### Defined in

dist/client.d.ts:129

___

### start

▸ **start**(): [`Client`](index.Client.md)

**`Memberof`**

Client

#### Returns

[`Client`](index.Client.md)

#### Defined in

dist/client.d.ts:122

___

### execute

▸ `Static` **execute**<`T`\>(`executor`, `method`, `parameters`): `ReturnType`<[`$SyncApi`](index.types.default._SyncApi.md)[`T`]\>

**`Throws`**

- [TDError](index.TDError.md)

**`Memberof`**

Client

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`$SyncApi`](index.types.default._SyncApi.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `executor` | [`Client`](index.Client.md) \| [`TDLib`](../interfaces/index._internal_.TDLib.md) |
| `method` | `T` |
| `parameters` | `Parameters`<[`$SyncApi`](index.types.default._SyncApi.md)[`T`]\>[``0``] |

#### Returns

`ReturnType`<[`$SyncApi`](index.types.default._SyncApi.md)[`T`]\>

{Promise<ReturnType<$SyncMethodsDict[T]>>}

#### Defined in

dist/client.d.ts:89
