# About Me
I work in a small company that is in communication and collaboration software product provider. My role is a client-side lead or architecture. My responsibility includes providing a solution for the business problem (no matter which client-side framework is used) and keeping client-side software performative and keeping client-side code manageable/extendable. Even though I spend most of my time on design, creating user stories, and managing store execution, from time to time I have to create POC and help junior software developers to solve programming issues so I do code (which is Fun). But it is hard to keep remembering every diff framework syntax when you are working in many different ones. To solve that issue, I created this repo which allows me to refer back when I needed and also can work as a showcase of the areas where I already worked. 

# About Repo

This repo is a playground of many sample apps and algorithms which I developed in my own way. I wrote those as I understand those processes and make them simple for my own understanding. It may not be the best way to write the way I did but it shows how I understood it. In some cases, I created my own problem and came up with my own solution. For example, I wanted to write algorithms in Typescript but wanted to execute them directly from the console. For that, I created a JS file that complies selected algorithm file and execute and prints output on the console. There are also examples of Rect, Angular, and Electron's key features.

# algorithms project
Few algorithms example permutations, trees, and lists using TypeScript.

# electron-bookmark project
When I designed an Electron-based project during Electron version 6.x/7.x, I used Electron as a thin shell and kept all business logic in the hosted web app. During that design, the main focus was to not interrupt the user because of upgrades. Sure you can upgrade when the client is idle or at midnight but I pushed to avoid upgrade due to business logic upgrade. The hybrid design allowed to avoid shell upgrade (the shell is upgraded if there is a security fix or once a year to the latest version) and only the web page is updated which is very fast so users do not notice it. This approach is considered a security risk now in Electron as all node & electron APIs are available to web pages but it can be managed if we do now allow certificate check failure (do not return true in electron certification check callback) and avoid cross scripting in the web app or allow going to other external pages (which you should be taking care of it as a normal web app), then no one can attack using the web page so closing this door in Electron is a disappointment. Sure not everyone should use that way and try to use the standard IPC way to communicate. There are other advantages like performance and order of execution by using the IPC way but not really required to use it. Because the native access from the web page is unsupported, I tried to learn the IPC way in this example

# mole-game project
Sample game developed in Angular and Rect. At this point, I put logic in the Angular service but for React I kept logic inside the view and managed the state using shared properties. Later I learned how to manage state in store so don't need to pass from parent to child in react app

# react-context-provider project.
Learned that state is managed in store and there are no "services" like in Angular which is OK but then also did not like that we have one single store and all non-related state goes there so this project I used The Rect Context to keep each 
state in diff context.

# react-redux project
In the previous project, I started maintaining the state at a central place but the state update logic was not central. In this project, I learned how to use reducer to maintain logic at one place. Again single reducer for all unrelated logic is not good
so I tried to make multiple store and multiple reducer so that way non-related business logic can be in diff reducers. Came across the issue of how to bind store data with the view. You can use "connect" to bind store to view property but that allows to bind with a single store and in this example, we have multiple stores. For time being I am using subscribe method.

# microservice-jwt project
There are many microservice frameworks like Django. Django is a full-fledge (batteries included) framework and very good for a very big team if you want everyone to follow the same patterns and rules. But if you want more control, performance, and cost-saving solution, then break down each API into lambda/cloud functions. Lambda functions only run when the request comes so it is cost-effective instead of running microservice 24 by 7. Lambda function allows mixing of programing languages so each microservice team can have a choice. Having said that I prefer JavaScript so the frontend team developer can also help the backend team when needed. If you want a structured micro-service based on JavaScript, then NestJs can be used. In any micro-service, the first thing you have to set up is authentication and authorization. For a pure Lambda-based microservice, you can use "passport.js" to validate the user and then set the JWT token in cookies. Yes, now cookies are safe because you can force the same-origin policy. This project shows sample micro-service with JWT token

# model-binding project
Demonstration of how angular model two way binding works. In Rect, there is no two way binding so need to use third party library to get two way binding or use createRef (this.myRef = React.createRef(); <div ref={this.myRef} )

# pwa-graph project
