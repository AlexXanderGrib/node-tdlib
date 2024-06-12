import {
  replyMarkupForceReply,
  replyMarkupRemoveKeyboard,
  replyMarkupShowKeyboard$Input,
  KeyboardButton$Input,
  KeyboardButtonType$Input,
  InlineKeyboardButton$Input,
  replyMarkupInlineKeyboard$Input,
  InlineKeyboardButtonType$Input
} from "./types";

/**
 *
 *
 * @export
 * @param {object} []
 * @returns {replyMarkupForceReply}  {replyMarkupForceReply}
 */
export function forceReply({
  placeholder = "",
  personal = false
} = {}): replyMarkupForceReply {
  return {
    _: "replyMarkupForceReply",
    input_field_placeholder: placeholder,
    is_personal: personal
  };
}

/**
 *
 *
 * @export
 * @param {object} []
 * @returns {replyMarkupRemoveKeyboard}  {replyMarkupRemoveKeyboard}
 */
export function removeKeyboard({
  personal = false
} = {}): replyMarkupRemoveKeyboard {
  return {
    _: "replyMarkupRemoveKeyboard",
    is_personal: personal
  };
}

type KeyboardOptions = {
  persistent: boolean;
  resize: boolean;
  personal: boolean;
  oneTime: boolean;
  placeholder: string;
};

/**
 *
 *
 * @class KeyboardBuilder
 */
class KeyboardBuilder {
  private readonly _options: Partial<KeyboardOptions>;
  private _row = 0;
  private _buttons: KeyboardButton$Input[][] = [];
  /**
   *
   *
   * @readonly
   * @private
   * @memberof KeyboardBuilder
   */
  private get _currentRow(): KeyboardButton$Input[] {
    return (this._buttons[+this._row] ??= []);
  }

  /**
   * Creates an instance of KeyboardBuilder.
   * @param {Partial<KeyboardOptions>} options
   * @memberof KeyboardBuilder
   */
  constructor(options: Partial<KeyboardOptions>) {
    this._options = options;
  }

  /**
   * Adds text button
   *
   * @param {string} text
   * @returns {this}
   * @memberof KeyboardBuilder
   */
  textButton(text: string): this {
    return this.button(text, { _: "keyboardButtonTypeText" });
  }

  /**
   * Adds button to current row
   *
   * @param {string} text
   * @param {KeyboardButtonType} [type]
   * @returns {this}
   * @memberof KeyboardBuilder
   */
  button(text: string, type: KeyboardButtonType$Input): this {
    this._currentRow.push({ _: "keyboardButton", text, type });
    return this;
  }

  /**
   * Creates new row
   *
   * @returns {this}
   * @memberof KeyboardBuilder
   */
  row(): this {
    if (this._currentRow.length > 0) {
      this._buttons[++this._row] ??= [];
    }

    return this;
  }

  /**
   * Sets {@link replyMarkupShowKeyboard$Input.is_persistent}
   *
   * @param {boolean} [isPersistent=true]
   * @returns {this}
   * @memberof KeyboardBuilder
   */
  persistent(isPersistent = true): this {
    this._options.persistent = isPersistent;
    return this;
  }

  /**
   * Sets {@link replyMarkupShowKeyboard$Input.resize_keyboard}
   *
   * @param {boolean} [doResize=true]
   * @returns {this}
   * @memberof KeyboardBuilder
   */
  resize(doResize = true): this {
    this._options.resize = doResize;
    return this;
  }

  /**
   * Sets {@link replyMarkupShowKeyboard$Input.is_personal}
   *
   * @param {boolean} [isPersonal=true]
   * @returns {this}
   * @memberof KeyboardBuilder
   */
  personal(isPersonal = true): this {
    this._options.personal = isPersonal;
    return this;
  }

  /**
   * Sets {@link replyMarkupShowKeyboard$Input.one_time}
   *
   * @param {boolean} [isOneTime=true]
   * @returns {this}
   * @memberof KeyboardBuilder
   */
  oneTime(isOneTime = true): this {
    this._options.oneTime = isOneTime;
    return this;
  }

