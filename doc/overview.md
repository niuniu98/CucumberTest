## The Overview of New BDD Framework
This is an overview of new BDD integretion testing framework for frontend, will tell you what the new framework is, the structure of the framework and how to run the cases with the framework.<br/>
The framework based on cucumber-js and protractor, Cucumber is a tool for running automated tests written in plain language.<br/>
**cucumber-js** is the JavaScript implementation of Cucumber and runs on Node.js, it is used for web applications for performing acceptance tests and  provides a higher-level view of the testing process of the suite, express features and scenarios in almost “natural language” syntax, a feature describing the functionality of an app is composed of several scenarios. Each scenario consists of a series of steps that are expressed in Given, When, Then sentences. These sentences are then turned into a series of steps, it is all regular expression pattern matching.<br/>
**protractor** is a tool for browser automation and end-to-end testing, is bascially an addition on top of selenium-webdriver,In general, you can select and inspect any DOM element on the page with so-called locators — e.g., locate an element by CSS selector or by ID — and trigger keyboard, mouse and also touch events.

### Structure(only key files)
this part has been moved to [here](https://github.corp.ebay.com/ecg-global/BOLT-BDD-CucumberJS/blob/master/doc/typescripts.md)

### What can we do on it    
1.setting in config.json(recommend) or /src/protractor.conf.ts or /dist/protractor.conf.js and there are two ways to run your test in IDE    

**run by protractor.conf.js**  
run #npm run build# fist and right click ./dict/protractor.conf.js and run it   
**run by protractor.conf.ts**  
you can run ts file directly and debug ts file as well by this way, open [Edit Configurations](https://www.jetbrains.com/help/webstorm/creating-and-editing-run-debug-configurations.html) and add node.js configuration then set it as shown in the photo   
![node configuration](https://media.github.corp.ebay.com/user/25401/files/ff089a00-69bd-11e9-88b5-6e4c8b9d5117)   
2.run in teminal    

**run single case**
1. change *storyList* with your feature name
2. npm test -- --storyList=gherkinExample

**run cases**
1. change *storyList* as 'featurname1, featurename2'
2. npm test -- --storyList=gherkinExample,postAdExample

**run cases in a folder**
1. change *file* with your file name
2. npm test -- --file=tests

**run cases by tag**
1. change *tags* as '@za,@desktop'
2. npm test -- --tags=@za,@desktop

**run case on vm**
1. change *vm* with your own VM
2. npm test -- --vm=your vm

**run case on remote selenium**
1. change *grid* with the grid address
2. npm test -- --grid=grid address

**run case on desktop**
1. change *device* with 'desktop' and *browser* with one of (chrome firefox safafi)
2. npm test -- --device=desktop --browser=chrome

**run case on mobile**
1. change *device* with 'mobile' and *mobileName* with one of devices wrote in bolt_config/deviceInfo.js
2. npm test -- --device=mobile --mobileName=iphone_6

**run case with different window size**<br/>
*ps.this one is supported only on desktop<br/>
1. change *windowSize* as '1400,800'
2. npm test -- --device=desktop --windowSize=1400,800

**run cases parallelly**
1. change *maxInstances* as the number you want
2. npm test -- --maxInstance=2 -- storyList=gherkinExample,postAdExample

**run case on different site**
1. change *site* with one of supported sites(za, ie, sg, pl, mx_vns, ar)
2. npm test -- --site=mx_vns

**enable html report**<br/>
the html report was enableb by default, comment *openReportInBrowser: true* in the conf.js/conf.ts

**enable tslint check**<br/>
pls enable your eslint check for the code style, [see this if you don't know how to enable it](https://www.jetbrains.com/help/webstorm/using-tslint-code-quality-tool.html)
