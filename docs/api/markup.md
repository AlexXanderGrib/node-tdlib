[**TDLib Native**](README.md)

***

[TDLib Native](modules.md) / markup

# markup

## Classes

### InlineKeyboardBuilder

Defined in: [markup.ts:229](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L229)

InlineKeyboardBuilder

#### Constructors

##### new InlineKeyboardBuilder()

> **new InlineKeyboardBuilder**(): [`InlineKeyboardBuilder`](markup.md#inlinekeyboardbuilder)

###### Returns

[`InlineKeyboardBuilder`](markup.md#inlinekeyboardbuilder)

#### Properties

##### \_buttons

> `private` **\_buttons**: [`inlineKeyboardButton$Input`](types/README.md#inlinekeyboardbutton$input)[][] = `[]`

Defined in: [markup.ts:230](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L230)

##### \_row

> `private` **\_row**: `number` = `0`

Defined in: [markup.ts:231](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L231)

#### Accessors

##### \_currentRow

###### Get Signature

> **get** `private` **\_currentRow**(): [`inlineKeyboardButton$Input`](types/README.md#inlinekeyboardbutton$input)[]

Defined in: [markup.ts:239](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L239)

###### Memberof

InlineKeyboardBuilder

###### Returns

[`inlineKeyboardButton$Input`](types/README.md#inlinekeyboardbutton$input)[]

#### Methods

##### build()

> **build**(): [`replyMarkupInlineKeyboard$Input`](types/README.md#replymarkupinlinekeyboard$input)

Defined in: [markup.ts:306](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L306)

Generates keyboard

###### Returns

[`replyMarkupInlineKeyboard$Input`](types/README.md#replymarkupinlinekeyboard$input)

[replyMarkupInlineKeyboard$Input](types/README.md#replymarkupinlinekeyboard$input)

###### Memberof

InlineKeyboardBuilder

##### button()

> **button**(`text`, `type`): `this`

Defined in: [markup.ts:281](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L281)

###### Parameters

###### text

`string`

###### type

[`InlineKeyboardButtonType$Input`](types/README.md#inlinekeyboardbuttontype$input)

###### Returns

`this`

###### Memberof

InlineKeyboardBuilder

##### callbackButton()

> **callbackButton**(`text`, `data`): `this`

Defined in: [markup.ts:251](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L251)

Adds callback button

###### Parameters

###### text

`string`

###### data

`string` | `Uint8Array`

###### Returns

`this`

###### Memberof

InlineKeyboardBuilder

##### row()

> **row**(): `this`

Defined in: [markup.ts:292](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L292)

Creates new row

###### Returns

`this`

###### Memberof

KeyboardBuilder

##### toJSON()

> **toJSON**(): [`replyMarkupInlineKeyboard$Input`](types/README.md#replymarkupinlinekeyboard$input)

Defined in: [markup.ts:319](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L319)

Generates keyboard

###### Returns

[`replyMarkupInlineKeyboard$Input`](types/README.md#replymarkupinlinekeyboard$input)

[replyMarkupInlineKeyboard$Input](types/README.md#replymarkupinlinekeyboard$input)

###### Memberof

InlineKeyboardBuilder

##### urlButton()

> **urlButton**(`text`, `url`): `this`

Defined in: [markup.ts:266](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L266)

Adds url button

###### Parameters

###### text

`string`

###### url

`string` | `URL`

###### Returns

`this`

###### Memberof

InlineKeyboardBuilder

***

### KeyboardBuilder

Defined in: [markup.ts:60](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L60)

KeyboardBuilder

#### Constructors

##### new KeyboardBuilder()

> **new KeyboardBuilder**(`options`): [`KeyboardBuilder`](markup.md#keyboardbuilder)

Defined in: [markup.ts:80](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L80)

Creates an instance of KeyboardBuilder.

###### Parameters

###### options

`Partial`\<`KeyboardOptions`\>

###### Returns

[`KeyboardBuilder`](markup.md#keyboardbuilder)

###### Memberof

KeyboardBuilder

#### Properties

##### \_buttons

> `private` **\_buttons**: [`keyboardButton$Input`](types/README.md#keyboardbutton$input)[][] = `[]`

Defined in: [markup.ts:63](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L63)

##### \_options

> `private` `readonly` **\_options**: `Partial`\<`KeyboardOptions`\>

Defined in: [markup.ts:61](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L61)

##### \_row

> `private` **\_row**: `number` = `0`

Defined in: [markup.ts:62](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L62)

#### Accessors

##### \_currentRow

###### Get Signature

> **get** `private` **\_currentRow**(): [`keyboardButton$Input`](types/README.md#keyboardbutton$input)[]

Defined in: [markup.ts:71](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L71)

###### Memberof

KeyboardBuilder

###### Returns

[`keyboardButton$Input`](types/README.md#keyboardbutton$input)[]

#### Methods

##### build()

> **build**(): [`replyMarkupShowKeyboard$Input`](types/README.md#replymarkupshowkeyboard$input)

Defined in: [markup.ts:188](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L188)

Generates keyboard

###### Returns

[`replyMarkupShowKeyboard$Input`](types/README.md#replymarkupshowkeyboard$input)

[replyMarkupShowKeyboard$Input](types/README.md#replymarkupshowkeyboard$input)

###### Memberof

KeyboardBuilder

##### button()

> **button**(`text`, `type`?): `this`

Defined in: [markup.ts:103](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L103)

Adds button to current row

###### Parameters

###### text

`string`

###### type?

[`KeyboardButtonType$Input`](types/README.md#keyboardbuttontype$input)

###### Returns

`this`

###### Memberof

KeyboardBuilder

##### oneTime()

> **oneTime**(`isOneTime`?): `this`

Defined in: [markup.ts:165](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L165)

Sets [replyMarkupShowKeyboard$Input.one\_time](types/README.md#one_time-1)

###### Parameters

###### isOneTime?

`boolean` = `true`

###### Returns

`this`

###### Memberof

KeyboardBuilder

##### persistent()

> **persistent**(`isPersistent`?): `this`

Defined in: [markup.ts:129](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L129)

Sets [replyMarkupShowKeyboard$Input.is\_persistent](types/README.md#is_persistent-1)

###### Parameters

###### isPersistent?

`boolean` = `true`

###### Returns

`this`

###### Memberof

KeyboardBuilder

##### personal()

> **personal**(`isPersonal`?): `this`

Defined in: [markup.ts:153](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L153)

Sets [replyMarkupShowKeyboard$Input.is\_personal](types/README.md#is_personal-11)

###### Parameters

###### isPersonal?

`boolean` = `true`

###### Returns

`this`

###### Memberof

KeyboardBuilder

##### placeholder()

> **placeholder**(`value`): `this`

Defined in: [markup.ts:177](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L177)

Sets [replyMarkupShowKeyboard$Input.input\_field\_placeholder](types/README.md#input_field_placeholder-3)

###### Parameters

###### value

`string`

###### Returns

`this`

###### Memberof

KeyboardBuilder

##### resize()

> **resize**(`doResize`?): `this`

Defined in: [markup.ts:141](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L141)

Sets [replyMarkupShowKeyboard$Input.resize\_keyboard](types/README.md#resize_keyboard-1)

###### Parameters

###### doResize?

`boolean` = `true`

###### Returns

`this`

###### Memberof

KeyboardBuilder

##### row()

> **row**(): `this`

Defined in: [markup.ts:114](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L114)

Creates new row

###### Returns

`this`

###### Memberof

KeyboardBuilder

##### textButton()

> **textButton**(`text`): `this`

Defined in: [markup.ts:91](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L91)

Adds text button

###### Parameters

###### text

`string`

###### Returns

`this`

###### Memberof

KeyboardBuilder

##### toJSON()

> **toJSON**(): [`replyMarkupShowKeyboard$Input`](types/README.md#replymarkupshowkeyboard$input)

Defined in: [markup.ts:206](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L206)

Generates keyboard

###### Returns

[`replyMarkupShowKeyboard$Input`](types/README.md#replymarkupshowkeyboard$input)

[replyMarkupShowKeyboard$Input](types/README.md#replymarkupshowkeyboard$input)

###### Memberof

KeyboardBuilder

## Functions

### forceReply()

> **forceReply**(`__namedParameters`?): [`replyMarkupForceReply`](types/README.md#replymarkupforcereply)

Defined in: [markup.ts:20](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L20)

#### Parameters

##### \_\_namedParameters?

###### personal

`boolean` = `false`

###### placeholder

`string` = `""`

#### Returns

[`replyMarkupForceReply`](types/README.md#replymarkupforcereply)

{replyMarkupForceReply}

#### Export

***

### inlineKeyboard()

> **inlineKeyboard**(): [`InlineKeyboardBuilder`](markup.md#inlinekeyboardbuilder)

Defined in: [markup.ts:330](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L330)

#### Returns

[`InlineKeyboardBuilder`](markup.md#inlinekeyboardbuilder)

[InlineKeyboardBuilder](markup.md#inlinekeyboardbuilder)

#### Export

***

### keyboard()

> **keyboard**(`options`?): [`KeyboardBuilder`](markup.md#keyboardbuilder)

Defined in: [markup.ts:218](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L218)

#### Parameters

##### options?

`Partial`\<`KeyboardOptions`\> = `{}`

#### Returns

[`KeyboardBuilder`](markup.md#keyboardbuilder)

[KeyboardBuilder](markup.md#keyboardbuilder)

#### Export

***

### removeKeyboard()

> **removeKeyboard**(`__namedParameters`?): [`replyMarkupRemoveKeyboard`](types/README.md#replymarkupremovekeyboard)

Defined in: [markup.ts:38](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/markup.ts#L38)

#### Parameters

##### \_\_namedParameters?

###### personal

`boolean` = `false`

#### Returns

[`replyMarkupRemoveKeyboard`](types/README.md#replymarkupremovekeyboard)

{replyMarkupRemoveKeyboard}

#### Export
