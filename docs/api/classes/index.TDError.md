[TDLib](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / TDError

# Class: TDError

[index](../modules/index.md).TDError

**`Export`**

**`Implements`**

## Hierarchy

- `Error`

  ↳ **`TDError`**

## Implements

- [`error`](../modules/types.md#error-1)

## Table of contents

### Constructors

- [constructor](index.TDError.md#constructor)

### Properties

- [\_](index.TDError.md#_)
- [code](index.TDError.md#code)
- [method](index.TDError.md#method)
- [parameters](index.TDError.md#parameters)

## Constructors

### constructor

• **new TDError**(`message`, `options?`)

Creates an instance of TDError.

**`Memberof`**

TDError

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `options?` | `Object` |
| `options.code?` | `number` |
| `options.method?` | `string` |
| `options.parameters?` | `unknown` |

#### Overrides

Error.constructor

#### Defined in

dist/cjs/client.d.ts:26

## Properties

### \_

• `Readonly` **\_**: ``"error"``

#### Implementation of

error.\_

#### Defined in

dist/cjs/client.d.ts:16

___

### code

• `Readonly` **code**: `number`

#### Implementation of

error.code

#### Defined in

dist/cjs/client.d.ts:17

___

### method

• `Readonly` **method**: `string`

#### Defined in

dist/cjs/client.d.ts:18

___

### parameters

• `Readonly` **parameters**: `unknown`

#### Defined in

dist/cjs/client.d.ts:19
