[TDLib](../README.md) / [Modules](../modules.md) / markup

# Module: markup

## Table of contents

### Functions

- [forceReply](markup.md#forcereply)
- [inlineKeyboard](markup.md#inlinekeyboard)
- [keyboard](markup.md#keyboard)
- [removeKeyboard](markup.md#removekeyboard)

## Functions

### forceReply

▸ **forceReply**(`«destructured»?`): [`replyMarkupForceReply`](index.types.default.md#replymarkupforcereply)

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `personal?` | `boolean` |
| › `placeholder?` | `string` |

#### Returns

[`replyMarkupForceReply`](index.types.default.md#replymarkupforcereply)

{replyMarkupForceReply}

#### Defined in

dist/markup.d.ts:11

___

### inlineKeyboard

▸ **inlineKeyboard**(): [`InlineKeyboardBuilder`](../classes/index._internal_.InlineKeyboardBuilder.md)

**`Export`**

#### Returns

[`InlineKeyboardBuilder`](../classes/index._internal_.InlineKeyboardBuilder.md)

InlineKeyboardBuilder

#### Defined in

dist/markup.d.ts:213

___

### keyboard

▸ **keyboard**(`options?`): [`KeyboardBuilder`](../classes/index._internal_.KeyboardBuilder.md)

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`KeyboardOptions`](index._internal_.md#keyboardoptions)\> |

#### Returns

[`KeyboardBuilder`](../classes/index._internal_.KeyboardBuilder.md)

KeyboardBuilder

#### Defined in

dist/markup.d.ts:141

___

### removeKeyboard

▸ **removeKeyboard**(`«destructured»?`): [`replyMarkupRemoveKeyboard`](index.types.default.md#replymarkupremovekeyboard)

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `personal?` | `boolean` |

#### Returns

[`replyMarkupRemoveKeyboard`](index.types.default.md#replymarkupremovekeyboard)

{replyMarkupRemoveKeyboard}

#### Defined in

dist/markup.d.ts:22
