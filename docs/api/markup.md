[**TDLib Native**](README.md) • **Docs**

***

[TDLib Native](modules.md) / markup

# markup

## Classes

### InlineKeyboardBuilder

InlineKeyboardBuilder

#### Constructors

##### new InlineKeyboardBuilder()

> **new InlineKeyboardBuilder**(): [`InlineKeyboardBuilder`](markup.md#inlinekeyboardbuilder)

###### Returns

[`InlineKeyboardBuilder`](markup.md#inlinekeyboardbuilder)

#### Properties

##### \_buttons

> `private` **\_buttons**: [`inlineKeyboardButton$Input`](types/README.md#inlinekeyboardbutton$input)[][] = `[]`

###### Defined in

[markup.ts:230](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L230)

##### \_row

> `private` **\_row**: `number` = `0`

###### Defined in

[markup.ts:231](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L231)

#### Accessors

##### \_currentRow

> `get` `private` **\_currentRow**(): [`inlineKeyboardButton$Input`](types/README.md#inlinekeyboardbutton$input)[]

###### Memberof

InlineKeyboardBuilder

###### Returns

[`inlineKeyboardButton$Input`](types/README.md#inlinekeyboardbutton$input)[]

###### Defined in

[markup.ts:239](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L239)

#### Methods

##### build()

> **build**(): [`replyMarkupInlineKeyboard$Input`](types/README.md#replymarkupinlinekeyboard$input)

Generates keyboard

###### Returns

[`replyMarkupInlineKeyboard$Input`](types/README.md#replymarkupinlinekeyboard$input)

[replyMarkupInlineKeyboard$Input](types/README.md#replymarkupinlinekeyboard$input)

###### Memberof

InlineKeyboardBuilder

###### Defined in

[markup.ts:306](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L306)

##### button()

> **button**(`text`, `type`): `this`

###### Parameters

• **text**: `string`

• **type**: [`InlineKeyboardButtonType$Input`](types/README.md#inlinekeyboardbuttontype$input)

###### Returns

`this`

###### Memberof

InlineKeyboardBuilder

###### Defined in

[markup.ts:281](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L281)

##### callbackButton()

> **callbackButton**(`text`, `data`): `this`

Adds callback button

###### Parameters

• **text**: `string`

• **data**: `string` \| `Uint8Array`

###### Returns

`this`

###### Memberof

InlineKeyboardBuilder

###### Defined in

[markup.ts:251](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L251)

##### row()

> **row**(): `this`

Creates new row

###### Returns

`this`

###### Memberof

KeyboardBuilder

###### Defined in

[markup.ts:292](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L292)

##### toJSON()

> **toJSON**(): [`replyMarkupInlineKeyboard$Input`](types/README.md#replymarkupinlinekeyboard$input)

Generates keyboard

###### Returns

[`replyMarkupInlineKeyboard$Input`](types/README.md#replymarkupinlinekeyboard$input)

[replyMarkupInlineKeyboard$Input](types/README.md#replymarkupinlinekeyboard$input)

###### Memberof

InlineKeyboardBuilder

###### Defined in

[markup.ts:319](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L319)

##### urlButton()

> **urlButton**(`text`, `url`): `this`

Adds url button

###### Parameters

• **text**: `string`

• **url**: `string` \| `URL`

###### Returns

`this`

###### Memberof

InlineKeyboardBuilder

###### Defined in

[markup.ts:266](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L266)

***

### KeyboardBuilder

KeyboardBuilder

#### Constructors

##### new KeyboardBuilder()

> **new KeyboardBuilder**(`options`): [`KeyboardBuilder`](markup.md#keyboardbuilder)

Creates an instance of KeyboardBuilder.

###### Parameters

• **options**: `Partial`\<`KeyboardOptions`\>

###### Returns

[`KeyboardBuilder`](markup.md#keyboardbuilder)

###### Memberof

KeyboardBuilder

###### Defined in

[markup.ts:80](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L80)

#### Properties

##### \_buttons

> `private` **\_buttons**: [`keyboardButton$Input`](types/README.md#keyboardbutton$input)[][] = `[]`

###### Defined in

[markup.ts:63](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L63)

##### \_options

> `private` `readonly` **\_options**: `Partial`\<`KeyboardOptions`\>

###### Defined in

[markup.ts:61](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L61)

##### \_row

> `private` **\_row**: `number` = `0`

###### Defined in

[markup.ts:62](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L62)

#### Accessors

##### \_currentRow

> `get` `private` **\_currentRow**(): [`keyboardButton$Input`](types/README.md#keyboardbutton$input)[]

###### Memberof

KeyboardBuilder

###### Returns

[`keyboardButton$Input`](types/README.md#keyboardbutton$input)[]

###### Defined in

[markup.ts:71](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L71)

#### Methods

##### build()

> **build**(): [`replyMarkupShowKeyboard$Input`](types/README.md#replymarkupshowkeyboard$input)

Generates keyboard

###### Returns

[`replyMarkupShowKeyboard$Input`](types/README.md#replymarkupshowkeyboard$input)

[replyMarkupShowKeyboard$Input](types/README.md#replymarkupshowkeyboard$input)

###### Memberof

KeyboardBuilder

###### Defined in

[markup.ts:188](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L188)

##### button()

> **button**(`text`, `type`?): `this`

Adds button to current row

###### Parameters

• **text**: `string`

• **type?**: [`KeyboardButtonType$Input`](types/README.md#keyboardbuttontype$input)

###### Returns

`this`

###### Memberof

KeyboardBuilder

###### Defined in

[markup.ts:103](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L103)

##### oneTime()

> **oneTime**(`isOneTime`?): `this`

Sets [replyMarkupShowKeyboard$Input.one_time](types/README.md#one_time-1)

###### Parameters

• **isOneTime?**: `boolean` = `true`

###### Returns

`this`

###### Memberof

KeyboardBuilder

###### Defined in

[markup.ts:165](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L165)

##### persistent()

> **persistent**(`isPersistent`?): `this`

Sets [replyMarkupShowKeyboard$Input.is_persistent](types/README.md#is_persistent-1)

###### Parameters

• **isPersistent?**: `boolean` = `true`

###### Returns

`this`

###### Memberof

KeyboardBuilder

###### Defined in

[markup.ts:129](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L129)

##### personal()

> **personal**(`isPersonal`?): `this`

Sets [replyMarkupShowKeyboard$Input.is_personal](types/README.md#is_personal-11)

###### Parameters

• **isPersonal?**: `boolean` = `true`

###### Returns

`this`

###### Memberof

KeyboardBuilder

###### Defined in

[markup.ts:153](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L153)

##### placeholder()

> **placeholder**(`value`): `this`

Sets [replyMarkupShowKeyboard$Input.input_field_placeholder](types/README.md#input_field_placeholder-3)

###### Parameters

• **value**: `string`

###### Returns

`this`

###### Memberof

KeyboardBuilder

###### Defined in

[markup.ts:177](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L177)

##### resize()

> **resize**(`doResize`?): `this`

Sets [replyMarkupShowKeyboard$Input.resize_keyboard](types/README.md#resize_keyboard-1)

###### Parameters

• **doResize?**: `boolean` = `true`

###### Returns

`this`

###### Memberof

KeyboardBuilder

###### Defined in

[markup.ts:141](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L141)

##### row()

> **row**(): `this`

Creates new row

###### Returns

`this`

###### Memberof

KeyboardBuilder

###### Defined in

[markup.ts:114](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L114)

##### textButton()

> **textButton**(`text`): `this`

Adds text button

###### Parameters

• **text**: `string`

###### Returns

`this`

###### Memberof

KeyboardBuilder

###### Defined in

[markup.ts:91](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L91)

##### toJSON()

> **toJSON**(): [`replyMarkupShowKeyboard$Input`](types/README.md#replymarkupshowkeyboard$input)

Generates keyboard

###### Returns

[`replyMarkupShowKeyboard$Input`](types/README.md#replymarkupshowkeyboard$input)

[replyMarkupShowKeyboard$Input](types/README.md#replymarkupshowkeyboard$input)

###### Memberof

KeyboardBuilder

###### Defined in

[markup.ts:206](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L206)

## Functions

### forceReply()

> **forceReply**(`__namedParameters`?): [`replyMarkupForceReply`](types/README.md#replymarkupforcereply)

#### Parameters

• **\_\_namedParameters?** = `{}`

• **\_\_namedParameters.personal?**: `undefined` \| `boolean` = `false`

• **\_\_namedParameters.placeholder?**: `undefined` \| `string` = `""`

#### Returns

[`replyMarkupForceReply`](types/README.md#replymarkupforcereply)

{replyMarkupForceReply}

#### Export

#### Defined in

[markup.ts:20](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L20)

***

### inlineKeyboard()

> **inlineKeyboard**(): [`InlineKeyboardBuilder`](markup.md#inlinekeyboardbuilder)

#### Returns

[`InlineKeyboardBuilder`](markup.md#inlinekeyboardbuilder)

[InlineKeyboardBuilder](markup.md#inlinekeyboardbuilder)

#### Export

#### Defined in

[markup.ts:330](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L330)

***

### keyboard()

> **keyboard**(`options`?): [`KeyboardBuilder`](markup.md#keyboardbuilder)

#### Parameters

• **options?**: `Partial`\<`KeyboardOptions`\> = `{}`

#### Returns

[`KeyboardBuilder`](markup.md#keyboardbuilder)

[KeyboardBuilder](markup.md#keyboardbuilder)

#### Export

#### Defined in

[markup.ts:218](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L218)

***

### removeKeyboard()

> **removeKeyboard**(`__namedParameters`?): [`replyMarkupRemoveKeyboard`](types/README.md#replymarkupremovekeyboard)

#### Parameters

• **\_\_namedParameters?** = `{}`

• **\_\_namedParameters.personal?**: `undefined` \| `boolean` = `false`

#### Returns

[`replyMarkupRemoveKeyboard`](types/README.md#replymarkupremovekeyboard)

{replyMarkupRemoveKeyboard}

#### Export

#### Defined in

[markup.ts:38](https://github.com/AlexXanderGrib/node-tdlib/blob/6b8b34a2134f6ad0510a0e2f2b8c45f5e7c61880/src/markup.ts#L38)
