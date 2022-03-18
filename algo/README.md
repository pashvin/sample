To run any algorithm file use following example

1. npm i (only first time)
2.  npm run start --file=permutation (file name without .js extension)

How it works?

1. Environment installs typescript compiler
2. npm run start runs "runts.jsscript" using node.
3. that js script uses node function to fire tsc compiler
4. If compilation error, then it prints on console
5. if no compilation error, then runs output js file.
6. prints console of execution and then clean up temp js files.
