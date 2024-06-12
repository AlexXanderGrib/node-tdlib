[TDLib](../README.md) / [Modules](../modules.md) / [index](index.md) / markup

# Namespace: markup

[index](index.md).markup

## Table of contents

### Functions

- [forceReply](index.markup.md#forcereply)
- [inlineKeyboard](index.markup.md#inlinekeyboard)
- [keyboard](index.markup.md#keyboard)
- [removeKeyboard](index.markup.md#removekeyboard)

## Functions

### forceReply

▸ **forceReply**(`«destructured»?`): [`replyMarkupForceReply`](index.types.default.md#replymarkupforcereply)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `personal?` | `boolean` |
| › `placeholder?` | `string` |

#### Returns

[`replyMarkupForceReply`](index.types.default.md#replymarkupforcereply)

{replyMarkupForceReply}

**`Export`**

#### Defined in

dist/markup.d.ts:10

___

### inlineKeyboard

▸ **inlineKeyboard**(): `InlineKeyboardBuilder`

#### Returns

`InlineKeyboardBuilder`

InlineKeyboardBuilder

**`Export`**

#### Defined in

dist/markup.d.ts:212

___

### keyboard

▸ **keyboard**(`options?`): `KeyboardBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`KeyboardOptions`\> |

#### Returns

`KeyboardBuilder`

KeyboardBuilder

**`Export`**

#### Defined in

dist/markup.d.ts:140

___

### removeKeyboard

▸ **removeKeyboard**(`«destructured»?`): [`replyMarkupRemoveKeyboard`](index.types.default.md#replymarkupremovekeyboard)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `personal?` | `boolean` |

#### Returns

[`replyMarkupRemoveKeyboard`](index.types.default.md#replymarkupremovekeyboard)

{replyMarkupRemoveKeyboard}

**`Export`**

#### Defined in

dist/markup.d.ts:21
