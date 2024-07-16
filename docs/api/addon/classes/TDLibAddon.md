[**TDLib**](../../README.md) • **Docs**

***

[TDLib](../../modules.md) / [addon](../README.md) / TDLibAddon

# Class: TDLibAddon

## Export

TDLibAddon

## Implements

## Implements

- `TDLib`

## Constructors

### new TDLibAddon()

> `private` **new TDLibAddon**(): [`TDLibAddon`](TDLibAddon.md)

Creates an instance of TDLibAddon.

#### Returns

[`TDLibAddon`](TDLibAddon.md)

#### Memberof

TDLibAddon

#### Defined in

dist/addon/addon.d.ts:35

## Properties

### \_addon

> `private` `readonly` **\_addon**: `any`

#### Defined in

dist/addon/addon.d.ts:19

***

### \_isTDLib

> `readonly` **\_isTDLib**: `true` = `true`

#### Implementation of

`TDLib._isTDLib`

#### Defined in

dist/addon/addon.d.ts:36

## Accessors

### name

> `get` **name**(): `string`

#### Memberof

TDLibAddon

#### Returns

`string`

#### Implementation of

`TDLib.name`

#### Defined in

dist/addon/addon.d.ts:43

## Methods

### create()

> **create**(): `TDLibClient`

#### Returns

`TDLibClient`

{TDLibClient}

#### Memberof

TDLibAddon

#### Implementation of

`TDLib.create`

#### Defined in

dist/addon/addon.d.ts:50

***

### destroy()

> **destroy**(`client`): `void`

#### Parameters

• **client**: `TDLibClient`

#### Returns

`void`

#### Memberof

TDLibAddon

#### Implementation of

`TDLib.destroy`

#### Defined in

dist/addon/addon.d.ts:58

***

### execute()

> **execute**(`client`, `json`): `null` \| `string`

#### Parameters

• **client**: `null` \| `TDLibClient`

• **json**: `string`

#### Returns

`null` \| `string`

{(string | null)}

#### Memberof

TDLibAddon

#### Implementation of

`TDLib.execute`

#### Defined in

dist/addon/addon.d.ts:67

***

### receive()

> **receive**(`client`, `timeout`): `Promise`\<`null` \| `string`\>

#### Parameters

• **client**: `TDLibClient`

• **timeout**: `number`

#### Returns

`Promise`\<`null` \| `string`\>

{(Promise<string | null>)}

#### Memberof

TDLibAddon

#### Implementation of

`TDLib.receive`

#### Defined in

dist/addon/addon.d.ts:76

***

### send()

> **send**(`client`, `json`): `void`

#### Parameters

• **client**: `TDLibClient`

• **json**: `string`

#### Returns

`void`

#### Memberof

TDLibAddon

#### Implementation of

`TDLib.send`

#### Defined in

dist/addon/addon.d.ts:85

***

### setLogFatalErrorCallback()

> **setLogFatalErrorCallback**(`callback`): `void`

#### Parameters

• **callback**: `null` \| (`errorMessage`) => `void`

#### Returns

`void`

#### Memberof

TDLibAddon

#### Implementation of

`TDLib.setLogFatalErrorCallback`

#### Defined in

dist/addon/addon.d.ts:93

***

### create()

> `static` **create**(`tdlibPath`?, `addonPath`?): `Promise`\<[`TDLibAddon`](TDLibAddon.md)\>

#### Parameters

• **tdlibPath?**: `string`

Resolves to prebuild TDLib for your platform

• **addonPath?**: `string`

#### Returns

`Promise`\<[`TDLibAddon`](TDLibAddon.md)\>

#### Static

#### Memberof

TDLibAddon

#### Defined in

dist/addon/addon.d.ts:29
