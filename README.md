# Builder utility
This utility allows Bun:Build to run from the command line.   
Once globally installed, running _build_ from the root of a project will auto-create a dev.json in the ./.vscode folder. 
```ts
{
    "Build": {
        "DEV": true,
        "Entry": [
            "./src/main.ts"
        ],
        "Minify": false,
        "Out": "dist",
        "BundleName": "bundle"
    }
}
```
The Build configuration above is as follows: 
  - DEV -- a boolean to use for developement
  - Entry -- a string array of entryPoint paths
  - Minify -- boolean to indicate if build should minify
  - Out -- the folder to output to
  - BundleName -- a file name for the build output

You can modify any of the above config props and the change will be used on next use.
