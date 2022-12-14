const { readFileSync, writeFileSync } = require("fs");
const { resolve } = require("path");
const prettier = require("prettier");
const prettierConfig = require("../.prettierrc.json");
const text = readFileSync(resolve(__dirname, "../td/td_api.tl"), "utf-8");

const label = "Typings";
console.time(label);

const primitiveComments = {
  bytes: "String of bytes in HEX or Base64",
  int64: "String digits. Use BigInt for handling this",
  int53:
    "(float64) Number ranging from Number.MIN_SAFE_INTEGER to Number.MAX_SAFE_INTEGER",
  int32: "(int32) Number ranging from -2147483648 to 2147483647",
  double: "(float64)"
};

const primitives = {
  vector: false,
  "vector<T>": "Array<T>",
  "vector$Input<T>": "ReadonlyArray<T>",
  boolFalse: "false",
  boolTrue: "true",
  int64: "string",
  int32: "number",
  int53: "number",
  double: "number",
  string: false,
  bytes: "string"
};

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
 * @returns {Declaration}
 */
function parseTd(declarationWithCommends) {
  const mainRegex =
    /^((?<namespace>\w+?)\.)?((?<name>\w+?)(#(?<id>[0-9a-f]{1,13}))?)(\s(?<body>.*))?\s*=\s*(?<result>.*);$/g;

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

  parsed.name = match.groups.name;
  parsed.result = match.groups.result;

  if (match.groups.id) parsed.id = parseInt(match.groups.id, 16);
  if (match.groups.namespace) parsed.namespace = match.groups.namespace;

  parsed.body = {};

  if (match.groups.body) {
    const text = match.groups.body;
    let pair = bodyRegex.exec(text);

    while (pair !== null) {
      parsed.body[pair.groups.key] = pair.groups.value;
      pair = bodyRegex.exec(text);
    }
  }

  return parsed;
}

/**
 *
 *
 * @param {string} typename
 * @return {string}
 */
function getInputAlias(typename) {
  const genericIndex = typename.indexOf("<");

  if (genericIndex > -1) {
    const name = typename.slice(0, genericIndex);
    // +-1 = stripping < >;
    const generic = typename.slice(genericIndex + 1, typename.length - 1);

    return `${name}$Input<${getInputAlias(generic)}>`;
  }

  if (typename in primitives) {
    return String(typename);
  }

  return `${typename}$Input`;
}

/**
 *
 *
 * @param {Declaration} declaration
 */
function generateFunction(declaration) {
  const text = `
${
  declaration.comments?.description
    ? `/** ${declaration.comments.description} */`
    : ""
}
export type ${getInputAlias(declaration.name)} = {
  readonly _: "${declaration.name}";

  ${Object.entries(declaration.body)
    .map(
      ([key, value]) => `
    /**
     * ${(declaration.comments?.[key] ?? "").replace(/\n/g, "\n * ")}
     * @type {${getInputAlias(value)}} {@link ${value}}
     */
    readonly ${key}?: ${getInputAlias(value)};
  `
    )
    .join("\n")}
};

/**
 * ${declaration.comments?.description ?? ""}
 * 
 * @param {${getInputAlias(declaration.name)}} parameters
 * @return {${declaration.result}} {@link ${declaration.result}}
 */
export type ${declaration.name} = (parameters: ${getInputAlias(
    declaration.name
  )}) => ${declaration.result};
  `;

  return text;
}

/**
 *
 *
 * @param {Declaration} declaration
 */
function generateType(declaration) {
  return `
${
  declaration.comments?.description
    ? `/** ${declaration.comments.description} */`
    : ""
}  
export type ${declaration.name} = {
    _: "${declaration.name}";
    
    ${Object.entries(declaration.body)
      .map(
        ([key, value]) => `
      /**
       * ${(declaration.comments?.[key] ?? "").replace(/\n/g, "\n * \n * ")}
       * @type {${value}} {@link ${value}}
       */
      ${key}: ${value}
    `
      )
      .join("\n")}
  }
  
export type ${getInputAlias(declaration.name)} = {
  readonly _: "${declaration.name}";
  
  ${Object.entries(declaration.body)
    .map(
      ([key, value]) => `
    /**
     * ${(declaration.comments?.[key] ?? "").replace(/\n/g, "\n * \n * ")}
     * @type {${value}} {@link ${value}}
     */
    readonly ${key}?: ${getInputAlias(value)}
  `
    )
    .join("\n")}
}`;
}

/**
 *
 *
 * @param {string} text
 * @return {Declaration[]}
 */
function parse(text) {
  const lines = text.split("\n");
  const results = [];
  const group = [];

  lines.forEach((line, index) => {
    if (letter.test(line)) {
      group.push(line);

      let prev = lines[--index];
      while (prev && prev.startsWith("//")) {
        group.push(prev);
        prev = lines[--index];
      }

      const text = group.splice(0, group.length).reverse().join("\n");
      const result = parseTd(text);

      if (result) results.push(result);
    }
  });

  return results;
}

const [typesText, functionsText] = text.split("---functions---");
const globalNamespace = "__global";
const namespaces = {};

const types = parse(typesText);
types.forEach((declaration) => {
  const namespace = declaration.namespace ?? globalNamespace;

  const ref = (namespaces[namespace] ??= {
    types: [],
    joins: {},
    functions: {}
  });

  if (!declaration.result.includes(" ")) {
    const set = (ref.joins[declaration.result] ??= new Set());
    set.add(declaration.name);
  }

  if (!(declaration.name in primitives)) {
    ref.types.push(generateType(declaration));
  }
});

Object.values(namespaces).forEach((ref) => {
  Object.entries(ref.joins).forEach(([key, set]) => {
    const types = [...set];
    const inputs = types.map((type) => getInputAlias(type));

    ref.types.push(`
/**
 * Any of:
${types.map((type) => ` * - {@link ${type}}`).join("\n")}
 */
export type ${key} = ${types.join(" | ")}

/**
 * Any of:
${inputs.map((type) => ` * - {@link ${type}}`).join("\n")}
 */
export type ${key}$Input = ${inputs.join(" | ")}
  `);
  });
});

const functions = parse(functionsText);

functions.forEach((declaration) => {
  const namespace = declaration.namespace ?? globalNamespace;

  const ref = (namespaces[namespace] ??= {
    types: [],
    joins: {},
    functions: {}
  });

  ref.functions[declaration.name] = generateFunction(declaration);
});

Object.values(namespaces).forEach((ref) => {
  ref.types.push(`export type __functions = {
    ${Object.keys(ref.functions)
      .map((name) => `readonly ${name}: ${name};`)
      .join("\n")}
  }`);
});

const results = [];

function joinNamespace(ref) {
  return `${ref.types.join("\n\n")}
  
${Object.values(ref.functions).join("\n\n")}`;
}

Object.entries(namespaces).forEach(([namespace, ref]) => {
  const text = joinNamespace(ref);

  if (namespace === globalNamespace) {
    results.push(text);
  } else {
    results.push(`namespace ${namespace} { ${text} }`);
  }
});

Object.entries(primitives).forEach(([name, value]) => {
  if (typeof value !== "string") return;

  results.unshift(`
    ${name in primitiveComments ? `/** ${primitiveComments[name]} */` : ""}
    export type ${name} = ${value}
  `);
});

console.timeLog(label, "Generated");

const result = results.join("\n\n");
const formatted = prettier.format(result, {
  ...prettierConfig,
  parser: "typescript"
});

console.timeLog(label, "Formatted");
writeFileSync(resolve(__dirname, "../src/generated/types.ts"), formatted, "utf-8");

console.timeLog(label, "Written");
console.timeEnd(label);
