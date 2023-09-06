import * as markup from "../markup";

describe("Markup", () => {
  test(markup.forceReply.name, () => {
    expect(markup.forceReply()).toEqual({
      _: "replyMarkupForceReply",
      input_field_placeholder: "",
      is_personal: false
    });

    expect(markup.forceReply({ personal: true, placeholder: "test" })).toEqual({
      _: "replyMarkupForceReply",
      input_field_placeholder: "test",
      is_personal: true
    });
  });

  test(markup.removeKeyboard.name, () => {
    expect(markup.removeKeyboard()).toEqual({
      _: "replyMarkupRemoveKeyboard",
      is_personal: false
    });

    expect(markup.removeKeyboard({ personal: true })).toEqual({
      _: "replyMarkupRemoveKeyboard",
      is_personal: true
    });
  });

  test(markup.keyboard.name, () => {
    expect(markup.keyboard().build()).toEqual({
      _: "replyMarkupShowKeyboard",
      is_persistent: false,
      resize_keyboard: false,
      is_personal: false,
      one_time: false,
      input_field_placeholder: undefined,
      rows: []
    });

    expect(
      markup
        .keyboard({
          oneTime: true,
          persistent: true,
          personal: true,
          placeholder: "test",
          resize: true
        })
        .build()
    ).toEqual({
      _: "replyMarkupShowKeyboard",
      is_persistent: true,
      resize_keyboard: true,
      is_personal: true,
      one_time: true,
      input_field_placeholder: "test",
      rows: []
    });

    expect(
      markup.keyboard().oneTime().persistent().personal().resize().toJSON()
    ).toEqual({
      _: "replyMarkupShowKeyboard",
      is_persistent: true,
      resize_keyboard: true,
      is_personal: true,
      one_time: true,
      rows: []
    });

    expect(
      markup
        .keyboard()
        .oneTime(false)
        .persistent(false)
        .personal(false)
        .placeholder("test")
        .resize(false)
        .build()
    ).toEqual({
      _: "replyMarkupShowKeyboard",
      is_persistent: false,
      resize_keyboard: false,
      is_personal: false,
      one_time: false,
      input_field_placeholder: "test",
      rows: []
    });

    expect(
      markup
        .keyboard()
        .textButton("test")
        .row()
        .button("row 2", { _: "keyboardButtonTypeRequestUser", id: 0 })
        .build()
    ).toEqual({
      _: "replyMarkupShowKeyboard",
      is_persistent: false,
      resize_keyboard: false,
      is_personal: false,
      one_time: false,
      input_field_placeholder: undefined,
      rows: [
        [
          {
            _: "keyboardButton",
            text: "test",
            type: { _: "keyboardButtonTypeText" }
          }
        ],
        [
          {
            _: "keyboardButton",
            text: "row 2",
            type: { _: "keyboardButtonTypeRequestUser", id: 0 }
          }
        ]
      ]
    });
  });

  test(markup.inlineKeyboard.name, () => {
    expect(markup.inlineKeyboard().build()).toEqual({
      _: "replyMarkupInlineKeyboard",
      rows: []
    });

    expect(
      markup
        .inlineKeyboard()
        .urlButton("url", "https://google.com")
        .callbackButton("text", "Text")
        .row()
        .button("row 2", { _: "inlineKeyboardButtonTypeUser", user_id: 0 })
        .callbackButton("text", Buffer.from("Text"))
        .toJSON()
    ).toEqual({
      _: "replyMarkupInlineKeyboard",
      rows: [
        [
          {
            _: "inlineKeyboardButton",
            text: "url",
            type: { _: "inlineKeyboardButtonTypeUrl", url: "https://google.com" }
          },
          {
            _: "inlineKeyboardButton",
            text: "text",
            type: {
              _: "inlineKeyboardButtonTypeCallback",
              data: new Uint8Array(Buffer.from("Text"))
            }
          }
        ],
        [
          {
            _: "inlineKeyboardButton",
            text: "row 2",
            type: { _: "inlineKeyboardButtonTypeUser", user_id: 0 }
          },
          {
            _: "inlineKeyboardButton",
            text: "text",
            type: {
              _: "inlineKeyboardButtonTypeCallback",
              data: new Uint8Array(Buffer.from("Text"))
            }
          }
        ]
      ]
    });
  });
});
