[TDLib](../README.md) / [Modules](../modules.md) / [index](index.md) / <internal\>

# Module: <internal\>

## Table of contents

### Interfaces

- [Observable](../interfaces/index._internal_.Observable.md)
- [Subscriber](../interfaces/index._internal_.Subscriber.md)
- [TDLib](../interfaces/index._internal_.TDLib.md)

### Type Aliases

- [OmitType](index._internal_.md#omittype)
- [Subscription](index._internal_.md#subscription)
- [Unsubscribe](index._internal_.md#unsubscribe)

### Variables

- [TDLibClient](index._internal_.md#tdlibclient)

## Type Aliases

### OmitType

Ƭ **OmitType**<`T`\>: `Omit`<`T`, ``"_"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Defined in

dist/client.d.ts:4

___

### Subscription

Ƭ **Subscription**<`T`\>: (`value`: `T`) => `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

##### Returns

`void`

#### Defined in

dist/event-bus.d.ts:1

___

### Unsubscribe

Ƭ **Unsubscribe**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

dist/event-bus.d.ts:2

## Variables

### TDLibClient

• `Const` **TDLibClient**: unique `symbol`

#### Defined in

dist/shared/client.d.ts:1

dist/shared/client.d.ts:2