  /**
   * Sets {@link replyMarkupShowKeyboard$Input.input_field_placeholder}
   *
   * @param {string} value
   * @returns {this}
   * @memberof KeyboardBuilder
   */
  placeholder(value: string): this {
    this._options.placeholder = value;
    return this;
  }

  /**
   * Generates keyboard
   *
   * @returns {replyMarkupShowKeyboard$Input}  {@link replyMarkupShowKeyboard$Input}
   * @memberof KeyboardBuilder
   */
  build(): replyMarkupShowKeyboard$Input {
    return {
      _: "replyMarkupShowKeyboard",
      is_persistent: this._options.persistent || false,
      resize_keyboard: this._options.resize || false,
      is_personal: this._options.personal || false,
      one_time: this._options.oneTime || false,
      input_field_placeholder: this._options.placeholder || undefined,
      rows: this._buttons
    };
  }

  /**
   * Generates keyboard
   *
   * @returns {replyMarkupShowKeyboard}  {@link replyMarkupShowKeyboard$Input}
   * @memberof KeyboardBuilder
   */
  toJSON(): replyMarkupShowKeyboard$Input {
    return this.build();
  }
}

/**
 *
 *
 * @export
 * @param {KeyboardOptions} [options={}]
 * @returns {KeyboardBuilder} {@link KeyboardBuilder}
 */
export function keyboard(options: Partial<KeyboardOptions> = {}) {
  return new KeyboardBuilder(options);
}

const encoder = new TextEncoder();

/**
 *
 *
 * @class InlineKeyboardBuilder
 */
class InlineKeyboardBuilder {
  private _buttons: InlineKeyboardButton$Input[][] = [];
  private _row = 0;
  /**
   *
   *
   * @readonly
   * @private
   * @memberof InlineKeyboardBuilder
   */
  private get _currentRow(): InlineKeyboardButton$Input[] {
    return (this._buttons[+this._row] ??= []);
  }

  /**
   * Adds callback button
   *
   * @param {string} text
   * @param {string} data
   * @returns {this}
   * @memberof InlineKeyboardBuilder
   */
  callbackButton(text: string, data: string | Uint8Array): this {
    return this.button(text, {
      _: "inlineKeyboardButtonTypeCallback",
      data: typeof data === "string" ? encoder.encode(data) : new Uint8Array(data)
    });
  }

  /**
   * Adds url button
   *
   * @param {string} text
   * @param {string|URL} url
   * @returns {this}
   * @memberof InlineKeyboardBuilder
   */
  urlButton(text: string, url: string | URL): this {
    return this.button(text, {
      _: "inlineKeyboardButtonTypeUrl",
      url: url.toString()
    });
  }

  /**
   *
   *
   * @param {string} text
   * @param {InlineKeyboardButtonType$Input} type
   * @returns {this}
   * @memberof InlineKeyboardBuilder
   */
  button(text: string, type: InlineKeyboardButtonType$Input): this {
    this._currentRow.push({ _: "inlineKeyboardButton", text, type });
    return this;
  }

  /**
   * Creates new row
   *
   * @returns {this}
   * @memberof KeyboardBuilder
   */
  row(): this {
    if (this._currentRow.length > 0) {
      this._buttons[++this._row] ??= [];
    }

    return this;
  }

  /**
   * Generates keyboard
   *
   * @returns {replyMarkupInlineKeyboard$Input}  {@link replyMarkupInlineKeyboard$Input}
   * @memberof InlineKeyboardBuilder
   */
  build(): replyMarkupInlineKeyboard$Input {
    return {
      _: "replyMarkupInlineKeyboard",
      rows: this._buttons
    };
  }

  /**
   * Generates keyboard
   *
   * @returns {replyMarkupInlineKeyboard$Input}  {@link replyMarkupInlineKeyboard$Input}
   * @memberof InlineKeyboardBuilder
   */
  toJSON(): replyMarkupInlineKeyboard$Input {
    return this.build();
  }
}

/**
 *
 *
 * @export
 * @returns {InlineKeyboardBuilder}  {@link InlineKeyboardBuilder}
 */
export function inlineKeyboard(): InlineKeyboardBuilder {
  return new InlineKeyboardBuilder();
}
