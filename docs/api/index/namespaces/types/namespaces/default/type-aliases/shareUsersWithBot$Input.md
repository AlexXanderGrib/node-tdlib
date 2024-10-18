[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / shareUsersWithBot$Input

# Type Alias: shareUsersWithBot$Input

> **shareUsersWithBot$Input**: `object`

Shares users after pressing a keyboardButtonTypeRequestUsers button with the bot

## Type declaration

### \_

> `readonly` **\_**: `"shareUsersWithBot"`

### button\_id?

> `readonly` `optional` **button\_id**: [`int32`](int32.md)

Identifier of the button

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat with the bot

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Identifier of the message with the button

### only\_check?

> `readonly` `optional` **only\_check**: [`Bool$Input`](Bool$Input.md)

Pass true to check that the users can be shared by the button instead of actually sharing them

### shared\_user\_ids?

> `readonly` `optional` **shared\_user\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53.md)\>

Identifiers of the shared users

## Defined in

dist/generated/types.d.ts:84598
