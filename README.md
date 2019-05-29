# BOLT-BDD-CucumberJS

Bolt BDD Test Framework on Cucumber JS

## 1. NodeJS

please first check your NodeJS

> npm -v
>
> node -v

if NodeJS has been installed go to step 2 directly

### Mac download and install instructions

>Open Terminal and type *brew update*
>
>Type *brew install node*

## 2. npm run build & npm install

pull code and cd into the root file, do *npm install*, then run *npm run build*, .ts file will be compiled to .js file into */dist* in this step

## 3. Download and install Webstorm IDEA

[https://www.jetbrains.com/webstorm/download/](https://www.jetbrains.com/webstorm/download/)

## 4. cucumber.js

open your webstorm install plugin "cucumber.js"

## 5. protractor.conf.js

**Before run case, you should build ts to js**.

open your project in webstorm and right click /dist/protractor.conf.js then select *run 'protractor.conf.js'*

## 6. Possible error

*No update-config.json found*   
solution: do *webdriver-manager update* in root file, then run protractor.conf.js again

there are two situations if still has the error *No update-config.json found*
1. check the result of *webdriver-manager update*, the download path in the result has some value like */usr/local/lib/node_modules/protractor/* OR webdriver-manager: command not found    
do *node_modules/protractor/node_modules/webdriver-manager/bin/webdriver-manager update* in the root file in terminal
2. *Error: Failed to make Github request, rate limit reached* in the result of *webdriver-manager update*     
    1. npm install webdriver-manager   
    2. node_modules/webdriver-manager/bin/webdriver-manager update   
    3. replace your file *node_modules/protractor/node_modules/webdriver-manager* with *node_modules/webdriver-manager*
3. Error: TypeError: require(...).promisify is not a function at Object     
check your node version with *node -v*, node10 is essential.     
if you need upgrade node version, pls try to follow below steps in terminal
    1. *nvm --version* check nvm has been installed, follow third part(3.nvm) of [the doc](https://github.corp.ebay.com/ecg-global/bolt-2dot0-frontend)    
    2. *nvm ls* check list of node, *nvm install 10* if node10 is not in your list    
    3. *nvm use 10* to change your current node version     
    4. *nvm alias default 10* to set node10 as default node version   
    5. check [here](https://www.jetbrains.com/help/webstorm/developing-node-js-applications.html) if it's still not working after node upgrade  

## 7. run case in terminal

npm test
npm test -- --storyList=gherkinExample --tags=@za,@desktop --site=za --vm=\<your vm\>     
more info see in [BOLT-BDD-CucumberJS/doc/overview.md](https://github.corp.ebay.com/ecg-global/BOLT-BDD-CucumberJS/blob/master/doc/overview.md)
