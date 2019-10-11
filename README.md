# VSCodeWebSandbox
A static web sandbox intended for use with VS Code inspired by local-minifier

https://github.com/amardeeprai/local-minifier

Intended to be used with VS Code and the Live Server extension.

Initial setup:
have node.js
run "npm install" in the root directory
run "npm install --global gulp" for VS Code's sake
run "gulp"

Now the /dist directory should contain the initial example output

Configure gulp as the task runner for VS Code
F1: "Tasks: run task"
gulp: watch

Now gulp is watching the src directory for changes.  Open dist/index.html with live server.

End result should be that edits to template files in Pug, SCSS, and TypeScript are immediately compiled and minified with Gulp
Live Server should see Gulp's changes to the live files and reload the page automatically
