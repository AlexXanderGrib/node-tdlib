[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / paidReactor$Input

# Type Alias: paidReactor$Input

> **paidReactor$Input**: `object`

Version of [paidReactor](paidReactor.md) for method parameters.

Contains information about a user that added paid reactions

## Type declaration

### \_

> `readonly` **\_**: `"paidReactor"`

### is\_anonymous?

> `readonly` `optional` **is\_anonymous**: [`Bool$Input`](Bool$Input.md)

True, if the reactor is anonymous

### is\_me?

> `readonly` `optional` **is\_me**: [`Bool$Input`](Bool$Input.md)

True, if the paid reaction was added by the current user

### is\_top?

> `readonly` `optional` **is\_top**: [`Bool$Input`](Bool$Input.md)

True, if the reactor is one of the most active reactors; can be false if the reactor is the current user

### sender\_id?

> `readonly` `optional` **sender\_id**: [`MessageSender$Input`](MessageSender$Input.md) \| `null`

Identifier of the user or chat that added the reactions; may be null for anonymous reactors that aren't the current user

### star\_count?

> `readonly` `optional` **star\_count**: [`int32`](int32.md)

Number of Telegram Stars added

## Defined in

dist/generated/types.d.ts:13140
