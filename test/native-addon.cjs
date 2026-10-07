const { before, test } = require("node:test");
const assert = require("node:assert/strict");
const { execFile } = require("node:child_process");
const { cp, mkdir, writeFile } = require("node:fs/promises");
const path = require("node:path");
const { promisify } = require("node:util");

const exec = promisify(execFile);
const root = path.resolve(__dirname, "..");
const directory = path.join(root, "build/test-fixtures");
const extension = process.platform === "darwin" ? ".dylib" : ".so";
const library = path.join(directory, `tdjson${extension}`);
const incomplete = path.join(directory, `incomplete${extension}`);
const modernOnly = path.join(directory, `modern-only${extension}`);
const publicPackage = path.join(directory, "public-package");

before(async () => {
  await mkdir(directory, { recursive: true });
  const args = [
    "-std=c++17",
    "-shared",
    "-fPIC",
    "-pthread",
    path.join(__dirname, "fixtures/tdjson.cpp")
  ];
  await exec(process.env.CXX || "c++", [...args, "-o", library]);
  await exec(process.env.CXX || "c++", [
    ...args,
    "-DMISSING_SYMBOL",
    "-o",
    incomplete
  ]);
  await exec(process.env.CXX || "c++", [...args, "-DMODERN_ONLY", "-o", modernOnly]);
  // Exercise the packaged adapter with a CommonJS dispatcher like the real
  // binary package, independent of optional packages installed on the host.
  await cp(path.join(root, "dist"), path.join(publicPackage, "dist"), {
    recursive: true
  });
  const dispatcher = path.join(publicPackage, "node_modules/@tdlib-native/tdjson");
  await mkdir(dispatcher, { recursive: true });
  await writeFile(
    path.join(dispatcher, "index.js"),
    'module.exports = require("./platform.cjs");\n'
  );
  await writeFile(
    path.join(dispatcher, "platform.cjs"),
    `module.exports = { tdlibPath: ${JSON.stringify(library)} };\n`
  );
});

// TDLib owns process-wide state, so every scenario needs a fresh process.
// Execute files directly so test bodies remain ordinary, debuggable JavaScript.
const cases = require("./native-addon-cases.cjs");
for (const name of Object.keys(cases)) {
  test(name, async () => {
    const { stdout } = await exec(
      process.execPath,
      ["--expose-gc", path.join(__dirname, "native-addon-cases.cjs"), name],
      { timeout: 10000 }
    );
    assert.match(stdout, /PASS/);
  });
}
