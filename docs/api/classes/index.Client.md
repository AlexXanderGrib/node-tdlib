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
- [\_stopped](index.Client.md#_stopped)
- [\_thread](index.Client.md#_thread)
- [\_updates](index.Client.md#_updates)

### Accessors

- [updates](index.Client.md#updates)

### Methods

- [invoke](index.Client.md#invoke)
- [start](index.Client.md#start)
- [stop](index.Client.md#stop)

## Constructors

### constructor

• **new Client**(`_adapter`)

Creates an instance of Client.

**`Memberof`**

Client

#### Parameters

| Name | Type |
| :------ | :------ |
| `_adapter` | [`TDLib`](../interfaces/index._internal_.TDLib.md) |

#### Defined in

dist/cjs/client.d.ts:49

## Properties

### \_adapter

• `Private` `Readonly` **\_adapter**: `any`

#### Defined in

dist/cjs/client.d.ts:39

___

### \_client

• `Private` `Readonly` **\_client**: `any`

#### Defined in

dist/cjs/client.d.ts:40

___

### \_requests

• `Private` `Readonly` **\_requests**: `any`

#### Defined in

dist/cjs/client.d.ts:41

___

### \_stopped

• `Private` **\_stopped**: `any`

#### Defined in

dist/cjs/client.d.ts:43

___

### \_thread

• `Private` **\_thread**: `any`

**`Memberof`**

Client

#### Defined in

dist/cjs/client.d.ts:67

___

### \_updates

• `Private` `Readonly` **\_updates**: `any`

#### Defined in

dist/cjs/client.d.ts:42

## Accessors

### updates

• `get` **updates**(): [`Observable`](../interfaces/index._internal_.Observable.md)<[`Update`](../modules/types.md#update)\>

**`Memberof`**

Client

#### Returns

[`Observable`](../interfaces/index._internal_.Observable.md)<[`Update`](../modules/types.md#update)\>

#### Defined in

dist/cjs/client.d.ts:75

## Methods

### invoke

▸ **invoke**<`T`\>(`method`, `parameters`): `Promise`<`ReturnType`<[`__functions`](../modules/types.md#__functions)[`T`]\>\>

**`Throws`**

- [TDError](index.TDError.md)

**`Memberof`**

Client

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`__functions`](../modules/types.md#__functions) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `T` |
| `parameters` | [`OmitType`](../modules/index._internal_.md#omittype)<`Parameters`<[`__functions`](../modules/types.md#__functions)[`T`]\>[``0``]\> |

#### Returns

`Promise`<`ReturnType`<[`__functions`](../modules/types.md#__functions)[`T`]\>\>

{Promise<ReturnType<__functions[T]>>}

#### Defined in

dist/cjs/client.d.ts:60

___

### start

▸ **start**(): `void`

**`Memberof`**

Client

#### Returns

`void`

#### Defined in

dist/cjs/client.d.ts:81

___

### stop

▸ **stop**(): `void`

**`Memberof`**

Client

#### Returns

`void`

#### Defined in

dist/cjs/client.d.ts:88
