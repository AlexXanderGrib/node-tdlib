[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateHavePendingNotifications

# Type Alias: updateHavePendingNotifications

> **updateHavePendingNotifications**: `object`

Describes whether there are some pending notification updates. Can be used to prevent application from killing, while there are some pending notifications

## Type declaration

### \_

> **\_**: `"updateHavePendingNotifications"`

### have\_delayed\_notifications

> **have\_delayed\_notifications**: [`Bool`](Bool.md)

True, if there are some delayed notification updates, which will be sent soon

### have\_unreceived\_notifications

> **have\_unreceived\_notifications**: [`Bool`](Bool.md)

True, if there can be some yet unreceived notifications, which are being fetched from the server

## Defined in

dist/generated/types.d.ts:56459
