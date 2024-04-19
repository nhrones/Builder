import * as CFG from './config.ts'

/** Build an entrypoint into a single ESM javascript output. */
export async function build() {
   Bun.build({
      entrypoints: CFG.Entry,
      outdir: CFG.OutDir,
      naming: CFG.BundleFile, 
      minify: CFG.Minify,
      format: "esm"
   })
   .then(async () => {
      // add the text -> //@ts-nocheck to the top of index.js
      const file = Bun.file(`./${CFG.OutDir}/${CFG.BundleFile}`);
      let text = await file.text();
      text = `//@ts-nocheck

` + text;
      await Bun.write(`./${CFG.OutDir}/${CFG.BundleFile}`, text);
   })
   .catch((e: any) => console.info(e));
}