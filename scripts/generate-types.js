// @ts-check
const { writeFile, readFile } = require("fs/promises");
const { resolve } = require("path");
const prettier = require("prettier");
const prettierConfig = require("../.prettierrc.json");

const primitiveComments = {
  bytes: "(string) of bytes in Base64",
  bytes$Input: "String in Base64 or Uint8Array. Will be converted to Base64",

  int64: "(string) of digits. Use BigInt for handling this",
  int64$Input: "String or BigInt. Will be converted to String",

  int53:
    "(float64) Integer number ranging from Number.MIN_SAFE_INTEGER to Number.MAX_SAFE_INTEGER",

  int32: "(int32) Integer number ranging from -2147483648 to 2147483647",
  double: "(float64)"
};

const primitives = {
  vector: false,
  "vector$Input<T>": "ReadonlyArray<T>",
  "vector<T>": "Array<T>",
  boolFalse: "false",
  boolTrue: "true",
  int64$Input: "string | bigint",
  int64: "string",
  int32: "number",
  int53: "number",
  double: "number",
  string: false,
  bytes$Input: "string | Uint8Array",
  bytes: "string"
};

const typeType = "_";

/**
 * @typedef {{
 *  namespace?: string;
 *  name: string;
 *  id?: number;
 *  body: Record<string, string>;
 *  result: string;
 *  comments: Record<string, string>
 * }} Declaration
 */

const bodyRegex = /((?<key>\w+):(?<value>\S+))/g;
const letter = /^\w/;

/**
 *
 *
 * @param {string} declarationWithCommends
 * @returns {Declaration|undefined}
 */
