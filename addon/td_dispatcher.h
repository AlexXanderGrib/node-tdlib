#pragma once

#include <napi.h>

namespace TdDispatcher {
bool IsActive();
Napi::Value Create(const Napi::CallbackInfo& info);
Napi::Value Receive(const Napi::CallbackInfo& info);
void Send(const Napi::CallbackInfo& info);
Napi::Value Execute(const Napi::CallbackInfo& info);
Napi::Value Destroy(const Napi::CallbackInfo& info);
} // namespace TdDispatcher
