[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / diceStickersSlotMachine$Input

# Type Alias: diceStickersSlotMachine$Input

> **diceStickersSlotMachine$Input**: `object`

Version of [diceStickersSlotMachine](diceStickersSlotMachine.md) for method parameters.

Animated stickers to be combined into a slot machine

## Type declaration

### \_

> `readonly` **\_**: `"diceStickersSlotMachine"`

### background?

> `readonly` `optional` **background**: [`sticker$Input`](sticker$Input.md)

The animated sticker with the slot machine background. The background animation must start playing after all reel animations finish

### center\_reel?

> `readonly` `optional` **center\_reel**: [`sticker$Input`](sticker$Input.md)

The animated sticker with the center reel

### left\_reel?

> `readonly` `optional` **left\_reel**: [`sticker$Input`](sticker$Input.md)

The animated sticker with the left reel

### lever?

> `readonly` `optional` **lever**: [`sticker$Input`](sticker$Input.md)

The animated sticker with the lever animation. The lever animation must play once in the initial dice state

### right\_reel?

> `readonly` `optional` **right\_reel**: [`sticker$Input`](sticker$Input.md)

The animated sticker with the right reel

## Defined in

dist/generated/types.d.ts:37852
