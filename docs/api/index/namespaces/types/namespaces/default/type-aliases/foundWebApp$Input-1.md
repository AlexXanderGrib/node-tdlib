[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / foundWebApp$Input

# Type Alias: foundWebApp$Input

> **foundWebApp$Input**: `object`

Version of [foundWebApp](foundWebApp-1.md) for method parameters.

Contains information about a Web App found by its short name

## Type declaration

### \_

> `readonly` **\_**: `"foundWebApp"`

### request\_write\_access?

> `readonly` `optional` **request\_write\_access**: [`Bool$Input`](Bool$Input.md)

True, if the user must be asked for the permission to the bot to send them messages

### skip\_confirmation?

> `readonly` `optional` **skip\_confirmation**: [`Bool$Input`](Bool$Input.md)

True, if there is no need to show an ordinary open URL confirmation before opening the Web App. The field must be ignored and confirmation must be shown anyway if the Web App link was hidden

### web\_app?

> `readonly` `optional` **web\_app**: [`webApp$Input`](webApp$Input-1.md)

The Web App

## Defined in

dist/generated/types.d.ts:18014
