[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateHavePendingNotifications$Input

# Type Alias: updateHavePendingNotifications$Input

> **updateHavePendingNotifications$Input**: `object`

Version of [updateHavePendingNotifications](updateHavePendingNotifications.md) for method parameters.

Describes whether there are some pending notification updates. Can be used to prevent application from killing, while there are some pending notifications

## Type declaration

### \_

> `readonly` **\_**: `"updateHavePendingNotifications"`

### have\_delayed\_notifications?

> `readonly` `optional` **have\_delayed\_notifications**: [`Bool$Input`](Bool$Input.md)

True, if there are some delayed notification updates, which will be sent soon

### have\_unreceived\_notifications?

> `readonly` `optional` **have\_unreceived\_notifications**: [`Bool$Input`](Bool$Input.md)

True, if there can be some yet unreceived notifications, which are being fetched from the server

## Defined in

dist/generated/types.d.ts:54861
