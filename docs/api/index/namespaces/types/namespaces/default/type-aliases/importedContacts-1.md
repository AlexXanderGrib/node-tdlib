[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / importedContacts

# Type Alias: importedContacts

> **importedContacts**: `object`

Represents the result of an importContacts request

## Type declaration

### \_

> **\_**: `"importedContacts"`

### importer\_count

> **importer\_count**: [`vector`](vector.md)\<[`int32`](int32-1.md)\>

The number of users that imported the corresponding contact; 0 for already registered users or if unavailable

### user\_ids

> **user\_ids**: [`vector`](vector.md)\<[`int53`](int53-1.md)\>

User identifiers of the imported contacts in the same order as they were specified in the request; 0 if the contact is not yet a registered user

## Defined in

dist/generated/types.d.ts:36513
