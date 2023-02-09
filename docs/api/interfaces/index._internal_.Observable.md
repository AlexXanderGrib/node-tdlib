[TDLib](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / Observable

# Interface: Observable<T\>

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).Observable

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [subscribe](index._internal_.Observable.md#subscribe)
- [toRxObserver](index._internal_.Observable.md#torxobserver)

## Methods

### subscribe

▸ **subscribe**(`handler`): [`Unsubscribe`](../modules/index._internal_.md#unsubscribe)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`Subscription`](../modules/index._internal_.md#subscription)<`T`\> |

#### Returns

[`Unsubscribe`](../modules/index._internal_.md#unsubscribe)

#### Defined in

dist/event-bus.d.ts:4

___

### toRxObserver

▸ **toRxObserver**(): (`subscriber`: [`Subscriber`](index._internal_.Subscriber.md)<`T`\>) => [`Unsubscribe`](../modules/index._internal_.md#unsubscribe)

#### Returns

`fn`

▸ (`subscriber`): [`Unsubscribe`](../modules/index._internal_.md#unsubscribe)

##### Parameters

| Name | Type |
| :------ | :------ |
| `subscriber` | [`Subscriber`](index._internal_.Subscriber.md)<`T`\> |

##### Returns

[`Unsubscribe`](../modules/index._internal_.md#unsubscribe)

#### Defined in

dist/event-bus.d.ts:5
