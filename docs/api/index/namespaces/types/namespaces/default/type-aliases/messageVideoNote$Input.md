[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageVideoNote$Input

# Type Alias: messageVideoNote$Input

> **messageVideoNote$Input**: `object`

Version of [messageVideoNote](messageVideoNote.md) for method parameters.

A video note message

## Type declaration

### \_

> `readonly` **\_**: `"messageVideoNote"`

### is\_secret?

> `readonly` `optional` **is\_secret**: [`Bool$Input`](Bool$Input.md)

True, if the video note thumbnail must be blurred and the video note must be shown only while tapped

### is\_viewed?

> `readonly` `optional` **is\_viewed**: [`Bool$Input`](Bool$Input.md)

True, if at least one of the recipients has viewed the video note

### video\_note?

> `readonly` `optional` **video\_note**: [`videoNote$Input`](videoNote$Input.md)

The video note description

## Defined in

dist/generated/types.d.ts:26938
