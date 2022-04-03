# sample applications and algorithm repo

This repo is a playground of many sample apps and algorithms which I developed on my own way.
I wrote those as I understand those process and make is simple for my own understanding.
It may not be the best way to write the way I did but it shows how I understood it.
In some cases I created own problem and came up with own solution.
For example I wanted to write algorithms in Typescript but wanted to execute it directly from console.
For that I created JS file which complies selected algorithm file and execute and print output on console.

# algo project
Few algorithms example like permutations, tree and list using TypeScript.

# electron-bookmark project
Shows how web app within Electron shell communicate securely with shell. Also shows BrowserWindows placement example.

# Game project
Sample game developed in Angular and Rect. At this point I put logic in Angular service but in React I kept logic inside
view and managed state using shared properties. Later I learned how to manage state in store so don't need to pass from
parent to child in react app

# react-context-provider project.
Learned that state is managed in store and there are no services like in Angular which is OK but then also did not like
that we have one single store and all non related state goes there so this project I used rect context to keep each 
state in diff context.

# react-redux project
In previous project started maintaining state at central place but state update logic was not central. In this project
I learned how to use reducer to maintain logic at one place. Again single reducer for all unrelated logic is not good
so I tried to make multiple store and multiple reducer so that way non related business logic can be in diff reducer.

