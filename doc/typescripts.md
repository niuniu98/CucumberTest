## What's the TypeScript

TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language.
TypeScript can be compiled to JavaScript and can run on any browsers, computers and OS.

## Why use TypeScript

1. An part of our team come from a strongly typed language like Java, TypeScript is a good alternative, because it's much more like java</br>
2. TypeScript support es6</br>
3. TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces. One of the big benefits is to enable IDEs to provide a richer environment for spotting common errors as you type the code.</br>

## TypeScript, ECMAScript & JavaScript

ECMAscript is the name of the formal language definition and Javascript is the common implementation of it in browsers.</br>
Typescript is a language that compiles javascript, make javascript more like java.</br>

> Reference:</br>
> CH https://www.tslang.cn/docs/handbook/</br>
> EN https://www.typescriptlang.org/docs/home.html</br>

## New Structure

| --- ads/</br>
|
| --- doc/</br>
|
| --- element_xpath/</br>
|
| --- feature</br>
|      |
|      | --- ***.feature</br>
|
| --- src</br>
|      |
|      |  --- bapi/</br>
|      |
|      |  --- bdd/</br>
|      |
|      |  --- config/</br>
|      |
|      |  --- data/</br>
|      |
|      |  --- pages/</br>
|      |
|      |  --- util/</br>
|      |
|      | --- step_definitions/</br>
|      |
|      |  --- protractor.conf.ts</br>
|
| --- config.json</br>
|
| --- ...some other files and folders</br>

## How to run upgrade to the TypeScript version of bolt bdd from node10 version

1. pull master and make sure you have the latest code
2. remove the file step_definitions under /features if it appeared there
2. run 'npm install'
3. disable your eslint check(optional) & [enable your tslint check](https://www.jetbrains.com/help/webstorm/using-tslint-code-quality-tool.html)
4. run 'npm run build', .ts file will be compiled into .js file in to */dist* in this step
5. run 'npm test' or run protractor.conf.js in /dist

## Difference between TypeScript, Node6 and Node10 
##### Type
Type|Node6 and Node10|TypeScript
----|----------------|----------     
number| let n = 123;|let n: number = 123;
string| let message = "hello";|let message: message = "hello";
boolean| let n = true;|let n:boolean=false;
null| let age = null;|let age:number:number=null;
array|let cars=['Visa', 'Maste­rCa­rd']; |let cards: string[] = ['Visa', 'Maste­rCa­rd'];
const|const n = 123;|const n:number = 123;
any|NA|let something: any = "Can be anythi­ng";
undefined|let n = undefined|NA

##### Function
