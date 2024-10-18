[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / changeImportedContacts

# Type Alias: changeImportedContacts()

> **changeImportedContacts**: (`parameters`) => [`ImportedContacts`](ImportedContacts-1.md)

Changes imported contacts using the list of contacts saved on the device. Imports newly added contacts and, if at least the file database is enabled, deletes recently deleted contacts.

- Query result depends on the result of the previous query, so only one query is possible at the same time

## Parameters

• **parameters**: [`changeImportedContacts$Input`](changeImportedContacts$Input.md)

[changeImportedContacts$Input](changeImportedContacts$Input.md)

## Returns

[`ImportedContacts`](ImportedContacts-1.md)

[ImportedContacts](ImportedContacts-1.md)

## Defined in

dist/generated/types.d.ts:94750
