# Bugs
## local_server
 ### if you run `npm install` from terminal and run `npm run dev`, you will encounter the following problems.
 - Problem: TypeError: Invalid PostCSS Plugin found at: plugins[0]
 - Solution: add a js file `postcss.config.cjs`