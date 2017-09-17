# Angular2 Quickstart Production Build
This is almost basic codebase for angular 2 with minimal components and functionality. Configuration for production build is also done here.

Initial Steps
==============
After cloning the project do the following.
1) Delete .git folder and .gitignore file
2) type the command: npm install

JIT Compilation
===============
For development use Just In Time (JIT) compilation. Use following command

npm start


AOT Compilation
===============
For creating production build  use Ahead of Time (AOT) compilation. Use following command

npm run build:aot


Run the Application without server
==================================
1) Change <base href="/"> to <base href=""> in index-aot.html
2) Change RouterModule.forRoot(routes) to RouterModule.forRoot(routes,{useHash:true}) in all modules where router is defined

Due to security issue modern browsers doesn't support PathLocationStrategy for applications running from local file system. Server is required for that.
To make the application run from local these changes are required which uses HashLocationStrategy.
