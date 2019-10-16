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

To make a new page, follow the example index.pug to start from an included layout and place it in "src/html/pages" or a further subdirectory if you want that structure to flow to "dist" for production.  SASS and Typescript files intended for output sit directly under "src/css" and "src/js" respectively.

run "gulp watch" and open "dist/index.html" with live server.

Edits to the Pug, SASS, and TypeScript files in "src" are seen by "gulp watch" which then triggers any relevant gulp tasks.  Live Server sees the resulting changes to the "dist" directory and reloads the browser.
See something in the output you don't like?  The gulp tasks are set up to generate sourcemaps for CSS and JS, so you can follow the chain back and see where a rule or script in your output came from (sadly HTML sourcemaps don't appear to be a thing).
