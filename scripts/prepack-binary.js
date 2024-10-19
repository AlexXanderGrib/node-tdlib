// @ts-check
/* eslint-disable unicorn/prefer-module, unicorn/import-style */
const { readFileSync, writeFileSync, mkdirSync, renameSync } = require("fs");
const { resolve } = require("path");

const text = readFileSync(resolve(__dirname, "../td/meta.yml"), "utf-8");
const meta = {};

for (const line of text.split("\n")) {
  const [key, ...value] = line.split(":");
  meta[key] = value.join(":").trim();
}

const packagePath = resolve(__dirname, "../package.json");
const packageJson = JSON.parse(readFileSync(packagePath, "utf-8"));

const basePackageJson = {
  version: `${meta.version}-commit.${meta["commit-hash"]}`,
  description: "Built TDLib",
  keywords: ["tdlib", "binary"],

  author: packageJson.author,
  license: packageJson.license,
  bugs: packageJson.bugs,
  homepage: packageJson.homepage,
  publishConfig: packageJson.publishConfig,
  repository: packageJson.repository,
  engines: packageJson.engines,

  tdlib: {
    version: meta.version,
    commit: meta["commit-hash"]
  }
};

/**
 * @type {{ os: NodeJS.Platform; cpu: NodeJS.Architecture; file: string; libc?: "glibc" | "musl" }[]}
 */
const builds = [
  { os: "darwin", cpu: "x64", file: "libtdjson-x64.dylib" },
  { os: "darwin", cpu: "arm64", file: "libtdjson-arm64.dylib" },
  { os: "linux", cpu: "x64", file: "libtdjson-x64-glibc.so", libc: "glibc" },
  { os: "linux", cpu: "arm64", file: "libtdjson-arm64-glibc.so", libc: "glibc" },
  { os: "linux", cpu: "x64", file: "libtdjson-x64-musl.so", libc: "musl" },
  { os: "linux", cpu: "arm64", file: "libtdjson-arm64-musl.so", libc: "musl" },
  { os: "win32", cpu: "x64", file: "tdjson-x64.dll" },
  { os: "win32", cpu: "ia32", file: "tdjson-x32.dll" }
];

const optionalDependencies = {};

/**
 *
 * @param {Record<string, string | { esm: string; cjs: string; type: string }>} exports
 */
function generateExports(exports) {
  let cjs = "";
  let esm = "";
  let types = "";

  for (const [name, value] of Object.entries(exports)) {
    if (typeof value === "string") {
      const stringified = JSON.stringify(value);
      const type = typeof stringified;
      const jsdoc = `/**
 * @type {${type}}
 * @default ${stringified}
 */\n`;

      cjs += `${jsdoc}module.exports.${name} = ${stringified};\n`;
      esm += `${jsdoc}export const ${name} = ${stringified};\n`;
      types += `${jsdoc}export const ${name}: ${type};\n`;
    } else {
      const jsdoc = `/**
 * @type {${value.type}}
 */\n`;

      cjs += `${jsdoc}module.exports.${name} = ${value.cjs};\n`;
      esm += `${jsdoc}export const ${name} = ${value.esm};\n`;
      types += `${jsdoc}export const ${name}: ${value.type};\n`;
    }
  }

  return { cjs, esm, types };
}

for (const { os, cpu, file, libc } of builds) {
  const name = `tdjson-${os}-${cpu}${libc ? `-${libc}` : ""}`;
  const packageJson = {
    name: `@tdlib-native/${name}`,

    ...basePackageJson,
    os: [os],
    cpu: [cpu],
    libc: libc ? [libc] : undefined,
    main: "./index.js",
    module: "./index.mjs",
    types: "./index.d.ts",
    files: ["index.js", "index.mjs", "index.d.ts", file]
  };

  const directory = resolve(__dirname, "../packages", name);
  const source = resolve(__dirname, "../td", file);

  mkdirSync(directory, { recursive: true });

  try {
    renameSync(source, `${directory}/${file}`);
  } catch {
    console.warn("Unable to copy built tdlib:", source, "Skipping platform");
    continue;
  }

  writeFileSync(
    `${directory}/package.json`,
    JSON.stringify(packageJson, undefined, 2),
    {
      encoding: "utf8"
    }
  );

  const { cjs, esm, types } = generateExports({
    tdlibPath: {
      esm: `new URL("${file}", import.meta.url).pathname`,
      cjs: `require('path').resolve(__dirname, "${file}")`,
      type: "string"
    },
    version: meta.version,
    commit: meta["commit-hash"]
  });

  writeFileSync(`${directory}/index.js`, cjs);
  writeFileSync(`${directory}/index.mjs`, esm);
  writeFileSync(`${directory}/index.d.ts`, types);

  optionalDependencies[packageJson.name] = packageJson.version;
}

Object.assign(packageJson, { optionalDependencies });

writeFileSync(packagePath, JSON.stringify(packageJson, undefined, 2), "utf8");
