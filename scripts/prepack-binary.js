// @ts-check
/* eslint-disable unicorn/prefer-module, unicorn/import-style */
const { writeFile, copyFile, mkdir } = require("fs/promises");
const { resolve } = require("path");
const { packageJson, downloader, packagePath, builds } = require("./lib");

const prettier = require("prettier");
const prettierConfig = require("../.prettierrc.json");

/**
 * @param {string} path
 * @param {string} code
 * @param {prettier.Options} overrides
 * @returns
 */
async function writeFormatted(path, code, overrides = {}) {
  // @ts-expect-error prettierConfig from json is incompatible with .format() types
  code = await prettier.format(code, {
    ...prettierConfig,
    filepath: path,
    ...overrides
  });

  await writeFile(path, code, "utf-8");
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

(async function main() {
  const meta = await getMeta();

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

    tdlib: { version: meta.version, commit: meta["commit-hash"] }
  };

  const optionalDependencies = {};

  for (const { os, cpu, file, libc } of builds) {
    const name = `tdjson-${os}-${cpu}${libc ? `-${libc}` : ""}`;
    const packageJson = {
      name: `@tdlib-native/${name}`,
      ...basePackageJson,
      repository: { ...basePackageJson.repository, directory: `packages/${name}` },
      description: `Prebuilt TDLib for ${os} ${cpu}`,
      keywords: ["tdlib", "binary", os, cpu],
      os: [os],
      cpu: [cpu],
      libc: libc ? [libc] : undefined,
      main: "./index.js",

      module: "./index.mjs",
      types: "./index.d.ts",
      files: [
        "index.js",
        "index.mjs",
        "index.d.ts",
        file,
        "README.md",
        "LICENSE.txt"
      ]
    };

    const directory = resolve(__dirname, "../packages", name);

    await mkdir(directory, { recursive: true });

    const url = downloader.resolve(file);

    const { cjs, esm, types } = generateExports({
      tdlibPath: {
        esm: `fileURLToPath(new URL("${file}", import.meta.url))`,
        cjs: `require('path').resolve(__dirname, "${file}")`,
        type: "string"
      },
      version: meta.version,
      commit: meta["commit-hash"]
    });

    await Promise.all([
      writeFormatted(
        `${directory}/package.json`,
        JSON.stringify(packageJson, undefined, 2)
      ),
      writeFile(
        `${directory}/README.md`,
        generateReadme({
          version: meta.version,
          commit: meta["commit-hash"],
          cpu,
          libc,
          name,
          os
        })
      ),
      copyFile("./LICENSE.txt", `${directory}/LICENSE.txt`),
      writeFormatted(`${directory}/index.js`, cjs),
      writeFormatted(
        `${directory}/index.mjs`,
        'import { fileURLToPath } from "url";\n\n' + esm
      ),
      writeFormatted(`${directory}/index.d.ts`, types),
      writeFile(`${directory}/.gitignore`, `${file}`, "ascii"),
      writeFile(`${directory}/download.sh`, `wget -O ${file} ${url}`)
    ]);

    optionalDependencies[packageJson.name] = packageJson.version;
  }

  /**
   *
   * @param {{ version: string; commit: string; description?: string; os?: NodeJS.Platform; cpu?: NodeJS.Architecture;  libc?: 'glibc' | 'musl'; name: string; }} param0
   * @returns {string}
   */
  function generateReadme({ version, commit, os, cpu, libc, name, description }) {
    /**
     * @type {Map<string, string>}
     */
    const entires = new Map();

    if (os) {
      entires.set("Platform", platformNames.get(os) ?? `\`${os}\``);
    }

    if (cpu) {
      entires.set("Cpu Arch", archNames.get(cpu) ?? `\`${cpu}\``);
    }

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

> ${description || `Prebuilt TDLib for ${os} ${cpu}`}

**This package is part of [tdlib-native](https://github.com/AlexXanderGrib/node-tdlib) - library that provides TDLib interface in TypeScript**

${[...entires].map(([key, value]) => `- ${key}: ${value}`).join("\n")}
`;
  }

  const prebuiltLoader = await (async () => {
    const name = "tdjson";
    const directory = resolve(__dirname, "../packages", name);
    await mkdir(directory, { recursive: true });

    const packageJson = {
      name: `@tdlib-native/${name}`,
      ...basePackageJson,
      repository: { ...basePackageJson.repository, directory: `packages/${name}` },
      description: `Prebuilt TDLib that downloads version for current os`,
      keywords: ["tdlib", "binary"],
      main: "./index.js",
      module: "./index.mjs",
      types: "./index.d.ts",
      files: ["index.js", "index.mjs", "index.d.ts", "README.md", "LICENSE.txt"],
      dependencies: {
        "detect-libc": "^2.0.4"
      },
      optionalDependencies
    };

    const detectionCode = `(function requirePlatformTdlib() {
${builds
  .map((build, index) => {
    const name = `tdjson-${build.os}-${build.cpu}${build.libc ? `-${build.libc}` : ""}`;

    let condition = `process.platform === "${build.os}" && process.arch === "${build.cpu}"`;

    if (build.os === "android" && build.libc === "glibc") {
      condition += `&& (libc === "${build.libc}" || libc === null || libc === undefined)`;

    } else if (build.libc) {
      condition += `&& libc === "${build.libc}"`;
    }

    const statement = index === 0 ? "if" : "else if";

    return `${statement} (${condition}) { return require("@tdlib-native/${name}"); }`;
  })
  .join("\n")} else {
    let sysInfo = process.platform + " " + process.arch;

    if (libc) {
      sysInfo += " " + libc;
    }
    
    throw new Error(
      "Your system (" + sysInfo + ") is not supported yet. You can ask for support here: https://github.com/AlexXanderGrib/node-tdlib/issues"
    ); }
})()`;

    await Promise.all([
      writeFormatted(
        `${directory}/package.json`,
        JSON.stringify(packageJson, undefined, 2)
      ),

      copyFile("./LICENSE.txt", `${directory}/LICENSE.txt`),
      writeFile(
        `${directory}/README.md`,
        generateReadme({
          version: meta.version,
          commit: meta["commit-hash"],
          name,
          description: packageJson.description
        }) +
          `\n\n## Optional Dependencies
One of this packages will be automatically installed based on your platform. Installed version is exactly pinned

${Object.entries(optionalDependencies)
  .map(
    ([name, version]) =>
      `- [${name}](https://www.npmjs.com/package/${name}/v/${version})`
  )
  .join("\n")}`
      ),
      writeFormatted(
        `${directory}/index.js`,
        `const { familySync } = require("detect-libc");
const libc = familySync();
module.exports = ${detectionCode};`
      ),
      writeFormatted(
        `${directory}/index.mjs`,
        `import { createRequire } from "module";
import { familySync } from "detect-libc";
const require = createRequire();
const libc = familySync();
const forwarded = ${detectionCode};
export const { tdlibPath, version, commit } = forwarded;

`
      ),
      writeFormatted(
        `${directory}/index.d.ts`,
        `
/**
 * @type {string}
 */
export const tdlibPath: string;
/**
 * @type {string}
 */
export const version: string;
/**
 * @type {string}
 */
export const commit: string;
`
      )
    ]);

    return packageJson;
  })();

  (packageJson.optionalDependencies ??= {})[prebuiltLoader.name] = prebuiltLoader.version;
  await writeFormatted(packagePath, JSON.stringify(packageJson, undefined, 2));
})();

/**
 * @return {Promise<{ version: string; "commit-hash": string }>}
 */
async function getMeta() {
  const buffer = await downloader.get("meta.yml");
  const text = buffer.toString("utf-8");
  /**
   * @type {*}
   */
  const meta = {};

  for (const line of text.split("\n")) {
    const [key, ...value] = line.split(":");
    meta[key] = value.join(":").trim();
  }

  return meta;
}

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
