[TDLib](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / Subscriber

# Interface: Subscriber<T\>

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).Subscriber

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [complete](index._internal_.Subscriber.md#complete)
- [error](index._internal_.Subscriber.md#error)
- [next](index._internal_.Subscriber.md#next)

## Methods

### complete

▸ `Optional` **complete**(): `void`

#### Returns

`void`

#### Defined in

dist/event-bus.d.ts:10

___

### error

▸ `Optional` **error**(`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

#### Returns

`void`

#### Defined in

dist/event-bus.d.ts:9

___

### next

▸ **next**(`value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `T` |

#### Returns

`void`

#### Defined in

dist/event-bus.d.ts:8
