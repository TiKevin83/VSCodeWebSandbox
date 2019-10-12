# VSCodeWebSandbox
A static web sandbox intended for use with VS Code inspired by local-minifier

https://github.com/amardeeprai/local-minifier

Intended to be used with VS Code and the Live Server extension.

## Initial setup:

Install VS Code, the Live Server extension, git, and node LTS

run "npm install" in the root directory

run "npm install --global gulp" for VS Code's sake

run "gulp"

Now the /dist directory should contain the initial example output

## Using the templates

F1: "Tasks: run task"

gulp: watch

Now gulp is watching the src directory for changes.  Open dist/index.html with live server.

Edits to /src files in Pug, SCSS, and TypeScript are immediately compiled and minified with Gulp, Live Server sees the changes and reloads the page automatically
