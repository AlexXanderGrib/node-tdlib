[**TDLib**](../../../../README.md) • **Docs**

***

[TDLib](../../../../modules.md) / [index](../../../README.md) / [markup](../README.md) / InlineKeyboardBuilder

# Class: InlineKeyboardBuilder

InlineKeyboardBuilder

## Constructors

### new InlineKeyboardBuilder()

> **new InlineKeyboardBuilder**(): [`InlineKeyboardBuilder`](InlineKeyboardBuilder.md)

#### Returns

[`InlineKeyboardBuilder`](InlineKeyboardBuilder.md)

## Properties

### \_buttons

> `private` **\_buttons**: `any`

#### Defined in

dist/markup.d.ts:146

***

### \_row

> `private` **\_row**: `any`

#### Defined in

dist/markup.d.ts:147

## Accessors

### \_currentRow

> `get` `private` **\_currentRow**(): `any`

#### Memberof

InlineKeyboardBuilder

#### Returns

`any`

#### Defined in

dist/markup.d.ts:155

## Methods

### build()

> **build**(): [`replyMarkupInlineKeyboard$Input`](../../types/namespaces/default/type-aliases/replyMarkupInlineKeyboard$Input.md)

Generates keyboard

#### Returns

[`replyMarkupInlineKeyboard$Input`](../../types/namespaces/default/type-aliases/replyMarkupInlineKeyboard$Input.md)

[replyMarkupInlineKeyboard$Input](../../types/namespaces/default/type-aliases/replyMarkupInlineKeyboard$Input.md)

#### Memberof

InlineKeyboardBuilder

#### Defined in

dist/markup.d.ts:196

***

### button()

> **button**(`text`, `type`): `this`

#### Parameters

• **text**: `string`

• **type**: [`InlineKeyboardButtonType$Input`](../../types/namespaces/default/type-aliases/InlineKeyboardButtonType$Input.md)

#### Returns

`this`

#### Memberof

InlineKeyboardBuilder

#### Defined in

dist/markup.d.ts:182

***

### callbackButton()

> **callbackButton**(`text`, `data`): `this`

Adds callback button

#### Parameters

• **text**: `string`

• **data**: `string` \| `Uint8Array`

#### Returns

`this`

#### Memberof

InlineKeyboardBuilder

#### Defined in

dist/markup.d.ts:164

***

### row()

> **row**(): `this`

Creates new row

#### Returns

`this`

#### Memberof

KeyboardBuilder

#### Defined in

dist/markup.d.ts:189

***

### toJSON()

> **toJSON**(): [`replyMarkupInlineKeyboard$Input`](../../types/namespaces/default/type-aliases/replyMarkupInlineKeyboard$Input.md)

Generates keyboard

#### Returns

[`replyMarkupInlineKeyboard$Input`](../../types/namespaces/default/type-aliases/replyMarkupInlineKeyboard$Input.md)

[replyMarkupInlineKeyboard$Input](../../types/namespaces/default/type-aliases/replyMarkupInlineKeyboard$Input.md)

#### Memberof

InlineKeyboardBuilder

#### Defined in

dist/markup.d.ts:203

***

### urlButton()

> **urlButton**(`text`, `url`): `this`

Adds url button

#### Parameters

• **text**: `string`

• **url**: `string` \| `URL`

#### Returns

`this`

#### Memberof

InlineKeyboardBuilder

#### Defined in

dist/markup.d.ts:173
