# VSCodeWebSandbox
inspired by local-minifier
https://github.com/amardeeprai/local-minifier

An environment for robust static web development with VS Code and Live Server

Uses gulp to compile templates in Pug, SASS, and Typescript and minify everything for production

## Initial setup:

Install VS Code, the Live Server extension, git, and node LTS

run "npm install" in the root directory

run "npm install --global gulp" for VS Code's sake

run "gulp"

Now you should have a production ready "dist" directory

## Using the environment

### New Pages

follow the example index.pug:

Extend the layout template with a new file in "src/html/pages" or a further subdirectory

.html files are generated under "dist" matching the above directory structure

### New Scripts and Styles

Make a new SASS or Typescript file directly under "src/css" and "src/js"

.css and .js files are generated to "dist/css" and "dist/js"

### Live Editing

run "gulp watch" and open "dist/index.html" with live server

Edits to the Pug, SASS, and TypeScript files in "src" are seen by "gulp watch" which triggers any relevant gulp tasks.  Live Server sees the resulting changes to the "dist" directory and reloads the browser

See something in the output you don't like?  The gulp tasks generate sourcemaps for CSS and JS, so you can follow the chain back and see where a rule or script came from
