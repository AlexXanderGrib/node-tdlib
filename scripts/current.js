const { PlatformLibrary } = require("./lib");

const { build } = PlatformLibrary.getCurrentBuild();
const dto = build?.toJSON();
const propertyKey = process.argv[2];

const value = propertyKey
  ? String(dto?.[propertyKey] ?? "")
  : JSON.stringify(dto, undefined, 2);

if (value === "" || value === "null") {
  process.exit(1);
}

console.log(value);
