import browserInfo from './config/browserInfo';
import deviceInfo from './config/deviceInfo';
const cwd = require('app-root-path');
import config from '../config.json';
import {getFileName} from "./util/util";
import {logConsole, logInfo} from "./util/logger";
const FILE_IDENTIFIER = getFileName(__filename);
const argv = require('yargs')
    .default('storyList', config.storyList)
    .default('file', config.file)
    .default('browser', config.browser)
    .default('device', config.device)
    .default('mobileName', config.mobileName)
    .default('maxInstances', config.maxInstances)
    .default('windowSize', config.windowSize)
    .default('tags', config.tags)
    .default('retry', config.retry)
    .default('grid', config.grid)
    .default('vm', config.vm)
    .default('site', config.site)
    .default('direct',config.connect)
    .default('ENV', 'local')
    .default('timeout', config.timeout).argv;

logConsole(FILE_IDENTIFIER,'BOLT BDD IS RUN ON :'+argv.ENV);

const defaultConfig = {
    // Custom parameters can be specified here
    seleniumAddress: argv.grid,
    params: {
        vm: argv.vm,
        site: argv.site,
        device: argv.device,
        mobileName: argv.mobileName,
        testCaseTimeout: argv.timeout,
        uploadImagePath: cwd + `/images/`,
        xpathFilesDir: cwd + `/element_xpath/`,
        deviceSize: {
            width: 1400,
            height: 800
        },
        protocol: 'http',
        failuresRetryCount: argv.retry,
        bapiFailuresRetryCount: 2
    },
    // set to 'custom' instead of cucumber
    framework: 'custom',
    // The path relative to the current argv file
    frameworkPath: cwd + '/node_modules/protractor-cucumber-framework',
    // Options to be passed to cucumber
    cucumberOpts: {
        // test: 'test',
        format: ['json:report/'+argv.site+'/result.json'],
        // Required step definitions
        require: ['./step_definitions/**/*.ts', './step_definitions/**/*.js'],
        // filter case with tags
        tags: [''],
        strict: true
    },
    allScriptsTimeout: 60000,
    // comment directConnect when test on safari
    directConnect: true,
    // Capabilities to be passed to the webdriver instance, will be overwrote
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 1,
        specs: ['features/test.feature']
    },
    // Cucumber report configuration
    plugins: [
        {
            package: cwd + '/node_modules/protractor-multiple-cucumber-html-reporter-plugin',
            // package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
            // package: 'protractor-multiple-cucumber-html-reporter-plugin',
            options: {
                jsonOutputPath: 'report',
                automaticallyGenerateReport: (argv.ENV === 'local'),
                removeExistingJsonReportFile: true,
                openReportInBrowser: true,
                removeOriginalJsonReportFile: true,
                customData:{
                    title:'TEST',
                    data:[
                        {label:'pp1',value:'test1'},
                        {label:'pp2',value:'test2'},
                        {label:'pp3',value:'test3'},
                        {label:'pp4',value:'test4'}
                    ]
                },
                displayDuration: true
            }
        }
    ]
};

const cap = browserInfo[argv.browser + 'Capabilities'];
cap.maxInstances = argv.maxInstances;
const list = argv.storyList.split(',');
for (let i = 0, len = list.length; i < len; i++) {
    list[i] = '../features/' + argv.file + '/' + list[i] + '.feature';
}
cap.specs = list;
const device = argv.device;
let args;
if (device === 'mobile') {
    args = ['', ''];
    args[0] =
        '--window-size=' +
        deviceInfo[argv.mobileName].browserWindowSize.replace('x', ',');
    args[1] = '--user-agent=' + deviceInfo[argv.mobileName].userAgent;
} else {
    args = [''];
    args[0] = '--window-size=' + argv.windowSize;
}
if(argv.browser ==='safari' || argv.direct === 'false' || argv.direct === false || argv.grid !== ''){
     defaultConfig.directConnect = false;
}
cap[argv.browser + 'Options'].args = args;
defaultConfig.capabilities = cap;
const tagStr = ['@' + argv.site, '@' + argv.device];
if (argv.tags !== '') {
    for (const tag of argv.tags.split(',')) {
        tagStr.push(tag);
    }
}
// defaultConfig.cucumberOpts.tags = tagStr;
module.exports.config = defaultConfig;
