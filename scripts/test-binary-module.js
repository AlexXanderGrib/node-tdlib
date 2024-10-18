const assert = require("assert");
const { readFileSync } = require("fs");

const isGlibc = () => !!process.report?.getReport()?.header?.glibcVersionRuntime;

let packageName = `../packages/tdjson-${process.platform}-${process.arch}`;

if (process.platform === "linux") {
  packageName += isGlibc() ? "-glibc" : "-musl";
}

const { tdlibPath, version, commit } = require(packageName);

const meta = readFileSync("./td/meta.yml", "utf-8");
assert.equal(meta, `version: ${version}\ncommit-hash: ${commit}\n`);
console.log(tdlibPath);
