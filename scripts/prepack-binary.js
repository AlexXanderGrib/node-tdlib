// @ts-check
/* eslint-disable unicorn/prefer-module, unicorn/import-style */
const { readFileSync, writeFileSync, mkdirSync, copyFileSync } = require("fs");
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
  { os: "android", cpu: "arm64", file: "libtdjson-arm64-glibc.so", libc: "glibc" },
  { os: "android", cpu: "arm64", file: "libtdjson-arm64-musl.so", libc: "musl" },
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

/**
 * @type {Map<NodeJS.Platform, string>}
 */
const platformNames = new Map([
  ["linux", "Linux"],
  ["android", "Android (Linux compatible)"],
  ["win32", "Windows"],
  ["darwin", "macOS (darwin)"]
]);

/**
 * @type {Map<NodeJS.Architecture, string>}
 */
const archNames = new Map([
  ["arm64", "ARM64 (also known as: aarch64)"],
  ["ia32", "x32 (also known as: ia32, i386, i686)"],
  ["x64", "x64 (also known as: x86_64, AMD64)"]
]);

for (const { os, cpu, file, libc } of builds) {
  const name = `tdjson-${os}-${cpu}${libc ? `-${libc}` : ""}`;
  const packageJson = {
    name: `@tdlib-native/${name}`,
    ...basePackageJson,
    repository: {
      ...basePackageJson.repository,
      directory: `packages/${name}`
    },
    description: `Prebuilt TDLib for ${os} ${cpu}`,
    keywords: ["tdlib", "binary", os, cpu],
    os: [os],
    cpu: [cpu],
    libc: libc ? [libc] : undefined,
    main: "./index.js",

    module: "./index.mjs",
    types: "./index.d.ts",
    files: ["index.js", "index.mjs", "index.d.ts", file, "README.md", "LICENSE.txt"]
  };

  const directory = resolve(__dirname, "../packages", name);
  const source = resolve(__dirname, "../td", file);

  mkdirSync(directory, { recursive: true });

  if (!process.env.DO_NOT_MOVE) {
    try {
      copyFileSync(source, `${directory}/${file}`);
    } catch {
      console.warn("Unable to copy built tdlib:", source, "Skipping platform");
      continue;
    }
  }

  writeFileSync(
    `${directory}/package.json`,
    JSON.stringify(packageJson, undefined, 2),
    {
      encoding: "utf8"
    }
  );

  writeFileSync(
    `${directory}/README.md`,
    generateReadme({
      version: meta.version,
      commit: meta["commit-hash"],
      cpu,
      libc,
      name,
      os
    })
  );

  copyFileSync("./LICENSE.txt", `${directory}/LICENSE.txt`);

  const { cjs, esm, types } = generateExports({
    tdlibPath: {
      esm: `fileURLToPath(new URL("${file}", import.meta.url))`,
      cjs: `require('path').resolve(__dirname, "${file}")`,
      type: "string"
    },
    version: meta.version,
    commit: meta["commit-hash"]
  });

  writeFileSync(`${directory}/index.js`, cjs);
  writeFileSync(
    `${directory}/index.mjs`,
    'import { fileURLToPath } from "url";\n\n' + esm
  );
  writeFileSync(`${directory}/index.d.ts`, types);

  optionalDependencies[packageJson.name] = packageJson.version;
}
function generateReadme({ version, commit, os, cpu, libc, name }) {
  /**
   * @type {Map<string, string>}
   */
  const entires = new Map();
  entires.set("Platform", platformNames.get(os) ?? `\`${os}\``);
  entires.set("Cpu Arch", archNames.get(cpu) ?? `\`${cpu}\``);

  switch (libc) {
    case "glibc": {
      entires.set("Lib C", "GNU Lib C (`glibc`)");
      break;
    }

    case "musl": {
      entires.set("Lib C", "musl libc");
      break;
    }

    // eslint-disable-next-line unicorn/no-null
    case null:
    case undefined: {
      break;
    }

    default: {
      entires.set("Lib C", String(libc));
    }
  }

  entires.set(
    "TDLib Version",
    `[${version} \`${commit.slice(0, 7)}\`](https://github.com/tdlib/td/tree/${commit})`
  );
  entires.set(
    "TDLib License",
    "[Boost Software License 1.0](https://github.com/tdlib/td/blob/master/LICENSE_1_0.txt)"
  );
  entires.set("Package License", basePackageJson.license);

  return `# @tdlib-native/${name}

> Prebuilt TDLib for ${os} ${cpu}

**This package is part of [tdlib-native](https://github.com/AlexXanderGrib/node-tdlib) - library that provides TDLib interface in TypeScript**

${[...entires].map(([key, value]) => `- ${key}: ${value}`).join("\n")}
`;
}

Object.assign(packageJson, { optionalDependencies });

writeFileSync(packagePath, JSON.stringify(packageJson, undefined, 2), "utf8");
