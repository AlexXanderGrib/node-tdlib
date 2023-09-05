[TDLib](../README.md) / [Modules](../modules.md) / [index](index.md) / <internal\>

# Module: <internal\>

## Table of contents

### Classes

- [InlineKeyboardBuilder](../classes/index._internal_.InlineKeyboardBuilder.md)
- [KeyboardBuilder](../classes/index._internal_.KeyboardBuilder.md)

### Interfaces

- [Observable](../interfaces/index._internal_.Observable.md)
- [Subscriber](../interfaces/index._internal_.Subscriber.md)
- [TDLib](../interfaces/index._internal_.TDLib.md)

### Type Aliases

- [KeyboardOptions](index._internal_.md#keyboardoptions)
- [OmitType](index._internal_.md#omittype)
- [Subscription](index._internal_.md#subscription)
- [TDLibClient](index._internal_.md#tdlibclient)
- [Unsubscribe](index._internal_.md#unsubscribe)

## Type Aliases

### KeyboardOptions

Ƭ **KeyboardOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `oneTime` | `boolean` |
| `persistent` | `boolean` |
| `personal` | `boolean` |
| `placeholder` | `string` |
| `resize` | `boolean` |

#### Defined in

dist/markup.d.ts:25

___

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

### TDLibClient

Ƭ **TDLibClient**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__type` | ``"TDLibClient"`` |

#### Defined in

dist/shared/client.d.ts:1

___

### Unsubscribe

Ƭ **Unsubscribe**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

dist/event-bus.d.ts:2
