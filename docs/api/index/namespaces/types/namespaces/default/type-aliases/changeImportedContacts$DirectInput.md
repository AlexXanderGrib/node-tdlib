[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / changeImportedContacts$DirectInput

# Type Alias: changeImportedContacts$DirectInput

> **changeImportedContacts$DirectInput**: `object`

Changes imported contacts using the list of contacts saved on the device. Imports newly added contacts and, if at least the file database is enabled, deletes recently deleted contacts.

- Query result depends on the result of the previous query, so only one query is possible at the same time

## Type declaration

### contacts?

> `readonly` `optional` **contacts**: [`vector$Input`](vector$Input.md)\<[`contact$Input`](contact$Input.md)\>

The new list of contacts, contact's vCard are ignored and are not imported

## Defined in

dist/generated/types.d.ts:94735
