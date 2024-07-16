[**TDLib**](../../README.md) • **Docs**

***

[TDLib](../../modules.md) / [index](../README.md) / TDError

# Class: TDError

## Export

TDError

## Implements

## Extends

- `Error`

## Implements

- [`error`](../namespaces/types/namespaces/default/type-aliases/error-1.md)

## Constructors

### new TDError()

> **new TDError**(`message`, `options`?): [`TDError`](TDError.md)

Creates an instance of TDError.

#### Parameters

• **message**: `string`

• **options?**

• **options.code?**: `number`

• **options.method?**: `string`

• **options.parameters?**: `unknown`

#### Returns

[`TDError`](TDError.md)

#### Memberof

TDError

#### Overrides

`Error.constructor`

#### Defined in

dist/client.d.ts:28

## Properties

### \_

> `readonly` **\_**: `"error"` = `"error"`

#### Implementation of

`error._`

#### Defined in

dist/client.d.ts:17

***

### code

> `readonly` **code**: `number`

Error code; subject to future changes. If the error code is 406, the error message must not be processed in any way and must not be displayed to the user

#### Implementation of

`error.code`

#### Defined in

dist/client.d.ts:18

***

### method

> `readonly` **method**: `string`

#### Defined in

dist/client.d.ts:19

***

### name

> **name**: `string`

#### Overrides

`Error.name`

#### Defined in

dist/client.d.ts:21

***

### parameters

> `readonly` **parameters**: `unknown`

#### Defined in

dist/client.d.ts:20

## Methods

### toJSON()

> **toJSON**(): `object`

#### Returns

`object`

##### \_

> **\_**: `string`

##### code

> **code**: `number`

##### message

> **message**: `string`

##### method

> **method**: `string`

##### name

> **name**: `string`

##### parameters

> **parameters**: `unknown`

#### Memberof

TDError

#### Defined in

dist/client.d.ts:39
