[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / passportSuitableElement$Input

# Type Alias: passportSuitableElement$Input

> **passportSuitableElement$Input**: `object`

Version of [passportSuitableElement](passportSuitableElement.md) for method parameters.

Contains information about a Telegram Passport element that was requested by a service

## Type declaration

### \_

> `readonly` **\_**: `"passportSuitableElement"`

### is\_native\_name\_required?

> `readonly` `optional` **is\_native\_name\_required**: [`Bool$Input`](Bool$Input.md)

True, if personal details must include the user's name in the language of their country of residence

### is\_selfie\_required?

> `readonly` `optional` **is\_selfie\_required**: [`Bool$Input`](Bool$Input.md)

True, if a selfie is required with the identity document

### is\_translation\_required?

> `readonly` `optional` **is\_translation\_required**: [`Bool$Input`](Bool$Input.md)

True, if a certified English translation is required with the document

### type?

> `readonly` `optional` **type**: [`PassportElementType$Input`](PassportElementType$Input.md)

Type of the element

## Defined in

dist/generated/types.d.ts:25977
