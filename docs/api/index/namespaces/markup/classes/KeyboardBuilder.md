[**TDLib**](../../../../README.md) • **Docs**

***

[TDLib](../../../../modules.md) / [index](../../../README.md) / [markup](../README.md) / KeyboardBuilder

# Class: KeyboardBuilder

KeyboardBuilder

## Constructors

### new KeyboardBuilder()

> **new KeyboardBuilder**(`options`): [`KeyboardBuilder`](KeyboardBuilder.md)

Creates an instance of KeyboardBuilder.

#### Parameters

• **options**: `Partial`\<`KeyboardOptions`\>

#### Returns

[`KeyboardBuilder`](KeyboardBuilder.md)

#### Memberof

KeyboardBuilder

#### Defined in

dist/markup.d.ts:52

## Properties

### \_buttons

> `private` **\_buttons**: `any`

#### Defined in

dist/markup.d.ts:38

***

### \_options

> `private` `readonly` **\_options**: `any`

#### Defined in

dist/markup.d.ts:36

***

### \_row

> `private` **\_row**: `any`

#### Defined in

dist/markup.d.ts:37

## Accessors

### \_currentRow

> `get` `private` **\_currentRow**(): `any`

#### Memberof

KeyboardBuilder

#### Returns

`any`

#### Defined in

dist/markup.d.ts:46

## Methods

### build()

> **build**(): [`replyMarkupShowKeyboard$Input`](../../types/namespaces/default/type-aliases/replyMarkupShowKeyboard$Input.md)

Generates keyboard

#### Returns

[`replyMarkupShowKeyboard$Input`](../../types/namespaces/default/type-aliases/replyMarkupShowKeyboard$Input.md)

[replyMarkupShowKeyboard$Input](../../types/namespaces/default/type-aliases/replyMarkupShowKeyboard$Input.md)

#### Memberof

KeyboardBuilder

#### Defined in

dist/markup.d.ts:123

***

### button()

> **button**(`text`, `type`?): `this`

Adds button to current row

#### Parameters

• **text**: `string`

• **type?**: [`KeyboardButtonType$Input`](../../types/namespaces/default/type-aliases/KeyboardButtonType$Input.md)

#### Returns

`this`

#### Memberof

KeyboardBuilder

#### Defined in

dist/markup.d.ts:69

***

### oneTime()

> **oneTime**(`isOneTime`?): `this`

Sets replyMarkupShowKeyboard$Input.one_time

#### Parameters

• **isOneTime?**: `boolean`

#### Returns

`this`

#### Memberof

KeyboardBuilder

#### Defined in

dist/markup.d.ts:108

***

### persistent()

> **persistent**(`isPersistent`?): `this`

Sets replyMarkupShowKeyboard$Input.is_persistent

#### Parameters

• **isPersistent?**: `boolean`

#### Returns

`this`

#### Memberof

KeyboardBuilder

#### Defined in

dist/markup.d.ts:84

***

### personal()

> **personal**(`isPersonal`?): `this`

Sets replyMarkupShowKeyboard$Input.is_personal

#### Parameters

• **isPersonal?**: `boolean`

#### Returns

`this`

#### Memberof

KeyboardBuilder

#### Defined in

dist/markup.d.ts:100

***

### placeholder()

> **placeholder**(`value`): `this`

Sets replyMarkupShowKeyboard$Input.input_field_placeholder

#### Parameters

• **value**: `string`

#### Returns

`this`

#### Memberof

KeyboardBuilder

#### Defined in

dist/markup.d.ts:116

***

### resize()

> **resize**(`doResize`?): `this`

Sets replyMarkupShowKeyboard$Input.resize_keyboard

#### Parameters

• **doResize?**: `boolean`

#### Returns

`this`

#### Memberof

KeyboardBuilder

#### Defined in

dist/markup.d.ts:92

***

### row()

> **row**(): `this`

Creates new row

#### Returns

`this`

#### Memberof

KeyboardBuilder

#### Defined in

dist/markup.d.ts:76

***

### textButton()

> **textButton**(`text`): `this`

Adds text button

#### Parameters

• **text**: `string`

#### Returns

`this`

#### Memberof

KeyboardBuilder

#### Defined in

dist/markup.d.ts:60

***

### toJSON()

> **toJSON**(): [`replyMarkupShowKeyboard$Input`](../../types/namespaces/default/type-aliases/replyMarkupShowKeyboard$Input.md)

Generates keyboard

#### Returns

[`replyMarkupShowKeyboard$Input`](../../types/namespaces/default/type-aliases/replyMarkupShowKeyboard$Input.md)

[replyMarkupShowKeyboard$Input](../../types/namespaces/default/type-aliases/replyMarkupShowKeyboard$Input.md)

#### Memberof

KeyboardBuilder

#### Defined in

dist/markup.d.ts:130
