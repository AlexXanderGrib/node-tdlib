// Run in devtools console on https://core.telegram.org/tdlib/options

let writable = `type TDLibOptionsWritable = {\n`;
let readable = `type TDLibOptionsReadable = TDLibOptionsWritable & {\n`;

for(const row of document.querySelectorAll('table').item(1).rows) {
  const [name, type, isWritable, description] = row.cells;

  if(name.textContent === 'Name') {
    continue;
  }

  let text = `  /** ${description.textContent?.trim()} */
  readonly ${name.textContent}?: ${type.textContent?.toLowerCase()};\n`;

  if(isWritable.textContent?.toLowerCase() === 'yes') {
    writable += text
  } else {
    readable += text;
  }

}

writable += '}';
readable += '}';

copy(writable + '\n\n' + readable)