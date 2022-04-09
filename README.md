# About Me
I work in a small company which is in communication and collobration software product provider. My role is a client side lead or architecture. My main responsibility includes providing solution for the business problem (no matter which client side framework is used) and keep client side software performative and keep client side code managable/extendable. Event I spend most of my time on design, creating user stories, managing store execution, time to time I have to create POC and help junior software developer to solve programing issues so I do code (which is Fun). But it is hard to keep remembering every diff framework syntax when you are working in many different one. To solve that issue, I created this repo which allows me to refer back when I needed and also can work as show case of the area where I already worked. 

# About Repo

This repo is a playground of many sample apps and algorithms which I developed on my own way.
I wrote those as I understand those process and make is simple for my own understanding.
It may not be the best way to write the way I did but it shows how I understood it.
In some cases I created own problem and came up with own solution.
For example I wanted to write algorithms in Typescript but wanted to execute it directly from console.
For that I created JS file which complies selected algorithm file and execute and print output on console.
There are also example of Rect, Angular and Electron's key features

# algo project
Few algorithms example like permutations, tree and list using TypeScript.

# electron-bookmark project
When I designed Electron based project during Electron version 6.x/7.x, I used Electron as a thin shell and kept all login in hosted web app.
During that desing, main focus was to not interrupt  

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

