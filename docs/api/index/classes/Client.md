[**TDLib**](../../README.md) • **Docs**

***

[TDLib](../../modules.md) / [index](../README.md) / Client

# Class: Client

## Export

Client

## Constructors

### new Client()

> **new Client**(`adapter`): [`Client`](Client.md)

Creates an instance of Client.

#### Parameters

• **adapter**: `TDLib`

#### Returns

[`Client`](Client.md)

#### Memberof

Client

#### Defined in

dist/client.d.ts:65

## Properties

### \_adapter

> `private` `readonly` **\_adapter**: `any`

#### Defined in

dist/client.d.ts:58

***

### \_client

> `private` `readonly` **\_client**: `any`

#### Defined in

dist/client.d.ts:55

***

### \_requests

> `private` `readonly` **\_requests**: `any`

#### Defined in

dist/client.d.ts:56

***

### \_state

> `private` **\_state**: `any`

#### Defined in

dist/client.d.ts:59

***

### \_tdlibOptions

> `readonly` **\_tdlibOptions**: [`TDLibOptions`](TDLibOptions.md)

#### Defined in

dist/client.d.ts:68

***

### \_thread

> `private` **\_thread**: `any`

#### Memberof

Client

#### Defined in

dist/client.d.ts:119

***

### \_updates

> `private` `readonly` **\_updates**: `any`

#### Defined in

dist/client.d.ts:57

***

### api

> `readonly` **api**: [`$AsyncApi`](../namespaces/types/namespaces/default/classes/$AsyncApi.md)

#### Defined in

dist/client.d.ts:66

***

### syncApi

> `readonly` **syncApi**: [`$SyncApi`](../namespaces/types/namespaces/default/classes/$SyncApi.md)

#### Defined in

dist/client.d.ts:67

## Accessors

### tdlibOptions

> `get` **tdlibOptions**(): [`TDLibOptions`](TDLibOptions.md)

#### See

https://core.telegram.org/tdlib/options

#### Memberof

Client

#### Returns

[`TDLibOptions`](TDLibOptions.md)

#### Defined in

dist/client.d.ts:126

***

### updates

> `get` **updates**(): `Observable`\<[`Update`](../namespaces/types/namespaces/default/type-aliases/Update.md)\>

#### Memberof

Client

#### Returns

`Observable`\<[`Update`](../namespaces/types/namespaces/default/type-aliases/Update.md)\>

#### Defined in

dist/client.d.ts:134

## Methods

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Memberof

Client

#### Defined in

dist/client.d.ts:155

***

### execute()

> **execute**\<`T`\>(`method`, `parameters`): `ReturnType`\<[`$SyncApi`](../namespaces/types/namespaces/default/classes/$SyncApi.md)\[`T`\]\>

#### Type Parameters

• **T** *extends* keyof [`$SyncApi`](../namespaces/types/namespaces/default/classes/$SyncApi.md)

#### Parameters

• **method**: `T`

• **parameters**: `OmitType`\<`Parameters`\<[`$MethodsDict`](../namespaces/types/namespaces/default/type-aliases/$MethodsDict.md)\[`T`\]\>\[`0`\]\>

#### Returns

`ReturnType`\<[`$SyncApi`](../namespaces/types/namespaces/default/classes/$SyncApi.md)\[`T`\]\>

{Promise<ReturnType<$SyncApi[T]>>}

#### Throws

- [TDError](TDError.md)

#### Memberof

Client

#### Defined in

dist/client.d.ts:111

***

### invoke()

> **invoke**\<`T`\>(`method`, `parameters`): `Promise`\<`ReturnType`\<[`$MethodsDict`](../namespaces/types/namespaces/default/type-aliases/$MethodsDict.md)\[`T`\]\>\>

#### Type Parameters

• **T** *extends* keyof [`$AsyncApi`](../namespaces/types/namespaces/default/classes/$AsyncApi.md)

#### Parameters

• **method**: `T`

• **parameters**: `Parameters`\<[`$AsyncApi`](../namespaces/types/namespaces/default/classes/$AsyncApi.md)\[`T`\]\>\[`0`\]

#### Returns

`Promise`\<`ReturnType`\<[`$MethodsDict`](../namespaces/types/namespaces/default/type-aliases/$MethodsDict.md)\[`T`\]\>\>

{Promise<ReturnType<$AsyncApi[T]>>}

#### Throws

- [TDError](TDError.md)

#### Memberof

Client

#### Defined in

dist/client.d.ts:79

***

### pause()

> **pause**(): `this`

#### Returns

`this`

#### Memberof

Client

#### Defined in

dist/client.d.ts:148

***

### start()

> **start**(): `this`

#### Returns

`this`

#### Memberof

Client

#### Defined in

dist/client.d.ts:141

***

### disableLogs()

> `static` **disableLogs**(`lib`): `void`

Disables logging of TDLib instance

#### Parameters

• **lib**: `TDLib`

#### Returns

`void`

#### Static

#### Memberof

Client

#### Defined in

dist/client.d.ts:88

***

### execute()

> `static` **execute**\<`T`\>(`executor`, `method`, `parameters`): `ReturnType`\<[`$SyncApi`](../namespaces/types/namespaces/default/classes/$SyncApi.md)\[`T`\]\>

#### Type Parameters

• **T** *extends* keyof [`$SyncApi`](../namespaces/types/namespaces/default/classes/$SyncApi.md)

#### Parameters

• **executor**: [`Client`](Client.md) \| `TDLib`

• **method**: `T`

• **parameters**: `Parameters`\<[`$SyncApi`](../namespaces/types/namespaces/default/classes/$SyncApi.md)\[`T`\]\>\[`0`\]

#### Returns

`ReturnType`\<[`$SyncApi`](../namespaces/types/namespaces/default/classes/$SyncApi.md)\[`T`\]\>

{Promise<ReturnType<$SyncMethodsDict[T]>>}

#### Throws

- [TDError](TDError.md)

#### Memberof

Client

#### Defined in

dist/client.d.ts:100