function parseTd(declarationWithCommends) {
  const mainRegex =
    /^((?<namespace>\w+?)\.)?((?<name>\w+?)(#(?<id>[\da-f]{1,13}))?)(\s(?<body>.*))?\s*=\s*(?<result>.*);$/g;

  /**
   * @type {Declaration}
   */
  const parsed = {};

  let expression = "";
  const commentStart = "//";
  const tagStart = "@";
  const comments = [];

  for (const line of declarationWithCommends.split("\n")) {
    if (line.startsWith(commentStart)) {
      comments.push(line.slice(commentStart.length));
    } else {
      expression = line;
      break;
    }
  }

  parsed.comments = {};

  for (const line of comments.join("\n").split(tagStart).slice(1)) {
    const space = line.indexOf(" ");
    if (space === -1) continue;

    const tag = line.slice(0, space);
    const description = line.slice(space);

    parsed.comments[tag] = description.trim();
  }

  const match = mainRegex.exec(expression);

  if (!match) return;

  parsed.name = match.groups?.name ?? "";
  parsed.result = match.groups?.result ?? "";

  if (match.groups?.id) parsed.id = Number.parseInt(match.groups.id, 16);
  if (match.groups?.namespace) parsed.namespace = match.groups.namespace;

  parsed.body = {};

  if (match.groups?.body) {
    const text = match.groups.body;
    let pair = bodyRegex.exec(text);

    while (pair !== null) {
      // @ts-expect-error groups are always defined
      parsed.body[pair.groups.key] = pair.groups.value;
      pair = bodyRegex.exec(text);
    }
  }

  return parsed;
}

class Namespace {
  /** @type {Declaration[]} */
  declarations = [];

  /** @type {Record<string, Set<string>>} */
  joins = {};

  /** @type {string[]} */
  types = [];

  /** @type {Record<string, string>} */
  functions = {};

  /** @type {Set<string>} */
  syncFunctions = new Set();
}

/**
 *
 *
 * @param {string} comment
 * @returns {string}
 */
function splitComments(comment) {
  return comment.replaceAll('\n', "\n * \n * ").replaceAll('* -', "* - ");
}

/**
 *
 *
 * @param {string} typename
 * @returns {string}
 */
function getInputAlias(typename) {
  const genericIndex = typename.indexOf("<");

  if (genericIndex !== -1) {
    const name = typename.slice(0, genericIndex);
    // +-1 = stripping < >;
    const generic = typename.slice(genericIndex + 1, - 1);

    return `${name}$Input<${getInputAlias(generic)}>`;
  }

  const inputName = `${typename}$Input`;
  if (typename in primitives && !(inputName in primitives)) {
    return String(typename);
  }

  return inputName;
}

/**
 *
 *
 * @param {Declaration} declaration
 */
function generateFunction(declaration) {
  const text = `
/**
 * ${splitComments(declaration.comments?.description ?? "")}
 */
export type ${getInputAlias(declaration.name)} = {
  readonly ${typeType}: "${declaration.name}";

  ${Object.entries(declaration.body)
    .map(
      ([key, value]) => `
    /**
     * ${splitComments(declaration.comments?.[key] ?? "")}
     * @type {${getInputAlias(value)}} {@link ${value}}
     */
    readonly ${key}?: ${getInputAlias(value)}${
      allowsNull(declaration.comments?.[key]) ? "| null" : ""
    };
  `
    )
    .join("\n")}
};

/**
 * ${splitComments(declaration.comments?.description ?? "")}
 */
export type ${getInputAlias(declaration.name).replace("$Input", "$DirectInput")} = {
  ${Object.entries(declaration.body)
    .map(
      ([key, value]) => `
    /**
     * ${splitComments(declaration.comments?.[key] ?? "")}
     * @type {${getInputAlias(value)}} {@link ${value}}
     */
    readonly ${key}?: ${getInputAlias(value)}${
      allowsNull(declaration.comments?.[key]) ? "| null" : ""
    };
  `
    )
    .join("\n")}
};

/**
 * ${splitComments(declaration.comments?.description ?? "")}
 * 
 * @param {${getInputAlias(declaration.name)}} parameters {@link ${getInputAlias(
   declaration.name
 )}}
 * @returns {${declaration.result}} {@link ${declaration.result}}
 */
export type ${declaration.name} = (parameters: ${getInputAlias(
    declaration.name
  )}) => ${declaration.result};
  `;

  return text;
}

/**
 *
 * @param {string | undefined} comment
 * @returns {boolean}
 */
function allowsNull(comment) {
  if (!comment) return false;

  return comment.includes("may be null") || comment.includes("pass null");
}

/**
 *
 *
 * @param {Declaration} declaration
 */
function generateType(declaration) {
  return `
/**
 * ${splitComments(declaration.comments?.description ?? "")}
 */
export type ${declaration.name} = {
    ${typeType}: "${declaration.name}";
    
    ${Object.entries(declaration.body)
      .map(
        ([key, value]) => `
      /**
       * ${splitComments(declaration.comments?.[key] ?? "")}
       * @type {${value}} {@link ${value}}
       */
      ${key}: ${value}${allowsNull(declaration.comments?.[key]) ? "| null" : ""}
    `
      )
      .join("\n")}
  }
  

/**
 * Version of {@link ${declaration.name}} for method parameters.
 * 
 * ${splitComments(declaration.comments?.description ?? "")}
 */
export type ${getInputAlias(declaration.name)} = {
  readonly ${typeType}: "${declaration.name}";
  
  ${Object.entries(declaration.body)
    .map(
      ([key, value]) => `
    /**
     * ${splitComments(declaration.comments?.[key] ?? "")}
     * @type {${value}} {@link ${value}}
     */
    readonly ${key}?: ${getInputAlias(value)} ${
      allowsNull(declaration.comments?.[key]) ? "| null" : ""
    }
  `
    )
    .join("\n")}
}`;
}

/**
 *
 * @param {string} name
 * @param {Record<string, string>|Array<[string, string]>} values
 */
function createEnum(name, values) {
  const entries = Array.isArray(values) ? values : Object.entries(values);

  return `export const ${name} = Object.freeze({
    ${entries.map(([key, value]) => `${key}: "${value}"`)}
  } as const);
  
  export type ${name} = (typeof ${name})[keyof typeof ${name}]`;
}

/**
 *
 *
 * @param {string} text
 * @returns {Declaration[]}
 */
function parse(text) {
  const lines = text.split("\n");
  const results = [];
  const group = [];

  for (let [index, line] of lines.entries()) {
    if (letter.test(line)) {
      group.push(line);

      let previous = lines[--index];
      while (previous && previous.startsWith("//")) {
        group.push(previous);
        previous = lines[--index];
      }

      const text = group.splice(0, group.length).reverse().join("\n");
      const result = parseTd(text);

      if (result) results.push(result);
    }
  }

  return results;
}

/**
 *
 *
 * @param {string[]} strings
 * @returns {string}
 */
function getCommonStart(strings) {
  let commonStart = "";

  for (const [index, string] of strings.entries()) {
    if (index === 0) {
      commonStart = string;
      continue;
    }

    if (string.startsWith(commonStart)) continue;

    for (let index_ = 0; index_ < commonStart.length; index_++) {
      if (commonStart[index_] === string[index_]) continue;

      commonStart = commonStart.slice(0, index_);
      break;
    }
  }

  return commonStart;
}

/**
 *
 * @param {string} text
 */
async function convert(text) {
  const [typesText, functionsText] = text.split("---functions---");
  const globalNamespace = "__global";

  /** @type {Record<string, Namespace>} */
  const namespaces = {};

  const types = parse(typesText);
  for (const declaration of types) {
    const namespace = declaration.namespace ?? globalNamespace;
    const reference = (namespaces[namespace] ??= new Namespace());
    reference.declarations.push(declaration);

    if (!declaration.result.includes(" ")) {
      const set = (reference.joins[declaration.result] ??= new Set());
      set.add(declaration.name);
    }

    if (!(declaration.name in primitives)) {
      reference.types.push(generateType(declaration));
    }
  }

  for (const reference of Object.values(namespaces)) {
    for (const [key, set] of Object.entries(reference.joins)) {
      const types = [...set];
      const inputs = types.map((type) => getInputAlias(type));
      const generateEnum = types.length > 1;

      if (generateEnum) {
        const enumName = key + "$Type";
        const commonStart = getCommonStart(types);

        const entries = types.map((type) => {
          let keyName = type.slice(commonStart.length);
          if (keyName.length < 2) keyName = type[0].toUpperCase() + type.slice(1);

          /** @type {[string, string]} */
          const result = [keyName, type];

          return result;
        });

        reference.types.unshift(createEnum(enumName, entries));
      }

      reference.types.push(`  
  /**
   * Any of:
  ${types.map((type) => ` * - {@link ${type}}`).join("\n")}
   */
  export type ${key} = ${types.join(" | ")}
  
  /**
   * Version of {@link ${key}} for method parameters.
   * Any of:
  ${inputs.map((type) => ` * - {@link ${type}}`).join("\n")}
   */
  export type ${getInputAlias(key)} = ${inputs.join(" | ")}
    `);
    }
  }

  const functions = parse(functionsText);

  for (const declaration of functions) {
    const namespace = declaration.namespace ?? globalNamespace;

    const reference = (namespaces[namespace] ??= new Namespace());
    reference.declarations.push(declaration);

    const code = generateFunction(declaration);
    reference.functions[declaration.name] = code;

    if (code.includes("Can be called synchronously")) {
      reference.syncFunctions.add(declaration.name);
    }
  }

  /**
   * @param {string} name
   * @param {Namespace} reference
   */
  function getMethodType(name, reference) {
    const declaration = reference.declarations.find(
      (declaration) => declaration.name === name
    );

    return {
      input: getInputAlias(name),
      result: declaration?.result,
      comment: declaration?.comments.description
    };
  }

  for (const reference of Object.values(namespaces)) {
    reference.types.unshift(
      createEnum(
        "$Methods",
        Object.keys(reference.functions).map((name) => {
          /**
           * @type {[string, string]}
           */
          const result = [name, name];
          return result;
        })
      )
    );

    reference.types.push(`export type $MethodsDict = {
      ${Object.keys(reference.functions)
        .map((name) => `readonly ${name}: ${name};`)
        .join("\n")}
    }`);

    reference.types.push(`export type $SyncMethodsDict = {
      ${Object.keys(reference.functions)
        .filter((name) => reference.syncFunctions.has(name))
        .map((name) => `readonly ${name}: ${name};`)
        .join("\n")}
    }`);

    reference.types.push(`
    
    /** 
     * Convenience class for API calls
     * 
     * @class 
     */
    export class $AsyncApi {
      
      /** 
       * Constructs {@link $AsyncApi}
       * 
       * @param {object} client
       */
      constructor(private readonly client: { 
        invoke(method: string, parameters: unknown): Promise<unknown> 
      }) {
        Object.freeze(this)
      }
  
      ${Object.keys(reference.functions)
        .map((name) => {
          const { comment = "", input, result } = getMethodType(name, reference);
          const alias = input.replace("$Input", "$DirectInput");

          return `
            /**
             * ${splitComments(comment)}
             * 
             * @param {${alias}} parameters {@link ${input}}
             * @returns {Promise<${result}>} Promise<{@link ${result}}>
             */
            async ${name}(parameters: ${alias}): Promise<${result}> {
              const result = await this.client.invoke("${name}", parameters);
              return result as ${result};
            }
  
          `;
        })
        .join("\n")}
    }
    
    Object.freeze($AsyncApi);
    Object.freeze($AsyncApi.prototype);`);

    reference.types.push(`
    
    /** 
     * Convenience class for sync API calls 
     * 
     * @class 
     */
    export class $SyncApi {
      
      /** 
       * Constructs {@link $SyncApi}
       * 
       * @param {object} client
       */
      constructor(private readonly client: { 
        execute(method: string, parameters: unknown): unknown 
      }) {
        Object.freeze(this)
      }
  
      ${Object.keys(reference.functions)
        .filter((name) => reference.syncFunctions.has(name))
        .map((name) => {
          const { comment = "", input, result } = getMethodType(name, reference);
          const alias = input.replace("$Input", "$DirectInput");

          return `
            /**
             * ${splitComments(comment)}
             * 
             * @param {${alias}} parameters - {@link ${input}}
             * @returns {${result}} {@link ${result}}
             */
            ${name}(parameters: ${alias}): ${result} {
              return this.client.execute("${name}", parameters) as ${result};
            }
  
          `;
        })
        .join("\n")}
    }
    
    Object.freeze($SyncApi);
    Object.freeze($SyncApi.prototype);`);
  }

  /** @type {string[]} */
  const results = [];

  /**
   *
   * @param {Namespace} reference
   * @returns
   */
  function joinNamespace(reference) {
    return `${reference.types.join("\n\n")}
    
  ${Object.values(reference.functions).join("\n\n")}`;
  }

  for (const [namespace, reference] of Object.entries(namespaces)) {
    const text = joinNamespace(reference);

    if (namespace === globalNamespace) {
      results.push(text);
    } else {
      results.push(`namespace ${namespace} { ${text} }`);
    }
  }

  for (const [name, value] of Object.entries(primitives)) {
    if (typeof value !== "string") continue;

    results.unshift(`
      ${name in primitiveComments ? `/** ${primitiveComments[name]} */` : ""}
      export type ${name} = ${value}
    `);
  }

  results.unshift(`
    export const typename = "${typeType}";
    export type typename = typeof typename;

  `);
  results.unshift("/* istanbul ignore file */");

  const result = results.join("\n\n");
  return result;
}

async function run() {
  const label = "Typings";
  console.time(label);

  const text = await readFile(resolve(__dirname, "../td/td_api.tl"), "utf8");
  console.timeLog(label, "Read td_api.tl");
  const result = await convert(text);
  console.timeLog(label, "Generated");

  // @ts-expect-error prettierConfig from json is incompatible with .format() types
  const formatted = await prettier.format(result, {
    ...prettierConfig,
    parser: "typescript"
  });
  console.timeLog(label, "Formatted");

  const outputPath = resolve(__dirname, "../src/generated/types.ts");

  await writeFile(outputPath, formatted, "utf8");
  console.timeLog(label, "Written");
  console.timeEnd(label);
}

run();
