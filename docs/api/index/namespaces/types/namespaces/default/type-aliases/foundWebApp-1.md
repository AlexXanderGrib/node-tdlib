[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / foundWebApp

# Type Alias: foundWebApp

> **foundWebApp**: `object`

Contains information about a Web App found by its short name

## Type declaration

### \_

> **\_**: `"foundWebApp"`

### request\_write\_access

> **request\_write\_access**: [`Bool`](Bool.md)

True, if the user must be asked for the permission to the bot to send them messages

### skip\_confirmation

> **skip\_confirmation**: [`Bool`](Bool.md)

True, if there is no need to show an ordinary open URL confirmation before opening the Web App. The field must be ignored and confirmation must be shown anyway if the Web App link was hidden

### web\_app

> **web\_app**: [`webApp`](webApp-1.md)

The Web App

## Defined in

dist/generated/types.d.ts:17991
