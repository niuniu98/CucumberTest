## Basic concept
**JavaScript** is a language that runs *inside* web browsers as part of documents loaded by the browser. It gives behaviour to your pages (HTML gives semantic structure, CSS gives form or look and feel).
> Reference:
> CH https://wangdoc.com/javascript/basic/index.html<br/>
> EN https://www.w3schools.com/js/default.asp

**Node.js** is *NOT* a kind of language like Java or JavaScript and is a JavaScript runtime built on Chrome's V8 JavaScript engine
V8 is the Google Chrome JS engine and 'node' is a front-end to it that can be used to run JavaScript scripts *outside* the browser.
Node.js or just Node usually refers to a collection of objects and methods available to your JavaScript code when run in V8 or through the node interpreter.
Compared with Java, it's like JRE = Java + JVM ,Node = JavaScript + V8.
> Reference:
> CH http://www.runoob.com/nodejs/nodejs-tutorial.html<br/>
> EN https://www.w3schools.com/nodejs/

## What's the different between Client-Side JavaScript and Server-side JavaScript
Client side javascript as the name says, it javascript code, running on the client side,
a typical scenario of this is when you access a website and you run javascript code.
The code being executed is being executed on the clients machine. This is why it's called client side javascript.<br/>
In conclusion **Client-Side JavaScript = ECMAScript + DOM(operation for web page) + BOM(operation for browser)**

Server side javascript is javascript code running over a server local resources, it's just like C# or Java, but the syntax is based on JavaScript,
a good example of this is Node.JS, with Node.JS you write javascript to program on the server side, and that code can be seen as normal C#, C, or any other server side language code.
With server-side code, you can still send javascript to the client-side, but there is a great differences between both,
because the client side code is restricted to the clients machine resources, in terms of computing power and permissions.
For example client-side javascript can't access the clients hard disk, while with server side you can access your server hard disk without any problem<br/>
**Nodejs = ECMAScript + OS + file system + net + database +...**

**ECMAScript** (or ES) is a scripting-language specification standardized by Ecma International,
**ES6 (ES2015)** is a fantastic step forward for the JavaScript language, This update adds significant new syntax for writing complex applications, including classes and modules, but defines them semantically in the same terms as ECMAScript 5 strict mode. Other new features include iterators and for/of loops, Python-style generators, arrow functions, binary data, typed arrays, collections (maps, sets and weak maps), promises, number and math enhancements, reflection, proxies (metaprogramming for virtual objects and wrappers) and template literals.
> Reference:
> CH http://es6.ruanyifeng.com/<br/>
> EN https://www.w3schools.com/js/js_es6.asp
