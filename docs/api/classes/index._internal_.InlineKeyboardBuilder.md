[TDLib](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / InlineKeyboardBuilder

# Class: InlineKeyboardBuilder

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).InlineKeyboardBuilder

## Table of contents

### Constructors

- [constructor](index._internal_.InlineKeyboardBuilder.md#constructor)

### Properties

- [\_buttons](index._internal_.InlineKeyboardBuilder.md#_buttons)
- [\_row](index._internal_.InlineKeyboardBuilder.md#_row)

### Accessors

- [\_currentRow](index._internal_.InlineKeyboardBuilder.md#_currentrow)

### Methods

- [build](index._internal_.InlineKeyboardBuilder.md#build)
- [button](index._internal_.InlineKeyboardBuilder.md#button)
- [callbackButton](index._internal_.InlineKeyboardBuilder.md#callbackbutton)
- [row](index._internal_.InlineKeyboardBuilder.md#row)
- [toJSON](index._internal_.InlineKeyboardBuilder.md#tojson)
- [urlButton](index._internal_.InlineKeyboardBuilder.md#urlbutton)

## Constructors

### constructor

• **new InlineKeyboardBuilder**()

## Properties

### \_buttons

• `Private` **\_buttons**: `any`

#### Defined in

dist/markup.d.ts:147

___

### \_row

• `Private` **\_row**: `any`

#### Defined in

dist/markup.d.ts:148

## Accessors

### \_currentRow

• `Private` `get` **_currentRow**(): `any`

**`Memberof`**

InlineKeyboardBuilder

#### Returns

`any`

#### Defined in

dist/markup.d.ts:156

## Methods

### build

▸ **build**(): [`replyMarkupInlineKeyboard$Input`](../modules/index.types.default.md#replymarkupinlinekeyboard$input)

Generates keyboard

**`Memberof`**

InlineKeyboardBuilder

#### Returns

[`replyMarkupInlineKeyboard$Input`](../modules/index.types.default.md#replymarkupinlinekeyboard$input)

replyMarkupInlineKeyboard$Input

#### Defined in

dist/markup.d.ts:197

___

### button

▸ **button**(`text`, `type`): [`InlineKeyboardBuilder`](index._internal_.InlineKeyboardBuilder.md)

**`Memberof`**

InlineKeyboardBuilder

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `type` | [`InlineKeyboardButtonType$Input`](../modules/index.types.default.md#inlinekeyboardbuttontype$input) |

#### Returns

[`InlineKeyboardBuilder`](index._internal_.InlineKeyboardBuilder.md)

#### Defined in

dist/markup.d.ts:183

___

### callbackButton

▸ **callbackButton**(`text`, `data`): [`InlineKeyboardBuilder`](index._internal_.InlineKeyboardBuilder.md)

Adds callback button

**`Memberof`**

InlineKeyboardBuilder

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `data` | `string` \| `Uint8Array` |

#### Returns

[`InlineKeyboardBuilder`](index._internal_.InlineKeyboardBuilder.md)

#### Defined in

dist/markup.d.ts:165

___

### row

▸ **row**(): [`InlineKeyboardBuilder`](index._internal_.InlineKeyboardBuilder.md)

Creates new row

**`Memberof`**

KeyboardBuilder

#### Returns

[`InlineKeyboardBuilder`](index._internal_.InlineKeyboardBuilder.md)

#### Defined in

dist/markup.d.ts:190

___

### toJSON

▸ **toJSON**(): [`replyMarkupInlineKeyboard$Input`](../modules/index.types.default.md#replymarkupinlinekeyboard$input)

Generates keyboard

**`Memberof`**

InlineKeyboardBuilder

#### Returns

[`replyMarkupInlineKeyboard$Input`](../modules/index.types.default.md#replymarkupinlinekeyboard$input)

replyMarkupInlineKeyboard$Input

#### Defined in

dist/markup.d.ts:204

___

### urlButton

▸ **urlButton**(`text`, `url`): [`InlineKeyboardBuilder`](index._internal_.InlineKeyboardBuilder.md)

Adds url button

**`Memberof`**

InlineKeyboardBuilder

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `url` | `string` \| `URL` |

#### Returns

[`InlineKeyboardBuilder`](index._internal_.InlineKeyboardBuilder.md)

#### Defined in

dist/markup.d.ts:174
