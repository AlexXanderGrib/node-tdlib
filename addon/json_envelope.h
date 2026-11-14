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
inline int PositiveInt(std::string_view digits) {
  int id = 0;
  auto parsed = std::from_chars(digits.data(), digits.data() + digits.size(), id);
  return parsed.ec == std::errc{} && parsed.ptr == digits.data() + digits.size() && id > 0 ? id : 0;
}
// TDLib appends `,"@client_id":N}` as the final member of every response, so
// read it from the end in O(1). For valid JSON the match cannot be nested or
// inside a string: the closing brace ends the top-level object. Anything else
// falls back to the full member scan.
inline int TrailingClientId(std::string_view json) {
  constexpr std::string_view key = ",\"@client_id\":";
  if (json.empty() || json.back() != '}') return 0;
  const size_t end = json.size() - 1;
  size_t start = end;
  while (start > 0 && json[start - 1] >= '0' && json[start - 1] <= '9') --start;
  if (start == end || start < key.size() ||
      json.substr(start - key.size(), key.size()) != key) return 0;
  return PositiveInt(json.substr(start, end - start));
}
inline int ClientId(std::string_view json) {
  if (int id = TrailingClientId(json)) return id;
  auto field = Member(json, "@client_id");
  return field.empty() ? 0 : PositiveInt(field);
}
inline bool Closed(std::string_view json) {
  return Member(json, "@type") == "\"updateAuthorizationState\"" &&
    Member(Member(json, "authorization_state"), "@type") == "\"authorizationStateClosed\"";
}
} // namespace TdJsonEnvelope
