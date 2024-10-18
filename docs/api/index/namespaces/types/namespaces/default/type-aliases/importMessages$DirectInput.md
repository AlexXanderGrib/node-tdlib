[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / importMessages$DirectInput

# Type Alias: importMessages$DirectInput

> **importMessages$DirectInput**: `object`

Imports messages exported from another app

## Type declaration

### attached\_files?

> `readonly` `optional` **attached\_files**: [`vector$Input`](vector$Input.md)\<[`InputFile$Input`](InputFile$Input.md)\>

Files used in the imported messages. Only inputFileLocal and inputFileGenerated are supported. The files must not be previously uploaded

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of a chat to which the messages will be imported. It must be an identifier of a private chat with a mutual contact or an identifier of a supergroup chat with can_change_info member right

### message\_file?

> `readonly` `optional` **message\_file**: [`InputFile$Input`](InputFile$Input.md)

File with messages to import. Only inputFileLocal and inputFileGenerated are supported. The file must not be previously uploaded

## Defined in

dist/generated/types.d.ts:92015
