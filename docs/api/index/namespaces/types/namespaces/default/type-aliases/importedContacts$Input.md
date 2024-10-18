[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / importedContacts$Input

# Type Alias: importedContacts$Input

> **importedContacts$Input**: `object`

Version of [importedContacts](importedContacts.md) for method parameters.

Represents the result of an importContacts request

## Type declaration

### \_

> `readonly` **\_**: `"importedContacts"`

### importer\_count?

> `readonly` `optional` **importer\_count**: [`vector$Input`](vector$Input.md)\<[`int32`](int32.md)\>

The number of users that imported the corresponding contact; 0 for already registered users or if unavailable

### user\_ids?

> `readonly` `optional` **user\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53.md)\>

User identifiers of the imported contacts in the same order as they were specified in the request; 0 if the contact is not yet a registered user

## Defined in

dist/generated/types.d.ts:37901
