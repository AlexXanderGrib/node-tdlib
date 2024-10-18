[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / businessRecipients

# Type Alias: businessRecipients

> **businessRecipients**: `object`

Describes private chats chosen for automatic interaction with a business

## Type declaration

### \_

> **\_**: `"businessRecipients"`

### chat\_ids

> **chat\_ids**: [`vector`](vector.md)\<[`int53`](int53.md)\>

Identifiers of selected private chats

### exclude\_selected

> **exclude\_selected**: [`Bool`](Bool.md)

If true, then all private chats except the selected are chosen. Otherwise, only the selected chats are chosen

### excluded\_chat\_ids

> **excluded\_chat\_ids**: [`vector`](vector.md)\<[`int53`](int53.md)\>

Identifiers of private chats that are always excluded; for businessConnectedBot only

### select\_contacts

> **select\_contacts**: [`Bool`](Bool.md)

True, if all private chats with contacts are selected

### select\_existing\_chats

> **select\_existing\_chats**: [`Bool`](Bool.md)

True, if all existing private chats are selected

### select\_new\_chats

> **select\_new\_chats**: [`Bool`](Bool.md)

True, if all new private chats are selected

### select\_non\_contacts

> **select\_non\_contacts**: [`Bool`](Bool.md)

True, if all private chats with non-contacts are selected

## Defined in

dist/generated/types.d.ts:6665
