[**TDLib Native**](README.md) • **Docs**

***

[TDLib Native](modules.md) / index

# index

## References

### default

Renames and re-exports [Client](index.md#client)

### markup

Re-exports [markup](markup.md)

### Markup

Renames and re-exports [markup](markup.md)

### types

Re-exports [types](types/README.md)

## Classes

### Authenticator

#### Export

Authenticator

#### Implements

#### Implements

#### Implements

#### Implements

#### Implements

- `StageTDLibParameters`
- `StageSelect`
- `StageAuthenticate`
- `StageUser`

#### Constructors

##### new Authenticator()

> `private` **new Authenticator**(`client`): [`Authenticator`](index.md#authenticator)

Creates an instance of Authenticator.

###### Parameters

• **client**: [`Client`](index.md#client)

###### Returns

[`Authenticator`](index.md#authenticator)

###### Memberof

Authenticator

###### Defined in

[auth.ts:115](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/auth.ts#L115)

#### Properties

##### \_client

> `private` `readonly` **\_client**: [`Client`](index.md#client)

###### Defined in

[auth.ts:107](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/auth.ts#L107)

##### \_state

> `private` `readonly` **\_state**: `Partial`\<`AuthenticatorState`\> = `{}`

###### Defined in

[auth.ts:108](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/auth.ts#L108)

#### Methods

##### \_handleUpdate()

> `private` **\_handleUpdate**(`state`, `resolve`): `Promise`\<`void`\>

###### Parameters

• **state**: [`AuthorizationState`](types/README.md#authorizationstate)

• **resolve**

###### Returns

`Promise`\<`void`\>

{Promise<void>}

###### Memberof

Authenticator

###### Defined in

[auth.ts:128](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/auth.ts#L128)

##### authenticate()

> **authenticate**(`options`?): `Promise`\<`void`\>

###### Parameters

• **options?**: `AuthenticateOptions`

###### Returns

`Promise`\<`void`\>

{Promise<void>}

###### Throws

if underlying method call throws

###### Throws

if authentication state changes to closed before authentication completes

###### Throws

whatever is reason of cancellation token

###### Memberof

Authenticator

###### Implementation of

`StageAuthenticate.authenticate`

###### Defined in

[auth.ts:254](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/auth.ts#L254)

##### code()

> **code**(`code`): `StageUser`

###### Parameters

• **code**: `Waiter`\<`string`, [[`authenticationCodeInfo`](types/README.md#authenticationcodeinfo)]\>

###### Returns

`StageUser`

{StageUser}

###### Memberof

Authenticator

###### Implementation of

`StageUser.code`

###### Defined in

[auth.ts:336](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/auth.ts#L336)

##### email()

> **email**(`email`): `StageUser`

###### Parameters

• **email**: `Waiter`\<`string`, []\>

###### Returns

`StageUser`

{StageUser}

###### Memberof

Authenticator

###### Implementation of

`StageUser.email`

###### Defined in

[auth.ts:324](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/auth.ts#L324)

##### emailCode()

> **emailCode**(`emailCode`): `StageUser`

###### Parameters

• **emailCode**: `Waiter`\<`string`, [[`emailAddressAuthenticationCodeInfo`](types/README.md#emailaddressauthenticationcodeinfo)]\>

###### Returns

`StageUser`

{StageUser}

###### Memberof

Authenticator

###### Implementation of

`StageUser.emailCode`

###### Defined in

[auth.ts:348](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/auth.ts#L348)

##### password()

> **password**(`password`): `StageUser`

###### Parameters

• **password**: `Waiter`\<`string`, [`string`]\>

###### Returns

`StageUser`

{StageUser}

###### Memberof

Authenticator

###### Implementation of

`StageUser.password`

###### Defined in

[auth.ts:360](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/auth.ts#L360)

##### phone()

> **phone**(`phone`, `settings`?): `StageUser`

###### Parameters

• **phone**: `Waiter`\<`string`, []\>

• **settings?**: `Waiter`\<[`phoneNumberAuthenticationSettings$Input`](types/README.md#phonenumberauthenticationsettings$input), []\>

###### Returns

`StageUser`

{StageUser}

###### Memberof

Authenticator

###### Implementation of

`StageSelect.phone`

###### Defined in

[auth.ts:308](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/auth.ts#L308)

##### register()

> **register**(`data`): `StageUser`

###### Parameters

• **data**: `Waiter`\<[`registerUser$DirectInput`](types/README.md#registeruser$directinput), [[`termsOfService`](types/README.md#termsofservice)]\>

###### Returns

`StageUser`

{StageUser}

###### Memberof

Authenticator

###### Implementation of

`StageUser.register`

###### Defined in

[auth.ts:372](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/auth.ts#L372)

##### tdlibParameters()

> **tdlibParameters**(`parameters`): `StageSelect`

###### Parameters

• **parameters**: `Waiter`\<[`setTdlibParameters$DirectInput`](types/README.md#settdlibparameters$directinput), []\>

###### Returns

`StageSelect`

{StageSelect}

###### Memberof

Authenticator

###### Implementation of

`StageTDLibParameters.tdlibParameters`

###### Defined in

[auth.ts:283](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/auth.ts#L283)

##### token()

> **token**(`token`): `StageAuthenticate`

###### Parameters

• **token**: `Waiter`\<`string`, []\>

###### Returns

`StageAuthenticate`

{StageSelect}

###### Memberof

Authenticator

###### Implementation of

`StageSelect.token`

###### Defined in

[auth.ts:295](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/auth.ts#L295)

##### create()

> `static` **create**(`client`): `StageTDLibParameters`

###### Parameters

• **client**: [`Client`](index.md#client)

###### Returns

`StageTDLibParameters`

{StageTDLibParameters}

###### Static

###### Memberof

Authenticator

###### Defined in

[auth.ts:103](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/auth.ts#L103)

***

### Client

#### Export

Client

#### Constructors

##### new Client()

> **new Client**(`adapter`): [`Client`](index.md#client)

Creates an instance of Client.

###### Parameters

• **adapter**: `TDLib`

###### Returns

[`Client`](index.md#client)

###### Memberof

Client

###### Defined in

[client.ts:98](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L98)

#### Properties

##### \_adapter

> `private` `readonly` **\_adapter**: `TDLib`

###### Defined in

[client.ts:90](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L90)

##### \_client

> `private` `readonly` **\_client**: `TDLibClient`

###### Defined in

[client.ts:87](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L87)

##### \_requests

> `private` `readonly` **\_requests**: `Map`\<`number`, `PromiseWithResolvers`\<`any`\>\>

###### Defined in

[client.ts:88](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L88)

##### \_state

> `private` **\_state**: `ClientState` = `ClientState.PAUSED`

###### Defined in

[client.ts:91](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L91)

##### \_tdlibOptions

> `readonly` **\_tdlibOptions**: [`TDLibOptions`](index.md#tdliboptions-1)

###### Defined in

[client.ts:106](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L106)

##### \_updates

> `private` `readonly` **\_updates**: `EventBus`\<[`Update`](types/README.md#update)\>

###### Defined in

[client.ts:89](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L89)

##### api

> `readonly` **api**: [`$AsyncApi`](types/README.md#$asyncapi)

###### Defined in

[client.ts:104](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L104)

##### syncApi

> `readonly` **syncApi**: [`$SyncApi`](types/README.md#$syncapi)

###### Defined in

[client.ts:105](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L105)

#### Accessors

##### tdlibOptions

> `get` **tdlibOptions**(): [`TDLibOptions`](index.md#tdliboptions-1)

###### See

https://core.telegram.org/tdlib/options

###### Memberof

Client

###### Returns

[`TDLibOptions`](index.md#tdliboptions-1)

###### Defined in

[client.ts:313](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L313)

##### updates

> `get` **updates**(): `Observable`\<[`Update`](types/README.md#update)\>

###### Memberof

Client

###### Returns

`Observable`\<[`Update`](types/README.md#update)\>

###### Defined in

[client.ts:324](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L324)

#### Methods

##### \_thread()

> `private` **\_thread**(): `Promise`\<`void`\>

###### Returns

`Promise`\<`void`\>

###### Memberof

Client

###### Defined in

[client.ts:259](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L259)

##### destroy()

> **destroy**(): `void`

###### Returns

`void`

###### Memberof

Client

###### Defined in

[client.ts:367](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L367)

##### execute()

> **execute**\<`T`\>(`method`, `parameters`): `ReturnType`\<[`$SyncApi`](types/README.md#$syncapi)\[`T`\]\>

###### Type Parameters

• **T** *extends* keyof [`$SyncApi`](types/README.md#$syncapi)

###### Parameters

• **method**: `T`

• **parameters**: `OmitType`\<`Parameters`\<[`$MethodsDict`](types/README.md#$methodsdict)\[`T`\]\>\[`0`\]\>

###### Returns

`ReturnType`\<[`$SyncApi`](types/README.md#$syncapi)\[`T`\]\>

{Promise<ReturnType<$SyncApi[T]>>}

###### Throws

- [TDError](index.md#tderror)

###### Memberof

Client

###### Defined in

[client.ts:245](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L245)

##### invoke()

> **invoke**\<`T`\>(`method`, `parameters`): `Promise`\<`ReturnType`\<[`$MethodsDict`](types/README.md#$methodsdict)\[`T`\]\>\>

###### Type Parameters

• **T** *extends* keyof [`$AsyncApi`](types/README.md#$asyncapi)

###### Parameters

• **method**: `T`

• **parameters**: `Parameters`\<[`$AsyncApi`](types/README.md#$asyncapi)\[`T`\]\>\[`0`\]

###### Returns

`Promise`\<`ReturnType`\<[`$MethodsDict`](types/README.md#$methodsdict)\[`T`\]\>\>

{Promise<ReturnType<$AsyncApi[T]>>}

###### Throws

- [TDError](index.md#tderror)

###### Memberof

Client

###### Defined in

[client.ts:118](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L118)

##### pause()

> **pause**(): `this`

###### Returns

`this`

###### Memberof

Client

###### Defined in

[client.ts:351](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L351)

##### start()

> **start**(): `this`

###### Returns

`this`

###### Memberof

Client

###### Defined in

[client.ts:334](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L334)

##### disableLogs()

> `static` **disableLogs**(`lib`): `void`

Disables logging of TDLib instance

###### Parameters

• **lib**: `TDLib`

###### Returns

`void`

###### Static

###### Memberof

Client

###### Defined in

[client.ts:153](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L153)

##### execute()

> `static` **execute**\<`T`\>(`executor`, `method`, `parameters`): `ReturnType`\<[`$SyncApi`](types/README.md#$syncapi)\[`T`\]\>

###### Type Parameters

• **T** *extends* keyof [`$SyncApi`](types/README.md#$syncapi)

###### Parameters

• **executor**: `TDLib` \| [`Client`](index.md#client)

• **method**: `T`

• **parameters**: `Parameters`\<[`$SyncApi`](types/README.md#$syncapi)\[`T`\]\>\[`0`\]

###### Returns

`ReturnType`\<[`$SyncApi`](types/README.md#$syncapi)\[`T`\]\>

{Promise<ReturnType<$SyncMethodsDict[T]>>}

###### Throws

- [TDError](index.md#tderror)

###### Memberof

Client

###### Defined in

[client.ts:168](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L168)

***

### TDError

#### Export

TDError

#### Implements

#### Extends

- `Error`

#### Implements

- [`error`](types/README.md#error-2)

#### Constructors

##### new TDError()

> **new TDError**(`message`, `options`?): [`TDError`](index.md#tderror)

Creates an instance of TDError.

###### Parameters

• **message**: `string`

• **options?** = `{}`

• **options.code?**: `undefined` \| `number` = `Number.NaN`

• **options.method?**: `undefined` \| `string` = `"unknown method"`

• **options.parameters?**: `unknown` = `...`

###### Returns

[`TDError`](index.md#tderror)

###### Memberof

TDError

###### Overrides

`Error.constructor`

###### Defined in

[client.ts:51](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L51)

#### Properties

##### \_

> `readonly` **\_**: `"error"` = `"error"`

###### Implementation of

`error._`

###### Defined in

[client.ts:38](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L38)

##### code

> `readonly` **code**: `number`

Error code; subject to future changes. If the error code is 406, the error message must not be processed in any way and must not be displayed to the user

###### Implementation of

`error.code`

###### Defined in

[client.ts:39](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L39)

##### method

> `readonly` **method**: `string`

###### Defined in

[client.ts:40](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L40)

##### name

> **name**: `string` = `"TDError"`

###### Overrides

`Error.name`

###### Defined in

[client.ts:43](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L43)

##### parameters

> `readonly` **parameters**: `unknown`

###### Defined in

[client.ts:41](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L41)

#### Methods

##### toJSON()

> **toJSON**(): `object`

###### Returns

`object`

###### \_

> **\_**: `string`

###### code

> **code**: `number`

###### message

> **message**: `string`

###### method

> **method**: `string`

###### name

> **name**: `string`

###### parameters

> **parameters**: `unknown`

###### Memberof

TDError

###### Defined in

[client.ts:67](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/client.ts#L67)

***

### TDLibOptions

#### See

https://core.telegram.org/tdlib/options

#### Export

TDLibOptions

#### Constructors

##### new TDLibOptions()

> **new TDLibOptions**(`api`): [`TDLibOptions`](index.md#tdliboptions-1)

Creates an instance of TDLibOptions.

###### Parameters

• **api**: [`$AsyncApi`](types/README.md#$asyncapi)

###### Returns

[`TDLibOptions`](index.md#tdliboptions-1)

###### Memberof

TDLibOptions

###### Defined in

[options.ts:167](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/options.ts#L167)

#### Properties

##### \_api

> `private` `readonly` **\_api**: [`$AsyncApi`](types/README.md#$asyncapi)

###### Defined in

[options.ts:160](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/options.ts#L160)

#### Methods

##### assign()

> **assign**(`values`): `Promise`\<`void`\>

###### Parameters

• **values**: `OptionsWritable`

###### Returns

`Promise`\<`void`\>

###### Memberof

TDLibOptions

###### Defined in

[options.ts:256](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/options.ts#L256)

##### delete()

> **delete**(`key`): `Promise`\<`void`\>

###### Parameters

• **key**: `Keys`

###### Returns

`Promise`\<`void`\>

###### Memberof

TDLibOptions

###### Defined in

[options.ts:245](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/options.ts#L245)

##### get()

> **get**\<`T`\>(`key`): `Promise`\<`OptionsReadable`\[`T`\]\>

###### Type Parameters

• **T** *extends* `Keys`

###### Parameters

• **key**: `T`

###### Returns

`Promise`\<`OptionsReadable`\[`T`\]\>

{Promise<TelegramOptionsExtended[T]>}

###### Memberof

TDLibOptions

###### Defined in

[options.ts:179](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/options.ts#L179)

##### set()

> **set**\<`T`\>(`key`, `value`): `Promise`\<`void`\>

###### Type Parameters

• **T** *extends* `WritableKeys`

###### Parameters

• **key**: `T`

• **value**: `OptionsWritable`\[`T`\]

###### Returns

`Promise`\<`void`\>

{Promise<void>}

###### Memberof

TDLibOptions

###### Defined in

[options.ts:208](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/options.ts#L208)

##### ~~for()~~

> `static` **for**(`api`): [`TDLibOptions`](index.md#tdliboptions-1)

###### Parameters

• **api**: [`$AsyncApi`](types/README.md#$asyncapi)

###### Returns

[`TDLibOptions`](index.md#tdliboptions-1)

{TDLibOptions}

###### Static

###### Memberof

TDLibOptions

###### Deprecated

Removed instance caching, use `new TDLibOptions()` instead

###### Defined in

[options.ts:156](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/options.ts#L156)
