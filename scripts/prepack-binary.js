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
  const [prebuiltPackage] = await Promise.all([
    generatePrebuilt()
    // generateAddon()
  ]);

  const deps = (packageJson.optionalDependencies ??= {});

  deps[prebuiltPackage.name] = prebuiltPackage.version;
  // deps[addonPackage.name] = addonPackage.version;

  await writeFormatted(packagePath, JSON.stringify(packageJson, undefined, 2));
})();

// async function generateAddon() {
//   const version = await readFile("./addon/version.txt", "utf-8");

//   const basePackageJson = {
//     version: `0.${version}`,
//     description: "Built TDLib Addon",
//     keywords: ["tdlib", "addon"],

//     author: packageJson.author,
//     license: packageJson.license,
//     bugs: packageJson.bugs,
//     homepage: packageJson.homepage,
//     publishConfig: packageJson.publishConfig,
//     repository: packageJson.repository,
//     engines: packageJson.engines
//   };

//   const types = await readFile("./addon/addon.d.ts", "utf-8");
//   const optionalDependencies = {};

//   for (const build of builds) {
//     const name = build.addonPackageName;
//     const packageJson = {
//       name: `@tdlib-native/${name}`,
//       ...basePackageJson,
//       repository: { ...basePackageJson.repository, directory: `packages/${name}` },
//       description: `TDLib Node Addon for ${build.os} ${build.cpu}`,
//       keywords: ["tdlib", "node", "addon", build.os, build.cpu],
//       ...build.getPackageFields(),
//       main: "./index.js",

//       module: "./index.mjs",
//       types: "./index.d.ts",
//       files: ["index.js", "index.mjs", build.addonName, "README.md", "LICENSE.txt"]
//     };

//     const directory = resolve(__dirname, "../packages", name);

//     await mkdir(directory, { recursive: true });

//     await Promise.all([
//       writeFormatted(
//         `${directory}/package.json`,
//         JSON.stringify(packageJson, undefined, 2)
//       ),
//       writeFile(`${directory}/README.md`, ``),
//       copyFile("./LICENSE.txt", `${directory}/LICENSE.txt`),
//       writeFormatted(
//         `${directory}/index.js`,
//         `const addon = require('./${build.addonName}');\n module.exports.addon = addon;`
//       ),
//       writeFormatted(
//         `${directory}/index.mjs`,
//         `import { createRequire } from "module"; const require = createRequire(); export const addon = require('./${build.addonName}');`
//       ),

//       writeFile(`${directory}/.gitignore`, `${build.addonName}`, "ascii")
//     ]);

//     optionalDependencies[packageJson.name] = packageJson.version;
//   }

//   const name = "addon";
//   const directory = resolve(__dirname, "../packages", name);
//   await mkdir(directory, { recursive: true });

//   const prebuiltPackageJson = {
//     name: `@tdlib-native/${name}`,
//     ...basePackageJson,
//     repository: { ...basePackageJson.repository, directory: `packages/${name}` },
//     description: `Tdlib Addon`,
//     keywords: ["tdlib", "addon"],
//     main: "./index.js",
//     module: "./index.mjs",
//     types: "./index.d.ts",
//     files: ["index.js", "index.mjs", "index.d.ts", "README.md", "LICENSE.txt"],
//     dependencies: {
//       "detect-libc": "^2.0.4"
//     },
//     optionalDependencies
//   };

//   const detectionCode = `(function requirePlatformAddon() {
//   const {arch, platform} = process;
// ${builds
//   .map((build, index) => {
//     const statement = index === 0 ? "if" : "else if";
//     return `${statement} (${build.getJsCondition()}) { return require("@tdlib-native/${build.addonPackageName}"); }`;
//   })
//   .join("\n")} else {
//     let sysInfo = platform + " " + arch;

//     if (libc) {
//       sysInfo += " " + libc;
//     }
    
