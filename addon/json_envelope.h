#pragma once

#include <charconv>
#include <cstdint>
#include <string_view>

// Inspect trusted, TDLib-generated JSON without materializing the response.
// Only direct object members match; strings and nested @extra data are skipped.
namespace TdJsonEnvelope {
inline void Space(std::string_view json, size_t& pos) {
  while (pos < json.size() && (json[pos] == ' ' || json[pos] == '\n' ||
      json[pos] == '\r' || json[pos] == '\t')) ++pos;
}
inline bool String(std::string_view json, size_t& pos) {
  if (pos >= json.size() || json[pos++] != '"') return false;
  while (pos < json.size()) {
    char c = json[pos++];
    if (c == '"') return true;
    if (c == '\\') {
      if (pos == json.size()) return false;
      ++pos;
    }
  }
  return false;
}
inline bool Value(std::string_view json, size_t& pos) {
  Space(json, pos);
  if (pos == json.size()) return false;
  if (json[pos] == '"') return String(json, pos);
  if (json[pos] == '{' || json[pos] == '[') {
    size_t depth = 0;
    do {
      char c = json[pos];
      if (c == '"') {
        if (!String(json, pos)) return false;
        continue;
      }
      ++pos;
      if (c == '{' || c == '[') ++depth;
      if (c == '}' || c == ']') --depth;
    } while (depth != 0 && pos < json.size());
    return depth == 0;
  }
  size_t start = pos;
  while (pos < json.size() && json[pos] != ',' && json[pos] != '}' &&
      json[pos] != ']' && json[pos] != ' ' && json[pos] != '\n' &&
      json[pos] != '\r' && json[pos] != '\t') ++pos;
  return pos != start;
}
inline std::string_view Member(std::string_view json, std::string_view key) {
  size_t pos = 0;
  Space(json, pos);
  if (pos == json.size() || json[pos++] != '{') return {};
  while (pos < json.size()) {
    Space(json, pos);
    if (pos == json.size() || json[pos] == '}') return {};
    size_t key_start = pos;
    if (!String(json, pos)) return {};
    auto name = json.substr(key_start + 1, pos - key_start - 2);
    Space(json, pos);
    if (pos == json.size() || json[pos++] != ':') return {};
    Space(json, pos);
    size_t value_start = pos;
    if (!Value(json, pos)) return {};
    if (name == key) return json.substr(value_start, pos - value_start);
    Space(json, pos);
    if (pos == json.size() || json[pos++] != ',') return {};
  }
  return {};
}
inline int ClientId(std::string_view json) {
  auto field = Member(json, "@client_id");
  if (field.empty()) return 0;
  int id = 0;
  auto parsed = std::from_chars(field.data(), field.data() + field.size(), id);
  return parsed.ec == std::errc{} && parsed.ptr == field.data() + field.size() && id > 0 ? id : 0;
}
inline bool Closed(std::string_view json) {
  return Member(json, "@type") == "\"updateAuthorizationState\"" &&
    Member(Member(json, "authorization_state"), "@type") == "\"authorizationStateClosed\"";
}
} // namespace TdJsonEnvelope
