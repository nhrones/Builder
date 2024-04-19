import type { Config } from 'config' //'./deps.ts'
import { getConfig } from 'config' //'./deps.ts'

//const BundleName = 'bundle'

// If the first CLI argument (args[0]) = -h or ?
// show help text then just exit
if (Bun.argv[2] === '-h' || Bun.argv[2] === '?') {
   console.log(`
Build Help --   
Usage:
Commandline args:
-h or ? = this help

/src/dev.json - build:
Out: string - the folder to place the bundle in (defaults to 'dist')
Entry: string[] - default = ["./src/main.ts"]
Watch: string - the folder to watch for change
Minify: boolean - true or false (defaults to false)`
   );
}

// initial default configuration for this app
const requiredCfg = {
   "DEV": true,                     // DEV flag for console
   "Entry": [`./src/main.ts`] ,     // an array of entry files to start Build from
   "Minify": false,                 // minify the bundle?
   "Out": "dist",                   // the folder to place esBuild bundle.js in 
   "BundleName": "bundle",
} satisfies Config


// gets an existing configuration from ./.vscode/dev.json
// if not found, just build it from requiredCfg above
const cfg = await getConfig("Build", Bun.argv.slice(2), requiredCfg)

// export all configuration constants
export const DEV = cfg.DEV ?? false
export const Entry = cfg.Entry ?? [`./src/main.ts`]
export const Minify = cfg.Minify ?? false
export const OutDir = (cfg.Out && cfg.Out.length > 0) ? `./${cfg.Out}` : '.'
export const BundleFile = `/${cfg.BundleName}.js`
