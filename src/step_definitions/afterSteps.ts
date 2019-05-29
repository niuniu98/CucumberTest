'use strict';

import { After, Status } from "cucumber";
import { browser } from 'protractor';
import {getFileName} from "../util/util";
import {logConsole} from "../util/logger";

const FILE_IDENTIFIER = getFileName(__filename);

After(function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        return browser.takeScreenshot().then((png: string) => {
            logConsole(FILE_IDENTIFIER,'after all---------------');
            const decodedImage = new Buffer(png.replace(/^data:image\/png;base64,/, ''), 'base64');
            this.attach(decodedImage, 'image/png');
            browser.close();
        });
    }
    // return browser.close().then(() => {
    //   browser.switchTo().alert().then(
    //       function(alert) {
    //         alert.accept();
    //       },
    //       function(err) { }
    //   );
    // }).catch((err) => {});
});
