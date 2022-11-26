const { readFileSync, writeFileSync } = require("fs");
const { resolve } = require("path");

const text = readFileSync(resolve(__dirname, "../td/meta.yml"), "utf-8");
const meta = {};

for (const line of text.split("\n")) {
  const [key, ...value] = line.split(":");
  meta[key] = value.join(":").trim();
}

const ts = `export const Meta = {
  version: "${meta.version}",
  commitHash: "${meta["commit-hash"]}"
};\n`;

writeFileSync(resolve(__dirname, "../src/generated/meta.ts"), ts, "utf-8");
