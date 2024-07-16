[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / scopeAutosaveSettings$Input

# Type Alias: scopeAutosaveSettings$Input

> **scopeAutosaveSettings$Input**: `object`

Version of [scopeAutosaveSettings](scopeAutosaveSettings-1.md) for method parameters.

Contains autosave settings for an autosave settings scope

## Type declaration

### \_

> `readonly` **\_**: `"scopeAutosaveSettings"`

### autosave\_photos?

> `readonly` `optional` **autosave\_photos**: [`Bool$Input`](Bool$Input.md)

True, if photo autosave is enabled

### autosave\_videos?

> `readonly` `optional` **autosave\_videos**: [`Bool$Input`](Bool$Input.md)

True, if video autosave is enabled

### max\_video\_file\_size?

> `readonly` `optional` **max\_video\_file\_size**: [`int53`](int53-1.md)

The maximum size of a video file to be autosaved, in bytes; 512 KB - 4000 MB

## Defined in

dist/generated/types.d.ts:49878
