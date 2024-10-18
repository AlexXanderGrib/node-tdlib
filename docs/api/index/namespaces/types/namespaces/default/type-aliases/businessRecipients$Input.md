[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / businessRecipients$Input

# Type Alias: businessRecipients$Input

> **businessRecipients$Input**: `object`

Version of [businessRecipients](businessRecipients.md) for method parameters.

Describes private chats chosen for automatic interaction with a business

## Type declaration

### \_

> `readonly` **\_**: `"businessRecipients"`

### chat\_ids?

> `readonly` `optional` **chat\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53.md)\>

Identifiers of selected private chats

### exclude\_selected?

> `readonly` `optional` **exclude\_selected**: [`Bool$Input`](Bool$Input.md)

If true, then all private chats except the selected are chosen. Otherwise, only the selected chats are chosen

### excluded\_chat\_ids?

> `readonly` `optional` **excluded\_chat\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53.md)\>

Identifiers of private chats that are always excluded; for businessConnectedBot only

### select\_contacts?

> `readonly` `optional` **select\_contacts**: [`Bool$Input`](Bool$Input.md)

True, if all private chats with contacts are selected

### select\_existing\_chats?

> `readonly` `optional` **select\_existing\_chats**: [`Bool$Input`](Bool$Input.md)

True, if all existing private chats are selected

### select\_new\_chats?

> `readonly` `optional` **select\_new\_chats**: [`Bool$Input`](Bool$Input.md)

True, if all new private chats are selected

### select\_non\_contacts?

> `readonly` `optional` **select\_non\_contacts**: [`Bool$Input`](Bool$Input.md)

True, if all private chats with non-contacts are selected

## Defined in

dist/generated/types.d.ts:6708
