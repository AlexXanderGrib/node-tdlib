const assert = require("assert");
const { family } = require("detect-libc");
const { builds, downloader } = require("./lib");
const { writeFile } = require("fs/promises");

const platform = process.env.TBM_PLATFORM ?? process.platform;
const arch = process.env.TBM_ARCH ?? process.arch;

(async function main() {
  const libc = process.env.TBM_LIBC ?? (await family()) ?? undefined;
  const build = builds.find(
    (b) => b.cpu === arch && b.os === platform && b.libc === libc
  );

  assert(
    build,
    `Build not found for this platform ${platform} ${arch} libc - ${libc}`
  );

  let name = `tdjson-${build.os}-${build.cpu}`;

  if (build.libc) {
    name += `-${build.libc}`;
  }

  const meta = await downloader.get("meta.yml");
  const content = await downloader.get(build.file);

  const { tdlibPath, commit, version } = require(
    `${process.cwd()}/packages/${name}`
  );
  const metaContent = `version: ${version}\ncommit-hash: ${commit}`;
  assert.equal(metaContent, meta.toString("ascii").trim());

  await writeFile(tdlibPath, content);

  console.log(tdlibPath);
})();
