const { writeFile } = require("fs/promises");
const { resolve } = require("path");
const { downloader } = require("./lib");

(async function main(params) {
  const text = (await downloader.get("meta.yml")).toString('utf-8');
  const meta = {};

  for (const line of text.split("\n")) {
    const [key, ...value] = line.split(":");
    meta[key] = value.join(":").trim();
  }

  const ts = `export const Meta = {
  version: "${meta.version}",
  commitHash: "${meta["commit-hash"]}"
};\n`;

  await writeFile(resolve(__dirname, "../src/generated/meta.ts"), ts, "utf-8");
})();