//     throw new Error(
//       "Your system (" + sysInfo + ") is not supported yet. You can ask for support here: https://github.com/AlexXanderGrib/node-tdlib/issues"
//     ); }
// })()`;

//   await Promise.all([
//     writeFormatted(
//       `${directory}/package.json`,
//       JSON.stringify(prebuiltPackageJson, undefined, 2)
//     ),

//     copyFile("./LICENSE.txt", `${directory}/LICENSE.txt`),
//     writeFile(
//       `${directory}/README.md`,
//       `\n\n## Optional Dependencies
// One of this packages will be automatically installed based on your platform. Installed version is exactly pinned

// ${Object.entries(optionalDependencies)
//   .map(
//     ([name, version]) =>
//       `- [${name}](https://www.npmjs.com/package/${name}/v/${version})`
//   )
//   .join("\n")}`
//     ),
//     writeFormatted(
//       `${directory}/index.js`,
//       `const { familySync } = require("detect-libc");
// const libc = familySync();
// module.exports = ${detectionCode};`
//     ),
//     writeFormatted(
//       `${directory}/index.mjs`,
//       `import { createRequire } from "module";
// import { familySync } from "detect-libc";
// const require = createRequire();
// const libc = familySync();
// const forwarded = ${detectionCode};
// export const { tdlibPath, version, commit } = forwarded;

// `
//     ),
//     writeFormatted(`${directory}/index.d.ts`, types)
//   ]);

//   return prebuiltPackageJson;
// }

async function generatePrebuilt() {
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

  for (const build of builds) {
    const name = build.tdlibPackageName;
    const packageJson = {
      name: `@tdlib-native/${name}`,
      ...basePackageJson,
      repository: { ...basePackageJson.repository, directory: `packages/${name}` },
      description: `Prebuilt TDLib for ${build.os} ${build.cpu}`,
      keywords: ["tdlib", "binary", build.os, build.cpu],
      ...build.getPackageFields(),
      main: "./index.js",

      module: "./index.mjs",
      types: "./index.d.ts",
      files: [
        "index.js",
        "index.mjs",
        "index.d.ts",
        build.tdlib,
        "README.md",
        "LICENSE.txt"
      ]
    };

    const directory = resolve(__dirname, "../packages", name);

    await mkdir(directory, { recursive: true });

    const { cjs, esm, types } = generateExports({
      tdlibPath: {
        esm: `fileURLToPath(new URL("${build.tdlib}", import.meta.url))`,
        cjs: `require('path').resolve(__dirname, "${build.tdlib}")`,
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
          cpu: build.cpu,
          libc: build.libc,
          name,
          os: build.os
        })
      ),
      copyFile("./LICENSE.txt", `${directory}/LICENSE.txt`),
      writeFormatted(`${directory}/index.js`, cjs),
      writeFormatted(
        `${directory}/index.mjs`,
        'import { fileURLToPath } from "url";\n\n' + esm
      ),
      writeFormatted(`${directory}/index.d.ts`, types),
      writeFile(`${directory}/.gitignore`, `${build.tdlib}`, "ascii")
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

  const name = "tdjson";
  const directory = resolve(__dirname, "../packages", name);
  await mkdir(directory, { recursive: true });

  const prebuiltPackageJson = {
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
  const {arch, platform} = process;

${builds
  .map((build, index) => {
    const statement = index === 0 ? "if" : "else if";

    return `${statement} (${build.getJsCondition()}) { return require("@tdlib-native/${build.tdlibPackageName}"); }`;
  })
  .join("\n")} else {
    let sysInfo = platform + " " + arch;

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
      JSON.stringify(prebuiltPackageJson, undefined, 2)
    ),

    copyFile("./LICENSE.txt", `${directory}/LICENSE.txt`),
    writeFile(
      `${directory}/README.md`,
      generateReadme({
        version: meta.version,
        commit: meta["commit-hash"],
        name,
        description: prebuiltPackageJson.description
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

  return prebuiltPackageJson;
}

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
