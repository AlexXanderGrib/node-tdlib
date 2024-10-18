[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / paidReactor

# Type Alias: paidReactor

> **paidReactor**: `object`

Contains information about a user that added paid reactions

## Type declaration

### \_

> **\_**: `"paidReactor"`

### is\_anonymous

> **is\_anonymous**: [`Bool`](Bool.md)

True, if the reactor is anonymous

### is\_me

> **is\_me**: [`Bool`](Bool.md)

True, if the paid reaction was added by the current user

### is\_top

> **is\_top**: [`Bool`](Bool.md)

True, if the reactor is one of the most active reactors; can be false if the reactor is the current user

### sender\_id

> **sender\_id**: [`MessageSender`](MessageSender.md) \| `null`

Identifier of the user or chat that added the reactions; may be null for anonymous reactors that aren't the current user

### star\_count

> **star\_count**: [`int32`](int32.md)

Number of Telegram Stars added

## Defined in

dist/generated/types.d.ts:13107
