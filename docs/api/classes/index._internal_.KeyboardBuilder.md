[TDLib](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / KeyboardBuilder

# Class: KeyboardBuilder

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).KeyboardBuilder

## Table of contents

### Constructors

- [constructor](index._internal_.KeyboardBuilder.md#constructor)

### Properties

- [\_buttons](index._internal_.KeyboardBuilder.md#_buttons)
- [\_options](index._internal_.KeyboardBuilder.md#_options)
- [\_row](index._internal_.KeyboardBuilder.md#_row)

### Accessors

- [\_currentRow](index._internal_.KeyboardBuilder.md#_currentrow)

### Methods

- [build](index._internal_.KeyboardBuilder.md#build)
- [button](index._internal_.KeyboardBuilder.md#button)
- [oneTime](index._internal_.KeyboardBuilder.md#onetime)
- [persistent](index._internal_.KeyboardBuilder.md#persistent)
- [personal](index._internal_.KeyboardBuilder.md#personal)
- [placeholder](index._internal_.KeyboardBuilder.md#placeholder)
- [resize](index._internal_.KeyboardBuilder.md#resize)
- [row](index._internal_.KeyboardBuilder.md#row)
- [textButton](index._internal_.KeyboardBuilder.md#textbutton)
- [toJSON](index._internal_.KeyboardBuilder.md#tojson)

## Constructors

### constructor

• **new KeyboardBuilder**(`options`)

Creates an instance of KeyboardBuilder.

**`Memberof`**

KeyboardBuilder

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`KeyboardOptions`](../modules/index._internal_.md#keyboardoptions)\> |

#### Defined in

dist/markup.d.ts:54

## Properties

### \_buttons

• `Private` **\_buttons**: `any`

#### Defined in

dist/markup.d.ts:40

___

### \_options

• `Private` `Readonly` **\_options**: `any`

#### Defined in

dist/markup.d.ts:38

___

### \_row

• `Private` **\_row**: `any`

#### Defined in

dist/markup.d.ts:39

## Accessors

### \_currentRow

• `Private` `get` **_currentRow**(): `any`

**`Memberof`**

KeyboardBuilder

#### Returns

`any`

#### Defined in

dist/markup.d.ts:48

## Methods

### build

▸ **build**(): [`replyMarkupShowKeyboard$Input`](../modules/index.types.default.md#replymarkupshowkeyboard$input)

Generates keyboard

**`Memberof`**

KeyboardBuilder

#### Returns

[`replyMarkupShowKeyboard$Input`](../modules/index.types.default.md#replymarkupshowkeyboard$input)

replyMarkupShowKeyboard$Input

#### Defined in

dist/markup.d.ts:125

___

### button

▸ **button**(`text`, `type?`): [`KeyboardBuilder`](index._internal_.KeyboardBuilder.md)

Adds button to current row

**`Memberof`**

KeyboardBuilder

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `type?` | [`KeyboardButtonType$Input`](../modules/index.types.default.md#keyboardbuttontype$input) |

#### Returns

[`KeyboardBuilder`](index._internal_.KeyboardBuilder.md)

#### Defined in

dist/markup.d.ts:71

___

### oneTime

▸ **oneTime**(`isOneTime?`): [`KeyboardBuilder`](index._internal_.KeyboardBuilder.md)

Sets replyMarkupShowKeyboard$Input.one_time

**`Memberof`**

KeyboardBuilder

#### Parameters

| Name | Type |
| :------ | :------ |
| `isOneTime?` | `boolean` |

#### Returns

[`KeyboardBuilder`](index._internal_.KeyboardBuilder.md)

#### Defined in

dist/markup.d.ts:110

___

### persistent

▸ **persistent**(`isPersistent?`): [`KeyboardBuilder`](index._internal_.KeyboardBuilder.md)

Sets replyMarkupShowKeyboard$Input.is_persistent

**`Memberof`**

KeyboardBuilder

#### Parameters

| Name | Type |
| :------ | :------ |
| `isPersistent?` | `boolean` |

#### Returns

[`KeyboardBuilder`](index._internal_.KeyboardBuilder.md)

#### Defined in

dist/markup.d.ts:86

___

### personal

▸ **personal**(`isPersonal?`): [`KeyboardBuilder`](index._internal_.KeyboardBuilder.md)

Sets replyMarkupShowKeyboard$Input.is_personal

**`Memberof`**

KeyboardBuilder

#### Parameters

| Name | Type |
| :------ | :------ |
| `isPersonal?` | `boolean` |

#### Returns

[`KeyboardBuilder`](index._internal_.KeyboardBuilder.md)

#### Defined in

dist/markup.d.ts:102

___

### placeholder

▸ **placeholder**(`value`): [`KeyboardBuilder`](index._internal_.KeyboardBuilder.md)

Sets replyMarkupShowKeyboard$Input.input_field_placeholder

**`Memberof`**

KeyboardBuilder

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`KeyboardBuilder`](index._internal_.KeyboardBuilder.md)

#### Defined in

dist/markup.d.ts:118

___

### resize

▸ **resize**(`doResize?`): [`KeyboardBuilder`](index._internal_.KeyboardBuilder.md)

Sets replyMarkupShowKeyboard$Input.resize_keyboard

**`Memberof`**

KeyboardBuilder

#### Parameters

| Name | Type |
| :------ | :------ |
| `doResize?` | `boolean` |

#### Returns

[`KeyboardBuilder`](index._internal_.KeyboardBuilder.md)

#### Defined in

dist/markup.d.ts:94

___

### row

▸ **row**(): [`KeyboardBuilder`](index._internal_.KeyboardBuilder.md)

Creates new row

**`Memberof`**

KeyboardBuilder

#### Returns

[`KeyboardBuilder`](index._internal_.KeyboardBuilder.md)

#### Defined in

dist/markup.d.ts:78

___

### textButton

▸ **textButton**(`text`): [`KeyboardBuilder`](index._internal_.KeyboardBuilder.md)

Adds text button

**`Memberof`**

KeyboardBuilder

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

[`KeyboardBuilder`](index._internal_.KeyboardBuilder.md)

#### Defined in

dist/markup.d.ts:62

___

### toJSON

▸ **toJSON**(): [`replyMarkupShowKeyboard$Input`](../modules/index.types.default.md#replymarkupshowkeyboard$input)

Generates keyboard

**`Memberof`**

KeyboardBuilder

#### Returns

[`replyMarkupShowKeyboard$Input`](../modules/index.types.default.md#replymarkupshowkeyboard$input)

replyMarkupShowKeyboard$Input

#### Defined in

dist/markup.d.ts:132
