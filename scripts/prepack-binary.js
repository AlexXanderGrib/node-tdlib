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
  version: `${meta.version}-commit.${meta['commit-hash']}`,
  description: "Built TDLib",
  keywords: ["tdlib", "binary"],

  author: packageJson.author,
  license: packageJson.license,
  bugs: packageJson.bugs,
  homepage: packageJson.homepage,
  publishConfig: packageJson.publishConfig,
  repository: packageJson.repository,
  engines: packageJson.engines
};

const builds = [
  { os: "darwin", cpu: "x64", file: "libtdjson-x64.dylib" },
  { os: "darwin", cpu: "arm64", file: "libtdjson-arm64.dylib" },
  { os: "linux", cpu: "x64", file: "libtdjson-x64-glibc.so", libc: "glibc" },
  { os: "linux", cpu: "arm64", file: "libtdjson-arm64-glibc.so", libc: "glibc" },
  { os: "win32", cpu: "x64", file: "tdjson-x64.dll" },
  { os: "win32", cpu: "x32", file: "tdjson-x32.dll" }
];

const exportName = "tdlibPath";

const optionalDependencies = {};

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

  mkdirSync(directory, { recursive: true });
  writeFileSync(`${directory}/package.json`, JSON.stringify(packageJson, null, 2), {
    encoding: "utf-8"
  });

  writeFileSync(
    `${directory}/index.js`,
    `module.exports.${exportName} = require('path').resolve(__dirname, "${file}");\n`
  );

  writeFileSync(
    `${directory}/index.mjs`,
    `export const ${exportName} = new URL("${file}", import.meta.url).pathname;\n`
  );

  writeFileSync(
    `${directory}/index.d.ts`,
    `export declare const tdlibPath: string;\n`
  );

  const source = resolve(__dirname, "../td", file);
  copyFileSync(source, `${directory}/${file}`);

  optionalDependencies[packageJson.name] = packageJson.version;
}

Object.assign(packageJson, { optionalDependencies });

writeFileSync(packagePath, JSON.stringify(packageJson, null, 2), "utf-8");
